#include "chart_pie.h"

#include "chartsproperties/properties_chartanimation.h"
#include "chartsproperties/properties_chartround.h"

void PieChart::setDefaultProperties()
{
    setChartType(PIE);
    ChartRoundProperties * roundProperties = new ChartRoundProperties(this);
    roundProperties->setSegmentShowStroke(true);
    roundProperties->setSegmentStrokeColor("#fff");
    roundProperties->setSegmentStrokeWidth(2);
    ChartAnimationProperties * animationProperties = new ChartAnimationProperties(this);
    animationProperties->setAnimation(true);
    animationProperties->setAnimationSteps(100);
    animationProperties->setAnimationEasing("easeOutBounce");
    animationProperties->setAnimateRotate(true);
    animationProperties->setAnimateScale(false);
    _chartProperties << roundProperties;
    _chartProperties << animationProperties;
}
