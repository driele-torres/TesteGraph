#ifndef POLARAREACHART_H
#define POLARAREACHART_H
#include "chart_qml.h"
#include <QObject>

class PolarAreaChart : public QMLChart
{
    Q_OBJECT
public:
    explicit PolarAreaChart(QObject *parent = 0) : QMLChart(parent){}
    void setDefaultProperties();
};

#endif // POLARAREACHART_H
