#ifndef CUSTOMVECTOR_H
#define CUSTOMVECTOR_H
#include "chartsbase/custom.h"

#include <QObject>
#include <QVariant>

class CustomVector : public Custom
{
    Q_OBJECT
    Q_PROPERTY(QVariantList data    READ values  WRITE setValues )
    Q_PROPERTY(QVariantList labels  READ labels  WRITE setLabels )
    Q_PROPERTY(QVariant     subject READ subject WRITE setSubject)

public:
    explicit CustomVector(QObject *parent = 0 ): Custom(parent){}
    explicit CustomVector(const CustomVector &,QObject *parent = 0): Custom(parent){}
    ~CustomVector(){}

    Q_INVOKABLE virtual QVariantList values() const;
    Q_INVOKABLE virtual void setValues(const QVariantList &values);

    Q_INVOKABLE virtual QVariantList labels() const;
    Q_INVOKABLE virtual void setLabels(const QVariantList &labels);

    Q_INVOKABLE virtual QVariant subject() const;
    Q_INVOKABLE virtual void setSubject(const QVariant &subject);

    Q_INVOKABLE virtual void addValue(QVariant value, QVariant label);

protected:
    QVariantList _values;
    QVariantList _labels;
    QVariant     _subject = "Numeros";
};

Q_DECLARE_METATYPE(CustomVector)
typedef QList<CustomVector*>  QCustomVectorList;
Q_DECLARE_METATYPE(QCustomVectorList)
#endif // CUSTOMVECTOR_H
