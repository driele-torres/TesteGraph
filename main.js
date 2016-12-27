//Required setup
.import "qmlrequire.js" as R
var require = R.require;

console.log("Enter main.");

// Testing with eventemitter2
var events = require('eventemitter2');
var e = new events.EventEmitter2();
e.on('test', function(){console.log('got an event')});
e.emit('test');

// Testing with underscore
var _ = require('underscore');
console.log(_.first([1,2,3]));

console.log("Exit main.");
