#include "custom_vectorlinear.h"
#include <QDebug>

ColorsChart *VectorLinear::color() const
{
    return _color;
}

void VectorLinear::setColor(ColorsChart *color)
{
    _color = color;
}
