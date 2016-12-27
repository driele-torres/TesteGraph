#include "properties_chartround.h"

bool ChartRoundProperties::segmentShowStroke() const
{
    return _segmentShowStroke;
}

void ChartRoundProperties::setSegmentShowStroke(bool value)
{
    _segmentShowStroke = value;
}

QString ChartRoundProperties::segmentStrokeColor() const
{
    return _segmentStrokeColor;
}

void ChartRoundProperties::setSegmentStrokeColor(const QString &value)
{
    _segmentStrokeColor = value;
}

long long ChartRoundProperties::segmentStrokeWidth() const
{
    return _segmentStrokeWidth;
}

void ChartRoundProperties::setSegmentStrokeWidth(long long value)
{
    _segmentStrokeWidth = value;
}

double ChartRoundProperties::percentageInnerCutout() const
{
    return _percentageInnerCutout;
}

void ChartRoundProperties::setPercentageInnerCutout(double value)
{
    _percentageInnerCutout = value;
}
