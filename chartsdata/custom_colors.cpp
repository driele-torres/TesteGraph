#include "custom_colors.h"

QString ColorsChart::fillColor() const
{
    return _fillColor;
}

void ColorsChart::setFillColor(const QString &fillColor)
{
    _fillColor = fillColor;
}

QString ColorsChart::strokeColor() const
{
    return _strokeColor;
}

void ColorsChart::setStrokeColor(const QString &strokeColor)
{
    _strokeColor = strokeColor;
}

QString ColorsChart::pointColor() const
{
    return _pointColor;
}

void ColorsChart::setPointColor(const QString &pointColor)
{
    _pointColor = pointColor;
}

QString ColorsChart::pointStrokeColor() const
{
    return _pointStrokeColor;
}

void ColorsChart::setPointStrokeColor(const QString &pointStrokeColor)
{
    _pointStrokeColor = pointStrokeColor;
}
