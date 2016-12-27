#ifndef BARCHART_H
#define BARCHART_H
#include "chart_qml.h"

#include <QObject>

class BarChart : public QMLChart
{
    Q_OBJECT
    Q_PROPERTY(bool   barShowStroke      READ barShowStroke      WRITE setBarShowStroke     )
    Q_PROPERTY(double barStrokeWidth     READ barStrokeWidth     WRITE setBarStrokeWidth    )
    Q_PROPERTY(double barValueSpacing    READ barValueSpacing    WRITE setBarValueSpacing   )
    Q_PROPERTY(double barDatasetSpacing  READ barDatasetSpacing  WRITE setBarDatasetSpacing )

public:
    explicit BarChart(QObject *parent = 0): QMLChart(parent){}
    void setDefaultProperties();

    Q_INVOKABLE virtual bool barShowStroke() const;
    Q_INVOKABLE virtual void setBarShowStroke(bool barShowStroke);

    Q_INVOKABLE virtual double barStrokeWidth() const;
    Q_INVOKABLE virtual void setBarStrokeWidth(double barStrokeWidth);

    Q_INVOKABLE virtual double barValueSpacing() const;
    Q_INVOKABLE virtual void setBarValueSpacing(double barValueSpacing);

    Q_INVOKABLE virtual double barDatasetSpacing() const;
    Q_INVOKABLE virtual void setBarDatasetSpacing(double barDatasetSpacing);

private:
    bool   _barShowStroke    = true;
    double _barStrokeWidth   = 2   ;
    double _barValueSpacing  = 5   ;
    double _barDatasetSpacing= 1   ;
};

#endif // BARCHART_H
