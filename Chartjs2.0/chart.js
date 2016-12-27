/*
.pragma library
.import "core/core.js                              " as coreChart
.import "core/core.controller.js                   " as coreController
.import "core/core.helpers.js                      " as coreHelpers
.import "core/core.canvasHelpers.js                " as coreCanvasHelpers
.import "core/core.element.js                      " as coreElement
.import "core/core.animation.js                    " as coreAnimation
.import "core/core.datasetController.js            " as coreDatasetController
.import "core/core.layoutService.js                " as coreLayoutService
.import "core/core.scaleService.js                 " as coreScaleService
.import "core/core.plugin.js                       " as corePlugin
.import "core/core.ticks.js                        " as coreTicks
.import "core/core.scale.js                        " as coreScale
.import "core/core.title.js                        " as coreTitle
.import "core/core.legend.js                       " as coreLegend
.import "core/core.interaction.js                  " as coreInteraction
.import "core/core.tooltip.js                      " as coreTooltip

.import "elements/element.element.arc.js           " as elementArc
.import "elements/element.line.js                  " as elementLine
.import "elements/element.point.js                 " as elementPoint
.import "elements/element.rectangle.js             " as elementRectangle

.import "scales/scale.scale.linearbase.js          " as scaleLinearBase
.import "scales/scale.category.js                  " as scaleCategory
.import "scales/scale.linear.js                    " as scaleLinear
.import "scales/scale.logarithmic.js               " as scaleLogarithmic
.import "scales/scale.radialLinear.js              " as scaleRadiaLinear
.import "scales/scale.time.js                      " as scaleTime

// Controllers must be loaded after elements
// See Chart.core.datasetController.dataElementType

.import "controllers/controller.controller.bar.js  " as controllerBar
.import "controllers/controller.bubble.js          " as controllerBubble
.import "controllers/controller.doughnut.js        " as controllerDoughnut
.import "controllers/controller.line.js            " as controllerLine
.import "controllers/controller.polarArea.js       " as controllerPolarArea
.import "controllers/controller.radar.js           " as controllerRadar

.import "charts/Chart.Chart.Bar.js                 " as chartBar
.import "charts/Chart.Bubble.js                    " as chartBubble
.import "charts/Chart.Doughnut.js                  " as chartDoughnut
.import "charts/Chart.Line.js                      " as chartLine
.import "charts/Chart.PolarArea.js                 " as chartPolarArea
.import "charts/Chart.Radar.js                     " as chartRadar
.import "charts/Chart.Scatter.js                   " as chartScatter

var ChartType = {
         BAR: 1,
    DOUGHNUT: 2,
        LINE: 3,
         PIE: 4,
       POLAR: 5,
       RADAR: 6
};

var Chart = coreChart.Core();

coreHelpers.CoreHelper(Chart);
coreCanvasHelpers.CoreCanvasH (Chart);
coreElement.CoreElement(Chart);
coreAnimation.CoreAnimation(Chart);
coreController.CoreController(Chart);
coreDatasetController.CoreDatasetS(Chart);
coreLayoutService.CoreLayoutS(Chart);
coreScaleService.CoreScaleS(Chart);
corePlugin.CorePlugin(Chart);
coreTicks.CoreTicks(Chart);
coreScale.CoreScale(Chart);
coreTitle.CoreTitle(Chart);
coreLegend.CoreLegend(Chart);
coreInteraction.CoreInteraction(Chart);
coreTooltip.CoreToolT(Chart);

elementArc.ElementArc(Chart);
elementLine.ElementLine(Chart);
elementPoint.ElementPoint(Chart);
elementRectangle.ElementRectangle(Chart);

scaleLinearBase.ScaleLinearB(Chart);
scaleCategory.ScaleCategory(Chart);
scaleLinear.ScaleLinear(Chart);
scaleLogarithmic.ScaleLogarithmic(Chart);
scaleRadiaLinear.ScaleRadiaL(Chart);
scaleTime.ScaleTime(Chart);

controllerBar.ControllerBar(Chart);
controllerBubble.ControllerBubble(Chart);
controllerDoughnut.ControllerDoughnut(Chart);
controllerLine.ControllerLine(Chart);
controllerPolarArea.ControllerPolarA(Chart);
controllerRadar.ControllerRadar(Chart);

chartBar.Bar(Chart);
chartBubble.Bubble(Chart);
chartDoughnut.Doughnut(Chart);
chartLine.Line(Chart);
chartPolarArea.PolarArea(Chart);
chartRadar.Radar(Chart);
chartScatter.Scatter(Chart);

var Inicio = function(canvas, context, tipo, data, config) {
   switch(tipo){
   case ChartType.BAR: return Chart.Bar(context,config);
   case ChartType.DOUGHNUT: return  Chart.Doughnut(context,config);
   case ChartType.LINE: return  Chart.Line(context,config);
   case ChartType.PIE: return Chart.Pie(context,config);
   case ChartType.POLAR: return Chart.Polar(context,config);
   case ChartType.RADAR: return Chart.Radar(context,config);
   }
}
*/

Qt.include("core/core.js"                              );
Qt.include("core/core.helpers.js"                      );
Qt.include("core/core.canvasHelpers.js"                );
Qt.include("core/core.element.js"                      );
Qt.include("core/core.animation.js                    ");
Qt.include("core/core.datasetController.js            ");
Qt.include("core/core.layoutService.js                ");
Qt.include("core/core.scaleService.js                 ");
Qt.include("core/core.plugin.js                       ");
Qt.include("core/core.ticks.js                        ");
Qt.include("core/core.scale.js                        ");
Qt.include("core/core.title.js                        ");
Qt.include("core/core.legend.js                       ");
Qt.include("core/core.interaction.js                  ");
Qt.include("core/core.tooltip.js                      ");

Qt.include("elements/element.element.arc.js           ");
Qt.include("elements/element.line.js                  ");
Qt.include("elements/element.point.js                 ");
Qt.include("elements/element.rectangle.js             ");

Qt.include("scales/scale.scale.linearbase.js          ");
Qt.include("scales/scale.category.js                  ");
Qt.include("scales/scale.linear.js                    ");
Qt.include("scales/scale.logarithmic.js               ");
Qt.include("scales/scale.radialLinear.js              ");
Qt.include("scales/scale.time.js                      ");

Qt.include("controllers/controller.controller.bar.js  ");
Qt.include("controllers/controller.bubble.js          ");
Qt.include("controllers/controller.doughnut.js        ");
Qt.include("controllers/controller.line.js            ");
Qt.include("controllers/controller.polarArea.js       ");
Qt.include("controllers/controller.radar.js           ");

Qt.include("charts/Chart.Chart.Bar.js                 ");
Qt.include("charts/Chart.Bubble.js                    ");
Qt.include("charts/Chart.Doughnut.js                  ");
Qt.include("charts/Chart.Line.js                      ");
Qt.include("charts/Chart.PolarArea.js                 ");
Qt.include("charts/Chart.Radar.js                     ");
Qt.include("charts/Chart.Scatter.js                   ");

var ChartType = {
         BAR: 1,
    DOUGHNUT: 2,
        LINE: 3,
         PIE: 4,
       POLAR: 5,
       RADAR: 6
};

var Chart= core();

coreCanvasHelpers(Chart)    ;
coreHelpers(Chart)          ;
coreCanvasHelpers(Chart)    ;
coreElement(Chart)          ;
coreAnimation(Chart)        ;
coreController(Chart)       ;
coreDatasetController(Chart);
coreLayoutService(Chart)    ;
coreScaleService(Chart)     ;
corePlugin(Chart)           ;
coreTicks(Chart)            ;
coreScale(Chart)            ;
coreTitle(Chart)            ;
coreLegend(Chart)           ;
coreInteraction(Chart)      ;
coreTooltip(Chart)          ;
elementArc(Chart)           ;
elementLine(Chart)          ;
elementPoint(Chart)         ;
elementRectangle(Chart)     ;
scaleLinearBase(Chart)      ;
scaleCategory(Chart)        ;
scaleLinear(Chart)          ;
scaleLogarithmic(Chart)     ;
scaleRadiaLinear(Chart)     ;
scaleTime(Chart)            ;
controllerBar(Chart)        ;
controllerBubble(Chart)     ;
controllerDoughnut(Chart)   ;
controllerLine(Chart)       ;
controllerPolarArea(Chart)  ;
controllerRadar(Chart)      ;
chartBar(Chart)             ;
chartBubble(Chart)          ;
chartDoughnut(Chart)        ;
chartLine(Chart)            ;
chartPolarArea(Chart)       ;
chartRadar(Chart)           ;
chartScatter(Chart)         ;

var init = function(canvas, context, tipo, data, config) {
   switch(tipo){
   case ChartType.BAR: return Chart.Bar(context,config);
   case ChartType.DOUGHNUT: return  Chart.Doughnut(context,config);
   case ChartType.LINE: return  Chart.Line(context,config);
   case ChartType.PIE: return Chart.Pie(context,config);
   case ChartType.POLAR: return Chart.Polar(context,config);
   case ChartType.RADAR: return Chart.Radar(context,config);
   }
}
