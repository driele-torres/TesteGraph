#ifndef CHARTGRIDPROPERTIES_H
#define CHARTGRIDPROPERTIES_H
#include "properties_chart.h"
#include <QObject>

class ChartGridProperties : public ChartProperties
{
    Q_OBJECT

    Q_PROPERTY(bool    scaleShowGridLines  READ scaleShowGridLines  WRITE setScaleShowGridLines)
    Q_PROPERTY(QString scaleGridLineColor  READ scaleGridLineColor  WRITE setScaleGridLineColor)
    Q_PROPERTY(double  scaleGridLineWidth  READ scaleGridLineWidth  WRITE setScaleGridLineWidth)

public:
    explicit ChartGridProperties(QObject *parent = 0) : ChartProperties(parent){}

    bool scaleShowGridLines() const;
    void setScaleShowGridLines(bool scaleShowGridLines);

    QString scaleGridLineColor() const;
    void setScaleGridLineColor(const QString &scaleGridLineColor);

    double scaleGridLineWidth() const;
    void setScaleGridLineWidth(double scaleGridLineWidth);

private:
    bool            _scaleShowGridLines= true;
    QString         _scaleGridLineColor= "rgba(0,0,0,.05)";
    double          _scaleGridLineWidth= 1;
};

#endif // CHARTGRIDPROPERTIES_H
