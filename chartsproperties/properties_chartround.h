#ifndef CHARTROUNDPROPERTIES_H
#define CHARTROUNDPROPERTIES_H
#include "properties_chart.h"
#include <QObject>

class ChartRoundProperties : public ChartProperties
{
    Q_OBJECT

    Q_PROPERTY(bool      segmentShowStroke      READ segmentShowStroke      WRITE setSegmentShowStroke    )
    Q_PROPERTY(QString   segmentStrokeColor     READ segmentStrokeColor     WRITE setSegmentStrokeColor   )
    Q_PROPERTY(long long segmentStrokeWidth     READ segmentStrokeWidth     WRITE setSegmentStrokeWidth   )
    Q_PROPERTY(double    percentageInnerCutout  READ percentageInnerCutout  WRITE setPercentageInnerCutout)

public:
    explicit ChartRoundProperties(QObject *parent = 0) : ChartProperties(parent){}

   Q_INVOKABLE virtual  bool segmentShowStroke() const;
   Q_INVOKABLE virtual  void setSegmentShowStroke(bool value);

   Q_INVOKABLE virtual  QString segmentStrokeColor() const;
   Q_INVOKABLE virtual  void setSegmentStrokeColor(const QString &value);

   Q_INVOKABLE virtual  long long segmentStrokeWidth() const;
   Q_INVOKABLE virtual  void setSegmentStrokeWidth(long long value);

   Q_INVOKABLE virtual  double percentageInnerCutout() const;
   Q_INVOKABLE virtual  void setPercentageInnerCutout(double value);

private:
    bool        _segmentShowStroke     = true;
    QString     _segmentStrokeColor    = "#fff";
    long long   _segmentStrokeWidth    = 2;
    double      _percentageInnerCutout = 50;
};


#endif // CHARTROUNDPROPERTIES_H
