#include "custom_vectorround.h"
#include <QDebug>

void VectorRound::addValue(QVariant value, QVariant label, ColorsChart * color)
{
    _values << value;
    _labels << label;
    _colors << color;
}

void VectorRound::setColor(ColorsChart *color)
{
    _colors << color;
}

QColorsChartList VectorRound::colors() const
{
    return _colors;
}

void VectorRound::setColors(const QColorsChartList &colors)
{
    _colors = colors;
}
