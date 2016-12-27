#include "chart_bar.h"

#include "chartsproperties/properties_chartlinear.h"
#include "chartsproperties/properties_chartgrid.h"
#include "chartsproperties/properties_chartanimation.h"

void BarChart::setDefaultProperties()
{
     setChartType(BAR);
     //    var defaultsBar = {
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
     //        barShowStroke: true,
     //        barStrokeWidth: 2,
     //        barValueSpacing: 5,
     //        barDatasetSpacing: 1,
     //        animation: true,
     //        animationSteps: 60,
     //        animationEasing: "easeOutQuart",
     //        onAnimationComplete: null
     //    }
    _chartProperties << new ChartLinearProperties(this);
    _chartProperties << new ChartGridProperties(this);
    _chartProperties << new ChartAnimationProperties(this);
}

bool BarChart::barShowStroke() const
{
    return _barShowStroke;
}

void BarChart::setBarShowStroke(bool barShowStroke)
{
    _barShowStroke = barShowStroke;
}

double BarChart::barStrokeWidth() const
{
    return _barStrokeWidth;
}

void BarChart::setBarStrokeWidth(double barStrokeWidth)
{
    _barStrokeWidth = barStrokeWidth;
}

double BarChart::barValueSpacing() const
{
    return _barValueSpacing;
}

void BarChart::setBarValueSpacing(double barValueSpacing)
{
    _barValueSpacing = barValueSpacing;
}

double BarChart::barDatasetSpacing() const
{
    return _barDatasetSpacing;
}

void BarChart::setBarDatasetSpacing(double barDatasetSpacing)
{
    _barDatasetSpacing = barDatasetSpacing;
}
