#ifndef CHARTBACKDROPPROPERTIES_H
#define CHARTBACKDROPPROPERTIES_H
#include "properties_chart.h"
#include <QObject>

class ChartBackdropProperties: public ChartProperties
{
    /*
     * Backdrops are
    */
    Q_OBJECT

    Q_PROPERTY(bool    scaleShowLabelBackdrop  READ scaleShowLabelBackdrop  WRITE setScaleShowLabelBackdrop )
    Q_PROPERTY(QString scaleBackdropColor      READ scaleBackdropColor      WRITE setScaleBackdropColor     )
    Q_PROPERTY(double  scaleBackdropPaddingY   READ scaleBackdropPaddingY   WRITE setScaleBackdropPaddingY  )
    Q_PROPERTY(double  scaleBackdropPaddingX   READ scaleBackdropPaddingX   WRITE setScaleBackdropPaddingX  )

public:

    explicit ChartBackdropProperties(QObject *parent = 0) : ChartProperties(parent){}

    Q_INVOKABLE virtual bool scaleShowLabelBackdrop() const;
    Q_INVOKABLE virtual void setScaleShowLabelBackdrop(bool scaleShowLabelBackdrop);

    Q_INVOKABLE virtual QString scaleBackdropColor() const;
    Q_INVOKABLE virtual void setScaleBackdropColor(const QString &scaleBackdropColor);

    Q_INVOKABLE virtual double scaleBackdropPaddingY() const;
    Q_INVOKABLE virtual void setScaleBackdropPaddingY(double scaleBackdropPaddingY);

    Q_INVOKABLE virtual double scaleBackdropPaddingX() const;
    Q_INVOKABLE virtual void setScaleBackdropPaddingX(double scaleBackdropPaddingX);

private:
    bool    _scaleShowLabelBackdrop = true;
    QString _scaleBackdropColor     =  "rgba(255,255,255,0.75)";
    double  _scaleBackdropPaddingY  = 2;
    double  _scaleBackdropPaddingX  = 2;
};

#endif // CHARTBACKDROPPROPERTIES_H
