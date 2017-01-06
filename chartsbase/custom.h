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
    template<class T>
        T*jsonToObject(QByteArray json){
            T*RETURN=nullptr;
            QJson::Parser parser;
            bool ok=false;
            QVariantMap map=parser.parse(json, &ok).toMap();

//            QCustomDatasetList   chart_Datasets
//                 QCustomVectorList dataset
//                     QVariantList data
//                     QVariantList labels
//                     QVariant     subject
//                 QVariant          title
//            QVariantMap          chart_Properties
//            QString              chart_Title
//            ChartType            chart_Type

            if(ok){
                RETURN=new T();
                bool checkSetProperty=false;
                foreach (QString key, map.keys()) {

                    QByteArray propertyName=key.toLatin1();
                    QVariant value = map.value(key);

                    if(value.isNull() ){
                        checkSetProperty=true;
                        continue;
                    }
                    else if((value.type()==QVariant::List) && (QString(propertyName)=="chart_Datasets")){
//                        //&& (RETURN->setProperty(propertyName, value.toInt()))
                        qDebug() << "entrou";
                        QObjectList list;
                        if (value.canConvert<QVariantList>()) {
                            QSequentialIterable iterable = value.value<QSequentialIterable>();
                            for (const QVariant& item: iterable) {
                                qDebug() << item.toString();

                                QObject* object = item.value<QObject*>();
                                if (object) { list.append(object); }
                            }
                        }
                        qDebug() << list.size();
                    }
//                    else if(RETURN->setProperty(propertyName, value)){
//                        checkSetProperty = true;
//                    }
//                    else if((value.type()==QVariant::LongLong) && (RETURN->setProperty(propertyName, value.toInt()))){
//                        checkSetProperty = true;
//                    }
//                    else if((value.type()==QVariant::ULongLong) && (RETURN->setProperty(propertyName, value.toLongLong()))){
//                        checkSetProperty = true;
//                    }
//                    else if((value.type()==QVariant::ULongLong) && (RETURN->setProperty(propertyName, value.toInt()))){
//                        checkSetProperty = true;
//                    }
//                    else if((value.type()==QVariant::Double) && (RETURN->setProperty(propertyName, value.toFloat()))){
//                        checkSetProperty = true;
//                    }
//                    else if((value.type()==QVariant::Double) && (RETURN->setProperty(propertyName, value.toInt()))){
//                        checkSetProperty = true;
//                    }



                    if(!checkSetProperty){
                        delete RETURN;
                        RETURN=nullptr;
                        break;
                    }

                }
            }
            return RETURN;
        }
};
#endif // CUSTOM_H
