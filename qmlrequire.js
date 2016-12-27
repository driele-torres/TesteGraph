.pragma library

var debugging = false;

function baseDir(file) {
    return file.substr(0, file.lastIndexOf('/') + 1);
}

function baseName(file) {
    return file.substr(file.lastIndexOf('/') + 1);
}

function basePath(path) {
    return path.substr(path.indexOf('/') + 1);
}

if(!Array.prototype.contains) {
    Array.prototype.contains = function (elem) {
        return this.indexOf(elem) !== -1;
    }
}

function debug() {
    if(debugging && console && console.debug) {
        console.debug.apply(this, arguments);
    }
}

function error() {
    if(console && console.error) {
        console.error.apply(this, arguments);
    }
}

var cache = {};
var searchPaths = ['node_modules'];
// Can we trick this into working for relative includes in subdirs?
var cachedPaths = [];

// Need to define them in the top script scope so they are visible in the imports
var module = {};
var exports = {};

// Hack for browserisms,nodeisms
var window = {};
var process = { title: 'QML' }

// require recursion depth counter
var depth = 0;

function require(lib) {
    depth += 1;
    debug('Require depth: ' + depth);
    if(cache.hasOwnProperty(lib)) {
        debug('Require: cache hit for: ' + lib);
        return cache[lib];
    }

    // Setup for current import
    exports = module.exports;
    var res;
    var files = [];

    debug('Require: called for: '+ lib);
    var localRequire = (lib.substr(0,2) === './');
    debug('Require: local require: ' + localRequire);
    if(localRequire) {
        if(lib[lib.length] === '/') {
            lib = lib + 'index.js';
        }
        var cleanName = basePath(lib)
        if(lib.substr(lib.length - 3, 3) !== '.js') {
            files.push([lib + '.js']);
            files.push([lib + '/', 'index.js']);
            cachedPaths.forEach(function(path) {
                files.push([path, cleanName + '.js']);
                files.push([path + cleanName + '/', 'index.js']);
            });
        } else {
            files.push([lib]);
            cachedPaths.forEach(function(path) {
                files.push([path, cleanName]);
            });
        }
    } else {
        searchPaths.forEach(function(path) {
            files.push([path + '/', lib + '.js']);
            files.push([path + '/' + lib + '/', 'index.js']);
            files.push([path + '/' + lib + '/', baseName(lib) + '.js']);
        });
    }
    var returnModule;
    debug('Require: will search: ' + JSON.stringify(files));
    var success = files.some(function(entry) {
        var file = entry.join('');
        // Try to implement nodes require
        debug('Require: trying: ' + file);
        //Preliminary adding include path to cached paths
        var cached = false;
        var newCache = baseDir(file);
        if(!cachedPaths.contains(newCache)) {
            cachedPaths.push(newCache);
            cached = true;
        }

        // Need to save the current module and restore after, there could be more require calls
        var saveModule = module;
        module = { exports: {} };
        exports = module.exports;
        res = undefined;
        Qt.include(file, function(result){
            //FIXME: This only works because the include callback seems to be evaluated synchronously
            res = result;
        });
        // Busy wait for the include to finish
        // The include and callback seem to run synchronously, never seen this run
        while(res === undefined) {
            debug("Waiting for include to finish...");
        }
        returnModule = module;

        if(res.status === res.OK) {
            cache[lib] = returnModule;
            return true;
        } else if (res.status === res.EXCEPTION) {
            error('Exception while loading: ' + lib);
            error('Exception: ' + res.exception);
        } else {
            // Not found, probably not a good search path either
            if(cached) {
                cachedPaths.pop();
            }
            return false;
        }
    });
    depth -= 1;
    if(success) {
        debug('Require: successfully loaded library: ' + lib);
        return returnModule.exports;
    } else {
        error('Require: could not load library: ' + lib + ' code: ' + res.status);
        return null;
    }
}
