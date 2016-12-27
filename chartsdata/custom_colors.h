#ifndef COLORSCHART_H
#define COLORSCHART_H
#include "chartsbase/custom.h"
#include <QObject>

class ColorsChart : public Custom
{
    Q_OBJECT

    Q_PROPERTY(QString  fillColor        READ fillColor        WRITE setFillColor       )
    Q_PROPERTY(QString  strokeColor      READ strokeColor      WRITE setStrokeColor     )
    Q_PROPERTY(QString  pointColor       READ pointColor       WRITE setPointColor      )
    Q_PROPERTY(QString  pointStrokeColor READ pointStrokeColor WRITE setPointStrokeColor)

public:
    explicit ColorsChart(QObject *parent = 0): Custom(parent){}
    explicit ColorsChart(const ColorsChart &,QObject *parent = 0): Custom(parent){}
    explicit ColorsChart(QString fillColor,
                         QString strokeColor="", QString pointColor="",
                         QString pointStrokeColor="",QObject *parent = 0): Custom(parent){
        _fillColor       =fillColor       ;
        _strokeColor     =strokeColor     ;
        _pointColor      =pointColor      ;
        _pointStrokeColor=pointStrokeColor;
    }
    ~ColorsChart(){}

    QString fillColor() const;
    void setFillColor(const QString &fillColor);

    QString strokeColor() const;
    void setStrokeColor(const QString &strokeColor);

    QString pointColor() const;
    void setPointColor(const QString &pointColor);

    QString pointStrokeColor() const;
    void setPointStrokeColor(const QString &pointStrokeColor);

private:
    QString _fillColor       = "rgba(151,187,205,0.5)";
    QString _strokeColor     = "";
    QString _pointColor      = "";
    QString _pointStrokeColor= "";
};
Q_DECLARE_METATYPE(ColorsChart)
typedef QList<ColorsChart*>  QColorsChartList;
Q_DECLARE_METATYPE(QColorsChartList)
#endif // COLORSCHART_H
