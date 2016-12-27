#include "properties_chartgrid.h"

bool ChartGridProperties::scaleShowGridLines() const
{
    return _scaleShowGridLines;
}

void ChartGridProperties::setScaleShowGridLines(bool scaleShowGridLines)
{
    _scaleShowGridLines = scaleShowGridLines;
}

QString ChartGridProperties::scaleGridLineColor() const
{
    return _scaleGridLineColor;
}

void ChartGridProperties::setScaleGridLineColor(const QString &scaleGridLineColor)
{
    _scaleGridLineColor = scaleGridLineColor;
}

double ChartGridProperties::scaleGridLineWidth() const
{
    return _scaleGridLineWidth;
}

void ChartGridProperties::setScaleGridLineWidth(double scaleGridLineWidth)
{
    _scaleGridLineWidth = scaleGridLineWidth;
}
