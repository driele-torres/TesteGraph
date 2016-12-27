#ifndef VECTORROUND_H
#define VECTORROUND_H
#include <QObject>

#include "custom_vector.h"
#include "custom_colors.h"

class VectorRound : public CustomVector
{
    Q_OBJECT
    Q_PROPERTY(QVariant         subject READ subject WRITE setSubject)
    Q_PROPERTY(QVariantList     labels  READ labels  WRITE setLabels )
    Q_PROPERTY(QVariantList     data    READ values  WRITE setValues )
    Q_PROPERTY(QColorsChartList colors  READ colors  WRITE setColors )

//    Q_PROPERTY(QVariantList colors  READ colors  WRITE setColors )
public:
    explicit VectorRound(QObject *parent = 0) : CustomVector(parent){}

    Q_INVOKABLE virtual void addValue(QVariant value, QVariant label, ColorsChart* color);

    Q_INVOKABLE virtual QColorsChartList colors() const;
    Q_INVOKABLE virtual void setColors(const QColorsChartList &colors);

    Q_INVOKABLE virtual void setColor(ColorsChart *color);

private:
    QList<ColorsChart *> _colors;
};
#endif // VECTORROUND_H
