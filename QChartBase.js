var ChartType = {
    BAR: 1,
    DOUGHNUT: 2,
    LINE: 3,
    PIE: 4,
    POLAR: 5,
    RADAR: 6
};

var fixedRefence = 0;

var chartOBject;

var startObject = function(data){
    chartOBject = getDataFromJSON(data);
}

function getDataFromJSON(data){
    return JSON.parse(data); //eval("("+data+")");
}

var isRoundChart= function(){
    if (typeof(chartOBject)==='object'){
        switch(chartOBject.chartType) {
            case ChartType.BAR:
            case ChartType.LINE:
            case ChartType.RADAR:
                return false;
            case ChartType.PIE:
            case ChartType.DOUGHNUT:
            case ChartType.POLAR:
                return true;
            default:
                console.log('Chart type should be specified.');
        }
    }else return null;
}

var vetoresLabels = function (){
    if(typeof(chartOBject)==='object'){
        return chartOBject.chartDatasets[fixedRefence].dataset[fixedRefence].labels;
    }else return null;
}

var vetoresColors = function (){
    if (typeof(chartOBject)==='object'){
        var dataset = chartOBject.chartDatasets[fixedRefence].dataset[fixedRefence];
        var colors = [];
        for(var i =0; i<dataset.colors.length; i++){
            colors[i] = dataset.colors[i].fillColor;
        }
        return colors;
    }else return null;
}


//gets directily  the height and weight size from the qml that imports it here
var Chart = function(canvas, context) {
    var chart = this;
    this.Configuracao = function(obj) {
        console.log(typeof(obj))
        var chartData =    obj.chartDatasets[fixedRefence].dataset;
        var chartOptions = obj.chartProperties;
        var config;

        switch(obj.chartType) {
        case ChartType.BAR:
            config = (chartOptions)? mergeChartConfig(defaultsBar,chartOptions) : defaultsBar;
            return new Bar(chartData,config,context);

        case ChartType.DOUGHNUT:
            config = (chartOptions)? mergeChartConfig(defaultsDoughnut,chartOptions) : defaultsDoughnut;
            return new Doughnut(chartData,config,context);

        case ChartType.LINE:
            config = (chartOptions)? mergeChartConfig(defaultsLine,chartOptions) : defaultsLine;
            return new Line(chartData,config,context);

        case ChartType.PIE:
            config = (chartOptions)? mergeChartConfig(defaultsPie,chartOptions) : defaultsPie;
            return new Pie(chartData,config,context);

        case ChartType.POLAR:
            config = (chartOptions)? mergeChartConfig(defaultsPolarArea,chartOptions) : defaultsPolarArea;
            return new PolarArea(chartData,defaultsPolarArea,context);

        case ChartType.RADAR:
            config = (chartOptions)? mergeChartConfig(defaultsRadar,chartOptions) : defaultsRadar;
            return new Radar(chartData,defaultsRadar,context);
        default:
            console.log('Chart type should be specified.');
        }
    }

    // /////////////////////////////////////////////////////////////////
    // Polar Area implementation
    // /////////////////////////////////////////////////////////////////

    var PolarArea = function(data,config,ctx) {

        var maxSize;
        var scaleHop;
        var calculatedScale;
        var labelHeight;
        var scaleHeight;
        var valueBounds;
        var labelTemplateString;

        // /////////////////////////////////////////////////////////////////
        // initialisation
        // /////////////////////////////////////////////////////////////////

        this.init = function() {

            calculateDrawingSizes();

            valueBounds = getValueBounds();

            labelTemplateString = (config.scaleShowLabels)? config.scaleLabel : null;

            if (!config.scaleOverride) {
                calculatedScale = calculateScale(scaleHeight,valueBounds.maxSteps,valueBounds.minSteps,valueBounds.maxValue,valueBounds.minValue,labelTemplateString);
            } else {
                calculatedScale = {
                    steps: config.scaleSteps,
                    stepValue: config.scaleStepWidth,
                    graphMin: config.scaleStartValue,
                    labels: []
                }
                populateLabels(labelTemplateString, calculatedScale.labels,calculatedScale.steps,config.scaleStartValue,config.scaleStepWidth);
            }

            scaleHop = maxSize/(calculatedScale.steps);
        }

        // /////////////////////////////////////////////////////////////////
        // drawing
        // /////////////////////////////////////////////////////////////////

        this.draw = function(progress) {

            clear(ctx);

            if(config.scaleOverlay) {
                drawAllSegments(progress);
                drawScale();
            } else {
                drawScale();
                drawAllSegments(progress);
            }
        }

        // ///////////////////////////////////////////////////////////////

        function calculateDrawingSizes() {

            maxSize = (Min([width,height])/2);
            maxSize -= Max([config.scaleFontSize*0.5,config.scaleLineWidth*0.5]);

            labelHeight = config.scaleFontSize*2;

            if (config.scaleShowLabelBackdrop) {

                labelHeight += (2 * config.scaleBackdropPaddingY);
                maxSize -= config.scaleBackdropPaddingY*1.5;
            }

            scaleHeight = maxSize;
            labelHeight = Default(labelHeight,5);
        }

        function drawScale() {

            for (var i=0; i<calculatedScale.steps; i++) {

                if (config.scaleShowLine) {
                    ctx.beginPath();
                    ctx.arc(width/2, height/2, scaleHop * (i + 1), 0, (Math.PI * 2), true);
                    ctx.strokeStyle = config.scaleLineColor;
                    ctx.lineWidth = config.scaleLineWidth;
                    ctx.stroke();
                }

                if (config.scaleShowLabels) {
                    ctx.textAlign = "center";
                    ctx.font = config.scaleFontStyle + " " + config.scaleFontSize + "px " + config.scaleFontFamily;

                    var label =  calculatedScale.labels[i];

                    if (config.scaleShowLabelBackdrop) {
                        var textWidth = ctx.measureText(label).width;
                        ctx.fillStyle = config.scaleBackdropColor;
                        ctx.beginPath();
                        ctx.rect(
                            Math.round(width/2 - textWidth/2 - config.scaleBackdropPaddingX),
                            Math.round(height/2 - (scaleHop * (i + 1)) - config.scaleFontSize*0.5 - config.scaleBackdropPaddingY),
                            Math.round(textWidth + (config.scaleBackdropPaddingX*2)),
                            Math.round(config.scaleFontSize + (config.scaleBackdropPaddingY*2))
                        );
                        ctx.fill();
                    }
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = config.scaleFontColor;
                    ctx.fillText(label,width/2,height/2 - (scaleHop * (i + 1)));
                }
            }
        }

        function drawAllSegments(animationDecimal) {
            var startAngle = -Math.PI/2,

            angleStep = (Math.PI*2)/data[fixedRefence].data.length,
            scaleAnimation = 1,
            rotateAnimation = 1;

            if (config.animation) {
                if (config.animateScale) {
                    scaleAnimation = animationDecimal;
                }
                if (config.animateRotate) {
                    rotateAnimation = animationDecimal;
                }
            }

            for (var i=0; i<data[fixedRefence].data.length; i++) {

                ctx.beginPath();
                ctx.arc(width/2,height/2,scaleAnimation * calculateOffset(data[fixedRefence].data[i],calculatedScale,scaleHop),startAngle, startAngle + rotateAnimation*angleStep, false);
                ctx.lineTo(width/2,height/2);
                ctx.closePath();
                ctx.fillStyle = data[fixedRefence].colors[i].fillColor;
                ctx.fill();

                if(config.segmentShowStroke) {
                    ctx.strokeStyle = config.segmentStrokeColor;
                    ctx.lineWidth = config.segmentStrokeWidth;
                    ctx.stroke();
                }
                startAngle += rotateAnimation*angleStep;
            }
        }

        function getValueBounds() {

            var upperValue = Number.MIN_VALUE;
            var lowerValue = Number.MAX_VALUE;

            for (var i=0; i<data[fixedRefence].data.length; i++) {
                if (data[fixedRefence].data[i] > upperValue) {upperValue = data[fixedRefence].data[i];}
                if (data[fixedRefence].data[i] < lowerValue) {lowerValue = data[fixedRefence].data[i];}
            };

            var maxSteps = Math.floor((scaleHeight / (labelHeight*0.66)));
            var minSteps = Math.floor((scaleHeight / labelHeight*0.5));

            return {
                maxValue: upperValue,
                minValue: lowerValue,
                maxSteps: maxSteps,
                minSteps: minSteps
            };
        }
    }

    // /////////////////////////////////////////////////////////////////
    // Radar implementation
    // /////////////////////////////////////////////////////////////////

    var Radar = function (data, config, ctx) {

        var maxSize;
        var scaleHop;
        var calculatedScale;
        var labelHeight;
        var scaleHeight;
        var valueBounds;
        var labelTemplateString;

        // /////////////////////////////////////////////////////////////////
        // initialisation
        // /////////////////////////////////////////////////////////////////

        this.init = function () {
//TODO CHECAR SE EXIST PELO MESNOS UM DATASET DEFINED
            if (!data[fixedRefence].labels) data[fixedRefence].labels = [];

            calculateDrawingSizes();

            var valueBounds = getValueBounds();

            labelTemplateString = (config.scaleShowLabels)? config.scaleLabel : null;

            if (!config.scaleOverride) {
                calculatedScale = calculateScale(scaleHeight,valueBounds.maxSteps,valueBounds.minSteps,valueBounds.maxValue,valueBounds.minValue,labelTemplateString);
            } else {
                calculatedScale = {
                    steps: config.scaleSteps,
                    stepValue: config.scaleStepWidth,
                    graphMin: config.scaleStartValue,
                    labels: []
                }
                populateLabels(labelTemplateString, calculatedScale.labels,calculatedScale.steps,config.scaleStartValue,config.scaleStepWidth);
            }

            scaleHop = maxSize/(calculatedScale.steps);
        }

        // /////////////////////////////////////////////////////////////////
        // drawing
        // /////////////////////////////////////////////////////////////////

        this.draw = function(progress) {
            clear(ctx);
            if(config.scaleOverlay) {
                drawAllDataPoints(progress);
                drawScale();
            } else {
                drawScale();
                drawAllDataPoints(progress);
            }
        }

        // ///////////////////////////////////////////////////////////////

        function drawAllDataPoints(animationDecimal) {

            //WARNING checar quando o menor for primeiro
            var rotationDegree = (2*Math.PI)/data[fixedRefence].data.length;

            ctx.save();
            ctx.translate(width/2,height/2);

            for (var i=0; i<data.length; i++) {

                ctx.beginPath();
                ctx.moveTo(0,animationDecimal*(-1*calculateOffset(data[i].data[fixedRefence],calculatedScale,scaleHop)));
                for (var j=1; j<data[i].data.length; j++){
                    ctx.rotate(rotationDegree);
                    ctx.lineTo(0,animationDecimal*(-1*calculateOffset(data[i].data[j],calculatedScale,scaleHop)));
                }
                ctx.closePath();

                ctx.fillStyle   = data[i].colors.fillColor;
                ctx.strokeStyle = data[i].colors.strokeColor;
                ctx.lineWidth   = config.datasetStrokeWidth;
                ctx.fill();
                ctx.stroke();

                if (config.pointDot) {
                    ctx.fillStyle   = data[i].colors.pointColor;
                    ctx.strokeStyle = data[i].colors.pointStrokeColor;
                    ctx.lineWidth   = config.pointDotStrokeWidth;

                    //NOTE FIXING PROBLEM WITH DATASET WITH DIFFERENT SIZES
                    if (i != fixedRefence) {
                        var diference = data[i-1].data.length - data[i].data.length;
                        ctx.rotate(diference*rotationDegree);
                    }

                    for (var k=0; k<data[i].data.length; k++) {
                        ctx.rotate(rotationDegree);
                        ctx.beginPath();
                        ctx.arc(0,animationDecimal*(-1*calculateOffset(data[i].data[k],calculatedScale,scaleHop)),config.pointDotRadius,2*Math.PI,false);
                        ctx.fill();
                        ctx.stroke();
                    }
                }
                ctx.rotate(rotationDegree);
            }
            ctx.restore();
        }

        function drawScale() {

            var rotationDegree = (2*Math.PI)/data[fixedRefence].data.length;

            ctx.save();
            ctx.translate(width/2, height/2);

            if (config.angleShowLineOut) {
                ctx.strokeStyle = config.angleLineColor;
                ctx.lineWidth = config.angleLineWidth;
                for (var h=0; h<data[fixedRefence].data.length; h++) {
                    ctx.rotate(rotationDegree);
                    ctx.beginPath();
                    ctx.moveTo(0,0);
                    ctx.lineTo(0,-maxSize);
                    ctx.stroke();
                }
            }

            for (var i=0; i<calculatedScale.steps; i++) {
                ctx.beginPath();
                if(config.scaleShowLine) {
                    ctx.strokeStyle = config.scaleLineColor;
                    ctx.lineWidth = config.scaleLineWidth;
                    ctx.moveTo(0,-scaleHop * (i+1));
                    for (var j=0; j<data[fixedRefence].data.length; j++) {
                        ctx.rotate(rotationDegree);
                        ctx.lineTo(0,-scaleHop * (i+1));
                    }
                    ctx.closePath();
                    ctx.stroke();
                }

                if (config.scaleShowLabels) {
                    ctx.textAlign = 'center';
                    ctx.font = config.scaleFontStyle + " " + config.scaleFontSize+"px " + config.scaleFontFamily;
                    ctx.textBaseline = "middle";
                    if (config.scaleShowLabelBackdrop) {
                        var textWidth = ctx.measureText(calculatedScale.labels[i]).width;
                        ctx.fillStyle = config.scaleBackdropColor;
                        ctx.beginPath();
                        ctx.rect(
                                    Math.round(- textWidth/2 - config.scaleBackdropPaddingX),     //X
                                    Math.round((-scaleHop * (i + 1)) - config.scaleFontSize*0.5 - config.scaleBackdropPaddingY),//Y
                                    Math.round(textWidth + (config.scaleBackdropPaddingX*2)), //Width
                                    Math.round(config.scaleFontSize + (config.scaleBackdropPaddingY*2)) //Height
                                    );
                        ctx.fill();
                    }
                    ctx.fillStyle = config.scaleFontColor;
                    ctx.fillText(calculatedScale.labels[i],0,-scaleHop*(i+1));
                }
            }

            for (var k=0; k<data[fixedRefence].labels.length; k++) {

                ctx.font = config.pointLabelFontStyle + " " + config.pointLabelFontSize+"px " + config.pointLabelFontFamily;
                ctx.fillStyle = config.pointLabelFontColor;

                var opposite = Math.sin(rotationDegree*k) * (maxSize + config.pointLabelFontSize);
                var adjacent = Math.cos(rotationDegree*k) * (maxSize + config.pointLabelFontSize);

                if(rotationDegree*k == Math.PI || rotationDegree*k == 0) {
                    ctx.textAlign = "center";
                } else if(rotationDegree*k > Math.PI) {
                    ctx.textAlign = "right";
                } else {
                    ctx.textAlign = "left";
                }
                ctx.textBaseline = "middle";
                ctx.fillText(data[fixedRefence].labels[k],opposite,-adjacent);
            }
            ctx.restore();
        };

        function calculateDrawingSizes() {

            maxSize = (Min([width,height])/2);
            labelHeight = config.scaleFontSize*2;

            var labelLength = 0;

            for (var i=0; i<data[fixedRefence].labels.length; i++){
                ctx.font = config.pointLabelFontStyle + " " + config.pointLabelFontSize+"px " + config.pointLabelFontFamily;
                var textMeasurement = ctx.measureText(data[fixedRefence].labels[i]).width;
                if(textMeasurement>labelLength) labelLength = textMeasurement;
            }

            maxSize -= Max([labelLength,((config.pointLabelFontSize/2)*1.5)]);
            maxSize -= config.pointLabelFontSize;
            maxSize  = CapValue(maxSize, null, 0);

            scaleHeight = maxSize;
            labelHeight = Default(labelHeight,5);
        };

        function getValueBounds() {

            var upperValue = Number.MIN_VALUE;
            var lowerValue = Number.MAX_VALUE;

            for (var i=0; i<data.length; i++) {
                for (var j=0; j<data[i].data.length; j++) {
                    if (data[i].data[j] > upperValue) {upperValue = data[i].data[j]}
                    if (data[i].data[j] < lowerValue) {lowerValue = data[i].data[j]}
                }
            }

            var maxSteps = Math.floor((scaleHeight / (labelHeight*0.66)));
            var minSteps = Math.floor((scaleHeight / labelHeight*0.5));

            return {
                maxValue: upperValue,
                minValue: lowerValue,
                maxSteps: maxSteps,
                minSteps: minSteps
            };
        }
    }

    // /////////////////////////////////////////////////////////////////
    // Pie implementation
    // /////////////////////////////////////////////////////////////////

    var Pie = function(data,config,ctx) {
        //TODO LABELS IMPLEMENTATION

        var segmentTotal = 0;
        var pieRadius = Min([height/2,width/2]) - 5;

        // /////////////////////////////////////////////////////////////////
        // initialisation
        // /////////////////////////////////////////////////////////////////

        this.init = function () {

            for (var i=0; i<data[fixedRefence].data.length; i++) {
                segmentTotal += data[fixedRefence].data[i];
            }
        }

        // /////////////////////////////////////////////////////////////////
        // drawing
        // /////////////////////////////////////////////////////////////////

        this.draw = function (progress) {

            clear(ctx);

            drawPieSegments(progress);
        }

        // ///////////////////////////////////////////////////////////////

        function drawPieSegments (animationDecimal) {

            var cumulativeAngle = -Math.PI/2,

                    scaleAnimation = 1,
                    rotateAnimation = 1;

            if (config.animation) {
                if (config.animateScale) {
                    scaleAnimation = animationDecimal;
                }
                if (config.animateRotate) {
                    rotateAnimation = animationDecimal;
                }
            }

            for (var i=0; i<data[fixedRefence].data.length; i++) {
                var segmentAngle = rotateAnimation * ((data[fixedRefence].data[i]/segmentTotal) * (Math.PI*2));
                ctx.beginPath();
                ctx.arc(width/2,height/2,scaleAnimation * pieRadius,cumulativeAngle,cumulativeAngle + segmentAngle);
                ctx.lineTo(width/2,height/2);
                ctx.closePath();
                ctx.fillStyle = data[fixedRefence].colors[i].fillColor;
                ctx.fill();

                if(config.segmentShowStroke) {
                    ctx.lineWidth = config.segmentStrokeWidth;
                    ctx.strokeStyle = config.segmentStrokeColor;
                    ctx.stroke();
                }
                cumulativeAngle += segmentAngle;
            }
        }
    }

    // /////////////////////////////////////////////////////////////////
    // Doughnut implementation
    // /////////////////////////////////////////////////////////////////

    var Doughnut = function(data,config,ctx) {

        var segmentTotal = 0;
        var doughnutRadius = Min([height/2,width/2]) - 5;
        var cutoutRadius = doughnutRadius * (config.percentageInnerCutout/100);

        // /////////////////////////////////////////////////////////////////
        // initialisation
        // /////////////////////////////////////////////////////////////////

        this.init = function () {

            for (var i=0; i<data[fixedRefence].data.length; i++) {
                segmentTotal += data[fixedRefence].data[i];
            }
        }

        // /////////////////////////////////////////////////////////////////
        // drawing
        // /////////////////////////////////////////////////////////////////

        this.draw = function (progress) {

            clear(ctx);

            drawDoughnutSegments(progress);
        }

        // ///////////////////////////////////////////////////////////////

        function drawDoughnutSegments (animationDecimal) {

            var cumulativeAngle = -Math.PI/2,

                    scaleAnimation = 1,
                    rotateAnimation = 1;

            if (config.animation) {
                if (config.animateScale) {
                    scaleAnimation = animationDecimal;
                }
                if (config.animateRotate) {
                    rotateAnimation = animationDecimal;
                }
            }

            for (var i=0; i<data[fixedRefence].data.length; i++) {
                var segmentAngle = rotateAnimation * ((data[fixedRefence].data[i]/segmentTotal) * (Math.PI*2));
                ctx.beginPath();
                ctx.arc(width/2,height/2,scaleAnimation * doughnutRadius,cumulativeAngle,cumulativeAngle + segmentAngle,false);
                ctx.arc(width/2,height/2,scaleAnimation * cutoutRadius,cumulativeAngle + segmentAngle,cumulativeAngle,true);
                ctx.closePath();
                ctx.fillStyle = data[fixedRefence].colors[i].fillColor;
                ctx.fill();

                if(config.segmentShowStroke) {
                    ctx.lineWidth = config.segmentStrokeWidth;
                    ctx.strokeStyle = config.segmentStrokeColor;
                    ctx.stroke();
                }
                cumulativeAngle += segmentAngle;
            }
        }
    }

    // /////////////////////////////////////////////////////////////////
    // Line implementation
    // /////////////////////////////////////////////////////////////////

    var Line = function(data,config,ctx) {

        var maxSize;
        var scaleHop;
        var calculatedScale;
        var labelHeight;
        var scaleHeight;
        var valueBounds;
        var labelTemplateString;
        var valueHop;
        var widestXLabel;
        var xAxisLength;
        var yAxisPosX;
        var xAxisPosY;
        var rotateLabels = 0;

        // /////////////////////////////////////////////////////////////////
        // initialisation
        // /////////////////////////////////////////////////////////////////

        this.init = function () {

            calculateDrawingSizes();

            valueBounds = getValueBounds();
            labelTemplateString = (config.scaleShowLabels)? config.scaleLabel : "";

            if (!config.scaleOverride) {
                calculatedScale = calculateScale(scaleHeight,valueBounds.maxSteps,valueBounds.minSteps,valueBounds.maxValue,valueBounds.minValue,labelTemplateString);
            } else {
                calculatedScale = {
                    steps: config.scaleSteps,
                    stepValue: config.scaleStepWidth,
                    graphMin: config.scaleStartValue,
                    labels: []
                }
                populateLabels(labelTemplateString, calculatedScale.labels,calculatedScale.steps,config.scaleStartValue,config.scaleStepWidth);
            }

            scaleHop = Math.floor(scaleHeight/calculatedScale.steps);
            calculateXAxisSize();
        }

        // /////////////////////////////////////////////////////////////////
        // drawing
        // /////////////////////////////////////////////////////////////////

        this.draw = function (progress) {

            this.init();

            clear(ctx);

            if(config.scaleOverlay) {
                drawLines(progress);
                drawScale();
            } else {
                drawScale();
                drawLines(progress);
            }
        }

        // ///////////////////////////////////////////////////////////////

        function drawLines(animPc) {

            for (var i=0; i<data.length; i++) {
                ctx.strokeStyle = data[i].colors.strokeColor;
                ctx.lineWidth = config.datasetStrokeWidth;
                ctx.beginPath();
                ctx.moveTo(yAxisPosX, xAxisPosY - animPc*(calculateOffset(data[i].data[fixedRefence],calculatedScale,scaleHop)))

                for (var j=1; j<data[i].data.length; j++) {
                    if (config.bezierCurve) {
                        ctx.bezierCurveTo(xPos(j-0.5),yPos(i,j-1),xPos(j-0.5),yPos(i,j),xPos(j),yPos(i,j));
                    } else{
                        ctx.lineTo(xPos(j),yPos(i,j));
                    }
                }

                ctx.stroke();

                if (config.datasetFill) {
                    ctx.lineTo(yAxisPosX + (valueHop*(data[i].data.length-1)),xAxisPosY);
                    ctx.lineTo(yAxisPosX, xAxisPosY);
                    ctx.closePath();
                    ctx.fillStyle = data[i].colors.fillColor;
                    ctx.fill();
                } else {
                    ctx.closePath();
                }

                if (config.pointDot){
                    ctx.fillStyle  = data[i].colors.pointColor;
                    ctx.strokeStyle= data[i].colors.pointStrokeColor;
                    ctx.lineWidth  = config.pointDotStrokeWidth;

                    for (var k=0; k<data[i].length; k++){
                        ctx.beginPath();
                        ctx.arc(yAxisPosX + (valueHop *k),xAxisPosY - animPc*(calculateOffset(data[i].data[k],calculatedScale,scaleHop)),config.pointDotRadius,0,Math.PI*2,true);
                        ctx.fill();
                        ctx.stroke();
                    }
                }
            }

            function yPos(dataSet,iteration) {
                return xAxisPosY - animPc*(calculateOffset(data[dataSet].data[iteration],calculatedScale,scaleHop));
            }

            function xPos(iteration) {
                return yAxisPosX + (valueHop * iteration);
            }
        }

        function drawScale() {

            ctx.lineWidth = config.scaleLineWidth;
            ctx.strokeStyle = config.scaleLineColor;
            ctx.beginPath();
            ctx.moveTo(width-widestXLabel/2+5,xAxisPosY);
            ctx.lineTo(width-(widestXLabel/2)-xAxisLength-5,xAxisPosY);
            ctx.stroke();

            if (rotateLabels > 0) {
                ctx.save();
                ctx.textAlign = "right";
            } else{
                ctx.textAlign = "center";
            }
            ctx.fillStyle = config.scaleFontColor;

            for (var i=0; i<data[fixedRefence].labels.length; i++) {

                ctx.save();

                if (rotateLabels > 0) {
                    ctx.translate(yAxisPosX + i*valueHop,xAxisPosY + config.scaleFontSize);
                    ctx.rotate(-(rotateLabels * (Math.PI/180)));
                    ctx.fillText(data[fixedRefence].labels[i], 0,0);
                    ctx.restore();
                } else {
                    ctx.fillText(data[fixedRefence].labels[i], yAxisPosX + i*valueHop,xAxisPosY + config.scaleFontSize+3);
                }

                ctx.beginPath();
                ctx.moveTo(yAxisPosX + i * valueHop, xAxisPosY+3);

                if(config.scaleShowGridLines && i>0) {
                    ctx.lineWidth = config.scaleGridLineWidth;
                    ctx.strokeStyle = config.scaleGridLineColor;
                    ctx.lineTo(yAxisPosX + i * valueHop, 5);
                } else{
                    ctx.lineTo(yAxisPosX + i * valueHop, xAxisPosY+3);
                }
                ctx.stroke();
            }

            ctx.lineWidth = config.scaleLineWidth;
            ctx.strokeStyle = config.scaleLineColor;
            ctx.beginPath();
            ctx.moveTo(yAxisPosX,xAxisPosY+5);
            ctx.lineTo(yAxisPosX,5);
            ctx.stroke();
            ctx.textAlign = "right";
            ctx.textBaseline = "middle";

            for (var j=0; j<calculatedScale.steps; j++) {
                ctx.beginPath();
                ctx.moveTo(yAxisPosX-3,xAxisPosY - ((j+1) * scaleHop));
                if (config.scaleShowGridLines) {
                    ctx.lineWidth = config.scaleGridLineWidth;
                    ctx.strokeStyle = config.scaleGridLineColor;
                    ctx.lineTo(yAxisPosX + xAxisLength + 5,xAxisPosY - ((j+1) * scaleHop));
                } else {
                    ctx.lineTo(yAxisPosX-0.5,xAxisPosY - ((j+1) * scaleHop));
                }
                ctx.stroke();
                if (config.scaleShowLabels) {
                    ctx.fillText(calculatedScale.labels[j],yAxisPosX-8,xAxisPosY - ((j+1) * scaleHop));
                }
            }
        }

        function calculateXAxisSize() {

            var longestText = 1;

            if (config.scaleShowLabels) {
                ctx.font = config.scaleFontStyle + " " + config.scaleFontSize+"px " + config.scaleFontFamily;
                for (var i=0; i<calculatedScale.labels.length; i++) {
                    var measuredText = ctx.measureText(calculatedScale.labels[i]).width;
                    longestText = (measuredText > longestText)? measuredText : longestText;
                }
                longestText +=10;
            }

            xAxisLength = width - longestText - widestXLabel;
            valueHop = Math.floor(xAxisLength/(data[fixedRefence].labels.length-1));

            yAxisPosX = width-widestXLabel/2-xAxisLength;
            xAxisPosY = scaleHeight + config.scaleFontSize/2;
        }

        function calculateDrawingSizes() {

            maxSize = height;

            ctx.font = config.scaleFontStyle + " " + config.scaleFontSize+"px " + config.scaleFontFamily;

            widestXLabel = 1;

            for (var i=0; i<data[fixedRefence].labels.length; i++) {

                var textLength = ctx.measureText(data[fixedRefence].labels[i]).width;
                widestXLabel = (textLength > widestXLabel)? textLength : widestXLabel;
            }

            if (width/data[fixedRefence].labels.length < widestXLabel) {

                rotateLabels = 45;

                if (width/data[fixedRefence].labels.length < Math.cos(rotateLabels) * widestXLabel) {
                    rotateLabels = 90;
                    maxSize -= widestXLabel;
                } else{
                    maxSize -= Math.sin(rotateLabels) * widestXLabel;
                }
            } else{
                maxSize -= config.scaleFontSize;
            }

            maxSize -= 5;

            labelHeight = config.scaleFontSize;

            maxSize -= labelHeight;

            scaleHeight = maxSize;
        }

        function getValueBounds() {

            var upperValue = Number.MIN_VALUE;
            var lowerValue = Number.MAX_VALUE;

            for (var i=0; i<data.length; i++) {
                for (var j=0; j<data[i].data.length; j++) {
                    if ( data[i].data[j] > upperValue) { upperValue = data[i].data[j]};
                    if ( data[i].data[j] < lowerValue) { lowerValue = data[i].data[j]};
                }
            };

            var maxSteps = Math.floor((scaleHeight / (labelHeight*0.66)));
            var minSteps = Math.floor((scaleHeight / labelHeight*0.5));

            return {
                maxValue: upperValue,
                minValue: lowerValue,
                maxSteps: maxSteps,
                minSteps: minSteps
            };
        }
    }

    // /////////////////////////////////////////////////////////////////
    // Bar implementation
    // /////////////////////////////////////////////////////////////////

    var Bar = function(data, config, ctx) {

        var maxSize;
        var scaleHop;
        var calculatedScale;
        var labelHeight;
        var scaleHeight;
        var valueBounds;
        var labelTemplateString;
        var valueHop;
        var widestXLabel;
        var xAxisLength;
        var yAxisPosX;
        var xAxisPosY;
        var barWidth;
        var rotateLabels = 0;

        // /////////////////////////////////////////////////////////////////
        // initialisation
        // /////////////////////////////////////////////////////////////////

        this.init = function () {

            calculateDrawingSizes();

            valueBounds = getValueBounds();

            labelTemplateString = (config.scaleShowLabels)? config.scaleLabel : "";

            if (!config.scaleOverride) {
                calculatedScale = calculateScale(scaleHeight,valueBounds.maxSteps,valueBounds.minSteps,valueBounds.maxValue,valueBounds.minValue,labelTemplateString);
            } else {
                calculatedScale = {
                    steps: config.scaleSteps,
                    stepValue: config.scaleStepWidth,
                    graphMin: config.scaleStartValue,
                    labels: []
                }
                populateLabels(labelTemplateString, calculatedScale.labels,calculatedScale.steps,config.scaleStartValue,config.scaleStepWidth);
            }

            scaleHop = Math.floor(scaleHeight/calculatedScale.steps);
            calculateXAxisSize();
        }

        // /////////////////////////////////////////////////////////////////
        // drawing
        // /////////////////////////////////////////////////////////////////

        this.draw = function (progress) {

            clear(ctx);

            if(config.scaleOverlay) {
                drawBars(progress);
                drawScale();
            } else {
                drawScale();
                drawBars(progress);
            }
        }

        // ///////////////////////////////////////////////////////////////

        function drawBars(animPc) {

            ctx.lineWidth = config.barStrokeWidth;

            for (var i=0; i<data.length; i++) {
                ctx.fillStyle   = data[i].colors.fillColor;
                ctx.strokeStyle = data[i].colors.strokeColor;

                for (var j=0; j<data[i].data.length; j++) {

                    var barOffset = yAxisPosX + config.barValueSpacing + valueHop*j + barWidth*i + config.barDatasetSpacing*i + config.barStrokeWidth*i;

                    ctx.beginPath();
                    ctx.moveTo(barOffset, xAxisPosY);
                    ctx.lineTo(barOffset, xAxisPosY - animPc*calculateOffset(data[i].data[j],calculatedScale,scaleHop)+(config.barStrokeWidth/2));
                    ctx.lineTo(barOffset + barWidth, xAxisPosY - animPc*calculateOffset(data[i].data[j],calculatedScale,scaleHop)+(config.barStrokeWidth/2));
                    ctx.lineTo(barOffset + barWidth, xAxisPosY);
                    if(config.barShowStroke) {
                        ctx.stroke();
                    }
                    ctx.closePath();
                    ctx.fill();
                }
            }
        }

        function drawScale() {

            ctx.lineWidth = config.scaleLineWidth;
            ctx.strokeStyle = config.scaleLineColor;
            ctx.beginPath();
            ctx.moveTo(width-widestXLabel/2+5,xAxisPosY);
            ctx.lineTo(width-(widestXLabel/2)-xAxisLength-5,xAxisPosY);
            ctx.stroke();

            if (rotateLabels > 0) {
                ctx.save();
                ctx.textAlign = "right";
            } else{
                ctx.textAlign = "center";
            }

            ctx.fillStyle = config.scaleFontColor;

            for (var i=0; i<data[fixedRefence].labels.length; i++) {
                ctx.save();
                if (rotateLabels > 0) {
                    ctx.translate(yAxisPosX + i*valueHop,xAxisPosY + config.scaleFontSize);
                    ctx.rotate(-(rotateLabels * (Math.PI/180)));
                    ctx.fillText(data[fixedRefence].labels[i], 0,0);
                    ctx.restore();
                } else {
                    ctx.fillText(data[fixedRefence].labels[i], yAxisPosX + i*valueHop + valueHop/2,xAxisPosY + config.scaleFontSize+3);
                }

                ctx.beginPath();
                ctx.moveTo(yAxisPosX + (i+1) * valueHop, xAxisPosY+3);
                ctx.lineWidth = config.scaleGridLineWidth;
                ctx.strokeStyle = config.scaleGridLineColor;
                ctx.lineTo(yAxisPosX + (i+1) * valueHop, 5);
                ctx.stroke();
            }

            ctx.lineWidth = config.scaleLineWidth;
            ctx.strokeStyle = config.scaleLineColor;
            ctx.beginPath();
            ctx.moveTo(yAxisPosX,xAxisPosY+5);
            ctx.lineTo(yAxisPosX,5);
            ctx.stroke();
            ctx.textAlign = "right";
            ctx.textBaseline = "middle";

            for (var j=0; j<calculatedScale.steps; j++) {
                ctx.beginPath();
                ctx.moveTo(yAxisPosX-3,xAxisPosY - ((j+1) * scaleHop));
                if (config.scaleShowGridLines) {
                    ctx.lineWidth = config.scaleGridLineWidth;
                    ctx.strokeStyle = config.scaleGridLineColor;
                    ctx.lineTo(yAxisPosX + xAxisLength + 5,xAxisPosY - ((j+1) * scaleHop));
                } else {
                    ctx.lineTo(yAxisPosX-0.5,xAxisPosY - ((j+1) * scaleHop));
                }
                ctx.stroke();
                if (config.scaleShowLabels) {
                    ctx.fillText(calculatedScale.labels[j],yAxisPosX-8,xAxisPosY - ((j+1) * scaleHop));
                }
            }
        }

        function calculateXAxisSize() {

            var longestText = 1;

            if (config.scaleShowLabels) {

                ctx.font = config.scaleFontStyle + " " + config.scaleFontSize+"px " + config.scaleFontFamily;

                for (var i=0; i<calculatedScale.labels.length; i++) {
                    var measuredText = ctx.measureText(calculatedScale.labels[i]).width;
                    longestText = (measuredText > longestText)? measuredText : longestText;
                }

                longestText +=10;
            }

            xAxisLength = width - longestText - widestXLabel;
            valueHop = Math.floor(xAxisLength/(data[fixedRefence].labels.length));

            barWidth = (valueHop - config.scaleGridLineWidth*2 - (config.barValueSpacing*2) - (config.barDatasetSpacing*data.length-1) - ((config.barStrokeWidth/2)*data.length-1))/data.length;

            yAxisPosX = width-widestXLabel/2-xAxisLength;
            xAxisPosY = scaleHeight + config.scaleFontSize/2;
        }

        function calculateDrawingSizes() {

            maxSize = height;
            ctx.font = config.scaleFontStyle + " " + config.scaleFontSize+"px " + config.scaleFontFamily;
            widestXLabel = 1;

            for (var i=0; i<data[fixedRefence].labels.length; i++) {
                var textLength = ctx.measureText(data[fixedRefence].labels[i]).width;
                widestXLabel = (textLength > widestXLabel)? textLength : widestXLabel;
            }

            if (width/data[fixedRefence].labels.length < widestXLabel) {
                rotateLabels = 45;
                if (width/data[fixedRefence].labels.length < Math.cos(rotateLabels) * widestXLabel) {
                    rotateLabels = 90;
                    maxSize -= widestXLabel;
                } else{
                    maxSize -= Math.sin(rotateLabels) * widestXLabel;
                }
            } else{
                maxSize -= config.scaleFontSize;
            }

            maxSize -= 5;

            labelHeight = config.scaleFontSize;

            maxSize -= labelHeight;

            scaleHeight = maxSize;
        }

        function getValueBounds() {

            var upperValue = Number.MIN_VALUE;
            var lowerValue = Number.MAX_VALUE;

            for (var i=0; i<data.length; i++) {
                for (var j=0; j<data[i].data.length; j++) {
                    if ( data[i].data[j] > upperValue) { upperValue = data[i].data[j] };
                    if ( data[i].data[j] < lowerValue) { lowerValue = data[i].data[j] };
                }
            };

            var maxSteps = Math.floor((scaleHeight / (labelHeight*0.66)));
            var minSteps = Math.floor((scaleHeight / labelHeight*0.5));

            return {
                maxValue: upperValue,
                minValue: lowerValue,
                maxSteps: maxSteps,
                minSteps: minSteps
            };
        }
    }

    // /////////////////////////////////////////////////////////////////
    // Helper functions
    // /////////////////////////////////////////////////////////////////

    function calculateOffset(val,calculatedScale,scaleHop) {

        var outerValue = calculatedScale.steps * calculatedScale.stepValue;
        var adjustedValue = val - calculatedScale.graphMin;
        var scalingFactor = CapValue(adjustedValue/outerValue,1,0);

        return (scaleHop*calculatedScale.steps) * scalingFactor;
    }

    function calculateScale(drawingHeight,maxSteps,minSteps,maxValue,minValue,labelTemplateString) {

        var graphMin,graphMax,graphRange,stepValue,numberOfSteps,valueRange,rangeOrderOfMagnitude,decimalNum;

        valueRange = maxValue - minValue;
        rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange);
        graphMin = Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude);
        graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude);
        graphRange = graphMax - graphMin;
        stepValue = Math.pow(10, rangeOrderOfMagnitude);
        numberOfSteps = Math.round(graphRange / stepValue);

        while(numberOfSteps < minSteps || numberOfSteps > maxSteps) {
            if (numberOfSteps < minSteps) {
                stepValue /= 2;
                numberOfSteps = Math.round(graphRange/stepValue);
            } else{
                stepValue *=2;
                numberOfSteps = Math.round(graphRange/stepValue);
            }
        };

        var labels = [];

        populateLabels(labelTemplateString, labels, numberOfSteps, graphMin, stepValue);

        return {
            steps: numberOfSteps,
            stepValue: stepValue,
            graphMin: graphMin,
            labels: labels
        }

        function calculateOrderOfMagnitude(val) {
            return Math.floor(Math.log(val) / Math.LN10);
        }
    }

    function populateLabels(labelTemplateString, labels, numberOfSteps, graphMin, stepValue) {
        if (labelTemplateString) {
            for (var i = 1; i < numberOfSteps + 1; i++) {
                labels.push(tmpl(labelTemplateString, {value: (graphMin + (stepValue * i)).toFixed(getDecimalPlaces(stepValue))}));
            }
        }
    }

    function Max(array) {
        return Math.max.apply(Math, array);
    }

    function Min(array) {
        return Math.min.apply(Math, array);
    }

    function Default(userDeclared,valueIfFalse) {
        if(!userDeclared) {
            return valueIfFalse;
        } else {
            return userDeclared;
        }
    }

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function CapValue(valueToCap, maxValue, minValue) {
        if(isNumber(maxValue)) {
            if( valueToCap > maxValue ) {
                return maxValue;
            }
        }
        if(isNumber(minValue)) {
            if ( valueToCap < minValue ) {
                return minValue;
            }
        }
        return valueToCap;
    }

    function getDecimalPlaces (num) {
        var numberOfDecimalPlaces;
        if (num%1!=0) {
            return num.toString().split(".")[1].length
        } else {
            return 0;
        }
    }

    function mergeChartConfig(defaults,userDefined) {
        var returnObj = {};
        for (var attrname in defaults) { returnObj[attrname] = defaults[attrname]; }
        for (var attrname in userDefined) { returnObj[attrname] = userDefined[attrname]; }
        return returnObj;
    }

    function tmpl(str, data) {
        var fn = !/\W/.test(str) ?
                    cache[str] = cache[str] ||
                    tmpl(document.getElementById(str).innerHTML) :

                    new Function("obj",
                                 "var p=[],print=function() {p.push.apply(p,arguments);};" +
                                 "with(obj) {p.push('" +
                                 str
                                 .replace(/[\r\t\n]/g, " ")
                                 .split("<%").join("\t")
                                 .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                                 .replace(/\t=(.*?)%>/g, "',$1,'")
                                 .split("\t").join("');")
                                 .split("%>").join("p.push('")
                                 .split("\r").join("\\'")
                                 + "');}return p.join('');");

        return data ? fn( data ) : fn;
    }

    var cache = {}

    var clear = function(c) {
        c.clearRect(0, 0, width, height);
    }

    var defaultsBar = {
        scaleOverlay: false,
        scaleOverride: false,
        scaleSteps: null,
        scaleStepWidth: null,
        scaleStartValue: null,
        scaleLineColor: "rgba(0,0,0,.1)",
        scaleLineWidth: 1,
        scaleShowLabels: true,
        scaleLabel: "<%=value%>",
        scaleFontFamily: "'sans-serif'",
        scaleFontSize: 12,
        scaleFontStyle: "normal",
        scaleFontColor: "#666",
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        barShowStroke: true,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        animation: true,
        animationSteps: 60,
        animationEasing: "easeOutQuart",
        onAnimationComplete: null
    }

    var defaultsDoughnut = {
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animation: true,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        onAnimationComplete: null
    }

    var defaultsPie = {
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        animation: true,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        onAnimationComplete: null
    }

    var defaultsPolarArea = {
        scaleOverlay: true,
        scaleOverride: false,
        scaleSteps: null,
        scaleStepWidth: null,
        scaleStartValue: null,
        scaleShowLine: true,
        scaleLineColor: "rgba(0,0,0,.1)",
        scaleLineWidth: 1,
        scaleShowLabels: true,
        scaleLabel: "<%=value%>",
        scaleFontFamily: 'sans-serif',
        scaleFontSize: 12,
        scaleFontStyle: "normal",
        scaleFontColor: "#666",
        scaleShowLabelBackdrop: true,
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        scaleBackdropPaddingY: 2,
        scaleBackdropPaddingX: 2,
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        animation: true,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        onAnimationComplete: null
    }

    var defaultsRadar = {
        scaleOverlay: false,
        scaleOverride: false,
        scaleSteps: null,
        scaleStepWidth: null,
        scaleStartValue: null,
        scaleShowLine: true,
        scaleLineColor: "rgba(0,0,0,.1)",
        scaleLineWidth: 1,
        scaleShowLabels: false,
        scaleLabel: "<%=value%>",
        scaleFontFamily: "'sans-serif'",
        scaleFontSize: 12,
        scaleFontStyle: "normal",
        scaleFontColor: "#666",
        scaleShowLabelBackdrop: true,
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        scaleBackdropPaddingY: 2,
        scaleBackdropPaddingX: 2,
        angleShowLineOut: true,
        angleLineColor: "rgba(0,0,0,.1)",
        angleLineWidth: 1,
        pointLabelFontFamily: "'sans-serif'",
        pointLabelFontStyle: "normal",
        pointLabelFontSize: 12,
        pointLabelFontColor: "#666",
        pointDot: true,
        pointDotRadius: 3,
        pointDotStrokeWidth: 1,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        animation: true,
        animationSteps: 60,
        animationEasing: "easeOutQuart",
        onAnimationComplete: null
    }

    var defaultsLine = {
        scaleOverlay: false,
        scaleOverride: false,
        scaleSteps: null,
        scaleStepWidth: null,
        scaleStartValue: null,
        scaleLineColor: "rgba(0,0,0,.1)",
        scaleLineWidth: 1,
        scaleShowLabels: true,
        scaleLabel: "<%=value%>",
        scaleFontFamily: "'sans-serif'",
        scaleFontSize: 12,
        scaleFontStyle: "normal",
        scaleFontColor: "#666",
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        bezierCurve: true,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 2,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        animation: true,
        animationSteps: 60,
        animationEasing: "easeOutQuart",
        onAnimationComplete: null
    }
}

// /////////////////////////////////////////////////////////////////
// Credits
// /////////////////////////////////////////////////////////////////

/*!
     * Chart.js
     * http://chartjs.org/
     *
     * Copyright 2013 Nick Downie
     * Released under the MIT license
     * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
     */
// Copyright (c) 2013 Nick Downie

// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the "Software"), to deal in the Software without
// restriction, including without limitation the rights to use, copy,
// modify, merge, publish, distribute, sublicense, and/or sell copies
// of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
// BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
