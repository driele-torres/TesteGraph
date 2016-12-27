#ifndef DOUGHNUTCHART_H
#define DOUGHNUTCHART_H
#include "chart_qml.h"

#include <QObject>

class DoughnutChart : public QMLChart
{
    Q_OBJECT
public:
    explicit DoughnutChart(QObject *parent = 0): QMLChart(parent){}
    void setDefaultProperties();
};

#endif // DOUGHNUTCHART_H
