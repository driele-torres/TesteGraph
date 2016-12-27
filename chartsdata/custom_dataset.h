#ifndef CUSTOMDATASET_H
#define CUSTOMDATASET_H

#include <QObject>
#include <QVariant>
#include "chartsbase/custom.h"

#include "custom_vector.h"

class CustomDataset : public Custom
{
    Q_OBJECT
    Q_PROPERTY(QCustomVectorList dataset READ dataset WRITE setDataset)
    Q_PROPERTY(QVariant          title   READ title   WRITE setTitle  )

public:
    explicit CustomDataset(QObject *parent = 0) : Custom(parent){}
    explicit CustomDataset(const CustomDataset&, QObject *parent = 0): Custom(parent){}
    ~CustomDataset(){}

      Q_INVOKABLE virtual void addValue(CustomVector* value);
      Q_INVOKABLE virtual void addTitle(const QString &value);

      Q_INVOKABLE virtual QVariant title() const;
      Q_INVOKABLE virtual void setTitle(const QVariant &title);

      Q_INVOKABLE virtual QCustomVectorList dataset() const;
      Q_INVOKABLE virtual void setDataset(const QCustomVectorList &dataset);

private:
    QCustomVectorList _dataset;
    QVariant _title = "Exemplo";
};
Q_DECLARE_METATYPE(CustomDataset)
typedef QList<CustomDataset*>  QCustomDatasetList;
Q_DECLARE_METATYPE(QCustomDatasetList)
#endif // CUSTOMDATASET_H
