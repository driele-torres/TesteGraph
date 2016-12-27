#include "chart_doughnut.h"

#include "chartsproperties/properties_chartanimation.h"
#include "chartsproperties/properties_chartround.h"

void DoughnutChart::setDefaultProperties()
{
    setChartType(DOUGHNUT);
//    var defaultsDoughnut = {
//        segmentShowStroke: true,
//        segmentStrokeColor: "#fff",
//        segmentStrokeWidth: 2,
//        percentageInnerCutout: 50,
//        animation: true,
//        animationSteps: 100,
//        animationEasing: "easeOutBounce",
//        animateRotate: true,
//        animateScale: false,
//        onAnimationComplete: null
//    }
    _chartProperties << new ChartRoundProperties(this);
    _chartProperties << new ChartAnimationProperties(this);
}
