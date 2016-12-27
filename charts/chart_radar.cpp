#include "chart_radar.h"
#include "chartsproperties/properties_chartanimation.h"
#include "chartsproperties/properties_chartbackdrop.h"
#include "chartsproperties/properties_chartlinear.h"
#include "chartsproperties/properties_chartpoint.h"

void RadarChart::setDefaultProperties()
{
    setChartType(RADAR);
//    var defaultsRadar = {
//        scaleOverlay: false,
//        scaleOverride: false,
//        scaleSteps: null,
//        scaleStepWidth: null,
//        scaleStartValue: null,
//        scaleShowLine: true,
//        scaleLineColor: "rgba(0,0,0,.1)",
//        scaleLineWidth: 1,
//        scaleShowLabels: false,
//        scaleLabel: "<%=value%>",
//        scaleFontFamily: "'sans-serif'",
//        scaleFontSize: 12,
//        scaleFontStyle: "normal",
//        scaleFontColor: "#666",
//        scaleShowLabelBackdrop: true,
//        scaleBackdropColor: "rgba(255,255,255,0.75)",
//        scaleBackdropPaddingY: 2,
//        scaleBackdropPaddingX: 2,
//        angleShowLineOut: true,
//        angleLineColor: "rgba(0,0,0,.1)",
//        angleLineWidth: 1,
//        pointLabelFontFamily: "'sans-serif'",
//        pointLabelFontStyle: "normal",
//        pointLabelFontSize: 12,
//        pointLabelFontColor: "#666",
//        pointDot: true,
//        pointDotRadius: 3,
//        pointDotStrokeWidth: 1,
//        datasetStroke: true,
//        datasetStrokeWidth: 2,
//        datasetFill: true,
//        animation: true,
//        animationSteps: 60,
//        animationEasing: "easeOutQuart",
//        onAnimationComplete: null
//    }
    _chartProperties << new ChartLinearProperties();
    _chartProperties << new ChartBackdropProperties(this);
    _chartProperties << new ChartPointProperties();
    _chartProperties << new ChartAnimationProperties();
    _chartProperties << new ChartAnimationProperties(this);
}

bool RadarChart::angleShowLineOut() const
{
    return _angleShowLineOut;
}

void RadarChart::setAngleShowLineOut(bool angleShowLineOut)
{
    _angleShowLineOut = angleShowLineOut;
}

QString RadarChart::angleLineColor() const
{
    return _angleLineColor;
}

void RadarChart::setAngleLineColor(const QString &angleLineColor)
{
    _angleLineColor = angleLineColor;
}

double RadarChart::angleLineWidth() const
{
    return _angleLineWidth;
}

void RadarChart::setAngleLineWidth(double angleLineWidth)
{
    _angleLineWidth = angleLineWidth;
}
