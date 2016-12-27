#include "chart_line.h"

#include "chartsproperties/properties_chartlinear.h"
#include "chartsproperties/properties_chartgrid.h"
#include "chartsproperties/properties_chartpoint.h"
#include "chartsproperties/properties_chartanimation.h"

void LineChart::setDefaultProperties()
{
    setChartType(LINE);
//    var defaultsLine = {
//        scaleOverlay: false,
//        scaleOverride: false,
//        scaleSteps: null,
//        scaleStepWidth: null,
//        scaleStartValue: null,
//        scaleLineColor: "rgba(0,0,0,.1)",
//        scaleLineWidth: 1,
//        scaleShowLabels: true,
//        scaleLabel: "<%=value%>",
//        scaleFontFamily: "'sans-serif'",
//        scaleFontSize: 12,
//        scaleFontStyle: "normal",
//        scaleFontColor: "#666",
//        scaleShowGridLines: true,
//        scaleGridLineColor: "rgba(0,0,0,.05)",
//        scaleGridLineWidth: 1,
//        bezierCurve: true,
//        pointDot: true,
//        pointDotRadius: 4,
//        pointDotStrokeWidth: 2,
//        datasetStroke: true,
//        datasetStrokeWidth: 2,
//        datasetFill: true,
//        animation: true,
//        animationSteps: 60,
//        animationEasing: "easeOutQuart",
//        onAnimationComplete: null
//    }
    _chartProperties << new ChartLinearProperties(this);
    _chartProperties << new ChartGridProperties(this);
    _chartProperties << new ChartPointProperties(this);
    _chartProperties << new ChartAnimationProperties(this);
}

bool LineChart::bezierCurve() const
{
    return _bezierCurve;
}

void LineChart::setBezierCurve(bool bezierCurve)
{
    _bezierCurve = bezierCurve;
}
