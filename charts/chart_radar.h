#ifndef RADARCHART_H
#define RADARCHART_H
#include "chart_qml.h"
#include <QObject>

class RadarChart : public QMLChart
{
    Q_OBJECT

    Q_PROPERTY(bool       angleShowLineOut  READ angleShowLineOut  WRITE setAngleShowLineOut)
    Q_PROPERTY(QString    angleLineColor    READ angleLineColor    WRITE setAngleLineColor  )
    Q_PROPERTY(double     angleLineWidth    READ angleLineWidth    WRITE setAngleLineWidth  )

public:
    explicit RadarChart(QObject *parent = 0) : QMLChart (parent){}

    Q_INVOKABLE void setDefaultProperties();

    Q_INVOKABLE virtual bool angleShowLineOut() const;
    Q_INVOKABLE virtual void setAngleShowLineOut(bool angleShowLineOut);

    Q_INVOKABLE virtual QString angleLineColor() const;
    Q_INVOKABLE virtual void setAngleLineColor(const QString &angleLineColor);

    Q_INVOKABLE virtual double angleLineWidth() const;
    Q_INVOKABLE virtual void setAngleLineWidth(double angleLineWidth);

private:
    bool    _angleShowLineOut= true;
    QString _angleLineColor  = "rgba(0,0,0,.1)";
    double  _angleLineWidth  = 1;
};

#endif // RADARCHART_H
