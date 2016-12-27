#ifndef LINECHART_H
#define LINECHART_H
#include "chart_qml.h"

#include <QObject>

class LineChart : public QMLChart
{
    Q_OBJECT

    Q_PROPERTY(bool  bezierCurve  READ bezierCurve  WRITE setBezierCurve  )
public:

    explicit LineChart(QObject *parent = 0) : QMLChart(parent){}
    void setDefaultProperties();

    Q_INVOKABLE virtual bool bezierCurve() const;
    Q_INVOKABLE virtual void setBezierCurve(bool bezierCurve);

private:
    bool _bezierCurve = true;
};

#endif // LINECHART_H
