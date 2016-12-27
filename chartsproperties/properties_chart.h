#ifndef CHARTPROPERTIES_H
#define CHARTPROPERTIES_H
#include "chartsbase/custom.h"
#include <QObject>

class ChartProperties : public Custom
{
    Q_OBJECT
public:
    explicit ChartProperties(QObject *parent = 0) : Custom(parent){}
    explicit ChartProperties(const ChartProperties&, QObject *parent = 0): Custom(parent){}
    ~ChartProperties(){}
};
Q_DECLARE_METATYPE(ChartProperties)
typedef QList<ChartProperties*>  QChartPropertiesList;
Q_DECLARE_METATYPE(QChartPropertiesList)
#endif // CHARTPROPERTIES_H
