#ifndef CUSTOM_H
#define CUSTOM_H
#include "qmetaobject.h"
#include "qjson/serializer.h"
#include "qjson/parser.h"

#include <QObject>
#include <QDebug>
class Custom : public QObject
{
    Q_OBJECT
public:
    explicit Custom(QObject *parent = 0) : QObject(parent){}
    Q_INVOKABLE virtual QByteArray toJson();
    Q_INVOKABLE virtual QByteArray objectToJson(QVariant map);
};
#endif // CUSTOM_H
