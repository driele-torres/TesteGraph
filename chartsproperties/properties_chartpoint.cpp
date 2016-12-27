#include "properties_chartpoint.h"

bool ChartPointProperties::pointDot() const
{
    return _pointDot;
}

void ChartPointProperties::setPointDot(bool pointDot)
{
    _pointDot = pointDot;
}

double ChartPointProperties::pointDotRadius() const
{
    return _pointDotRadius;
}

void ChartPointProperties::setPointDotRadius(double pointDotRadius)
{
    _pointDotRadius = pointDotRadius;
}

double ChartPointProperties::pointDotStrokeWidth() const
{
    return _pointDotStrokeWidth;
}

void ChartPointProperties::setPointDotStrokeWidth(double pointDotStrokeWidth)
{
    _pointDotStrokeWidth = pointDotStrokeWidth;
}

QString ChartPointProperties::pointLabelFontFamily() const
{
    return _pointLabelFontFamily;
}

void ChartPointProperties::setPointLabelFontFamily(const QString &pointLabelFontFamily)
{
    _pointLabelFontFamily = pointLabelFontFamily;
}

QString ChartPointProperties::pointLabelFontStyle() const
{
    return _pointLabelFontStyle;
}

void ChartPointProperties::setPointLabelFontStyle(const QString &pointLabelFontStyle)
{
    _pointLabelFontStyle = pointLabelFontStyle;
}

double ChartPointProperties::pointLabelFontSize() const
{
    return _pointLabelFontSize;
}

void ChartPointProperties::setPointLabelFontSize(double pointLabelFontSize)
{
    _pointLabelFontSize = pointLabelFontSize;
}

QString ChartPointProperties::pointLabelFontColor() const
{
    return _pointLabelFontColor;
}

void ChartPointProperties::setPointLabelFontColor(const QString &pointLabelFontColor)
{
    _pointLabelFontColor = pointLabelFontColor;
}

bool ChartPointProperties::datasetStroke() const
{
    return _datasetStroke;
}

void ChartPointProperties::setDatasetStroke(bool datasetStroke)
{
    _datasetStroke = datasetStroke;
}

double ChartPointProperties::datasetStrokeWidth() const
{
    return _datasetStrokeWidth;
}

void ChartPointProperties::setDatasetStrokeWidth(double datasetStrokeWidth)
{
    _datasetStrokeWidth = datasetStrokeWidth;
}

bool ChartPointProperties::datasetFill() const
{
    return _datasetFill;
}

void ChartPointProperties::setDatasetFill(bool datasetFill)
{
    _datasetFill = datasetFill;
}
