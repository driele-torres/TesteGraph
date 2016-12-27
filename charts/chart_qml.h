#ifndef QMLCHART_H
#define QMLCHART_H
#include "chartsproperties/properties_chart.h"
#include "chartsdata/custom_dataset.h"
#include "chartsbase/custom.h"
#include <QObject>
#include <QJSValue>
#include <QJSEngine>

class QMLChart : public Custom
{
    Q_OBJECT
    Q_ENUMS(ChartType)
    //TO DO OU APENAS UM DATASET OU VARIOS CHART TYPE OU DESENHAR DIVERSOS CHARTS DO MESMO TIPO
    Q_PROPERTY(QCustomDatasetList   chartDatasets   READ chartDatasets          WRITE setChartDatasets         )
    Q_PROPERTY(QVariantMap          chartProperties READ chartPropertiesVariant WRITE setChartPropertiesVariant)
    Q_PROPERTY(QString              chartTitle      READ chartTitle             WRITE setChartTitle            )
    Q_PROPERTY(ChartType            chartType       READ chartType              WRITE setChartType             )

public:
    explicit QMLChart(QObject *parent = 0) : Custom(parent){}
    explicit QMLChart(const QMLChart&, QObject *parent = 0): Custom(parent){}
    ~QMLChart(){}

    enum ChartType{ NONE=0, BAR=1, DOUGHNUT=2, LINE=3, PIE=4, POLAR=5, RADAR= 6};

   Q_INVOKABLE virtual void addChartProperties(ChartProperties* value);
   Q_INVOKABLE virtual void addCustomDataset(CustomDataset* value);

   Q_INVOKABLE virtual void setDefaultProperties();

   Q_INVOKABLE virtual QString chartTitle() const;
   Q_INVOKABLE virtual void setChartTitle(const QString &chartTitle);

   Q_INVOKABLE virtual QChartPropertiesList chartProperties() const;
   Q_INVOKABLE virtual void setChartProperties(QChartPropertiesList value);

   Q_INVOKABLE virtual QVariantMap chartPropertiesVariant() const;
   Q_INVOKABLE virtual void setChartPropertiesVariant(QVariantMap value);

   Q_INVOKABLE virtual QCustomDatasetList chartDatasets() const;
   Q_INVOKABLE virtual void setChartDatasets(const QCustomDatasetList &chartDatasets);

   Q_INVOKABLE virtual QByteArray toJson();

   Q_INVOKABLE virtual ChartType chartType() const;
   Q_INVOKABLE virtual void setChartType(const ChartType &chartType);

   Q_INVOKABLE virtual void setJSValue(QJSValue valeu){
        _objectJavaScript = valeu;
   }
   Q_INVOKABLE virtual QJSValue returnJSValu0(){
        return _objectJavaScript;
   }

protected:
    QChartPropertiesList _chartProperties;
    QCustomDatasetList   _chartDatasets;
    QJSValue _objectJavaScript;
    QString _chartTitle = "Grafico";
    ChartType _chartType = LINE;
};
Q_DECLARE_METATYPE(QMLChart)
typedef QList<QMLChart*>  QQMLChartList;
Q_DECLARE_METATYPE(QQMLChartList)
#endif // QMLCHART_H
