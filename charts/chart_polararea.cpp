#include "chart_polararea.h"

#include "chartsproperties/properties_chartanimation.h"
#include "chartsproperties/properties_chartbackdrop.h"
#include "chartsproperties/properties_chartlinear.h"
#include "chartsproperties/properties_chartround.h"
#include "chartsproperties/properties_chartpoint.h"

void PolarAreaChart::setDefaultProperties()
{
    setChartType(POLAR);
//    var defaultsPolarArea = {
//        scaleOverlay: true,
//        scaleOverride: false,
//        scaleSteps: null,
//        scaleStepWidth: null,
//        scaleStartValue: null,
//        scaleShowLine: true,
//        scaleLineColor: "rgba(0,0,0,.1)",
//        scaleLineWidth: 1,
//        scaleShowLabels: true,
//        scaleLabel: "<%=value%>",
//        scaleFontFamily: 'sans-serif',
//        scaleFontSize: 12,
//        scaleFontStyle: "normal",
//        scaleFontColor: "#666",
//        scaleShowLabelBackdrop: true,
//        scaleBackdropColor: "rgba(255,255,255,0.75)",
//        scaleBackdropPaddingY: 2,
//        scaleBackdropPaddingX: 2,
//        segmentShowStroke: true,
//        segmentStrokeColor: "#fff",
//        segmentStrokeWidth: 2,
//        animation: true,
//        animationSteps: 100,
//        animationEasing: "easeOutBounce",
//        animateRotate: true,
//        animateScale: false,
//        onAnimationComplete: null
//    }
    _chartProperties << new ChartLinearProperties(this);
    _chartProperties << new ChartPointProperties(this);
    _chartProperties << new ChartRoundProperties(this);
    _chartProperties << new ChartBackdropProperties(this);
    _chartProperties << new ChartAnimationProperties(this);
}
