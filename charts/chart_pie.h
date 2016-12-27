#ifndef PIECHART_H
#define PIECHART_H
#include "chart_qml.h"

#include <QObject>

class PieChart : public QMLChart
{
    Q_OBJECT
public:
    explicit PieChart(QObject *parent = 0): QMLChart(parent){}
    void setDefaultProperties();
};

#endif // PIECHART_H
