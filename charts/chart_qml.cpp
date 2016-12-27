#include "chart_qml.h"


void QMLChart::setDefaultProperties()
{
}

void QMLChart::addChartProperties(ChartProperties *value)
{
    _chartProperties <<value;
}

void QMLChart::addCustomDataset(CustomDataset *value)
{
    _chartDatasets <<value;
}

QString QMLChart::chartTitle() const
{
    return _chartTitle;
}

void QMLChart::setChartTitle(const QString &chartTitle)
{
    _chartTitle = chartTitle;
}

QChartPropertiesList QMLChart::chartProperties() const
{
    return _chartProperties;
}

void QMLChart::setChartProperties(QChartPropertiesList value)
{
    _chartProperties = value;
}

QVariantMap QMLChart::chartPropertiesVariant() const
{
    QVariantMap map;
    for(auto value:_chartProperties){
        for(int i = value->metaObject()->propertyOffset() ; i < value->metaObject()->propertyCount() ; i++){
            QString property = QString::fromLatin1(value->metaObject()->property(i).name());
            QVariant var = value->property(property.toLatin1());
            map.insert(property, var);
        }

        for(int i = this->metaObject()->propertyOffset() ; i < this->metaObject()->propertyCount() ; i++){
            QString property = QString::fromLatin1(this->metaObject()->property(i).name());
            if (!property.contains("chart")){
                QVariant var = this->property(property.toLatin1());
                map.insert(property, var);
            }
        }
    }
    return map;
}

void QMLChart::setChartPropertiesVariant(QVariantMap value)
{
    Q_UNUSED(value)
//ALERT DOESNT NEED TO BE SET.... IF YES MAYBE IN FUTURE
}

QCustomDatasetList QMLChart::chartDatasets() const
{
    return _chartDatasets;
}

void QMLChart::setChartDatasets(const QCustomDatasetList &chartDatasets)
{
    _chartDatasets = chartDatasets;
}

QByteArray QMLChart::toJson()
{
    QVariantMap map;
    for(int i = this->metaObject()->propertyOffset() ; i < this->metaObject()->propertyCount() ; i++){
        QString property = QString::fromLatin1(this->metaObject()->property(i).name());
        if (property.contains("chart")){
            QVariant var = this->property(property.toLatin1());
            map.insert(property, var);
        }
    }

    const QMetaObject * superClass = this->metaObject()->superClass();
    for(int i = superClass->propertyOffset(); i < superClass->propertyCount(); i++){
        QString property = QString::fromLatin1(this->metaObject()->property(i).name());
        QVariant value = this->property(property.toLatin1());
        map.insert(property, value);
    }
    return this->objectToJson(map);
}

QMLChart::ChartType QMLChart::chartType() const
{
    return _chartType;
}

void QMLChart::setChartType(const QMLChart::ChartType &chartType)
{
    _chartType = chartType;
}
