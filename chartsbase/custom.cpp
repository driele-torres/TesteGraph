#include "custom.h"

QByteArray Custom::toJson()
{
    //TODO MAKE RECURSIVE
    QVariantMap map;
    for(int i = this->metaObject()->propertyOffset() ; i < this->metaObject()->propertyCount() ; i++){
        QString property = QString::fromLatin1(this->metaObject()->property(i).name());
        QVariant value = this->property(property.toLatin1());
        map.insert(property, value);
    }

    const QMetaObject * superClass = this->metaObject()->superClass();
    for(int i = superClass->propertyOffset(); i < superClass->propertyCount(); i++){
        QString property = QString::fromLatin1(this->metaObject()->property(i).name());
        QVariant value = this->property(property.toLatin1());
        map.insert(property, value);
    }
    return this->objectToJson(map);
}

QByteArray Custom::objectToJson(QVariant map){
    QJson::Serializer serializer;
    QByteArray  byteResult = serializer.serialize(map);
    return byteResult;
}
