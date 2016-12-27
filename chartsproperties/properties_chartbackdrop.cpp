#include "properties_chartbackdrop.h"

bool ChartBackdropProperties::scaleShowLabelBackdrop() const
{
    return _scaleShowLabelBackdrop;
}

void ChartBackdropProperties::setScaleShowLabelBackdrop(bool scaleShowLabelBackdrop)
{
    _scaleShowLabelBackdrop = scaleShowLabelBackdrop;
}

QString ChartBackdropProperties::scaleBackdropColor() const
{
    return _scaleBackdropColor;
}

void ChartBackdropProperties::setScaleBackdropColor(const QString &scaleBackdropColor)
{
    _scaleBackdropColor = scaleBackdropColor;
}

double ChartBackdropProperties::scaleBackdropPaddingY() const
{
    return _scaleBackdropPaddingY;
}

void ChartBackdropProperties::setScaleBackdropPaddingY(double scaleBackdropPaddingY)
{
    _scaleBackdropPaddingY = scaleBackdropPaddingY;
}

double ChartBackdropProperties::scaleBackdropPaddingX() const
{
    return _scaleBackdropPaddingX;
}

void ChartBackdropProperties::setScaleBackdropPaddingX(double scaleBackdropPaddingX)
{
    _scaleBackdropPaddingX = scaleBackdropPaddingX;
}
