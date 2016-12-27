#ifndef CHARTPOINTPROPERTIES_H
#define CHARTPOINTPROPERTIES_H
#include "properties_chart.h"
#include <QObject>

class ChartPointProperties : public ChartProperties
{
    Q_OBJECT
    Q_PROPERTY(bool    pointDot              READ pointDot              WRITE setPointDot            )
    Q_PROPERTY(double  pointDotRadius        READ pointDotRadius        WRITE setPointDotRadius      )
    Q_PROPERTY(double  pointDotStrokeWidth   READ pointDotStrokeWidth   WRITE setPointDotStrokeWidth )
    Q_PROPERTY(QString pointLabelFontFamily  READ pointLabelFontFamily  WRITE setPointLabelFontFamily)
    Q_PROPERTY(QString pointLabelFontStyle   READ pointLabelFontStyle   WRITE setPointLabelFontStyle )
    Q_PROPERTY(double  pointLabelFontSize    READ pointLabelFontSize    WRITE setPointLabelFontSize  )
    Q_PROPERTY(QString pointLabelFontColor   READ pointLabelFontColor   WRITE setPointLabelFontColor )
    Q_PROPERTY(bool    datasetStroke         READ datasetStroke         WRITE setDatasetStroke       )
    Q_PROPERTY(double  datasetStrokeWidth    READ datasetStrokeWidth    WRITE setDatasetStrokeWidth  )
    Q_PROPERTY(bool    datasetFill           READ datasetFill           WRITE setDatasetFill         )

public:
    explicit ChartPointProperties(QObject *parent = 0) : ChartProperties(parent){}

    Q_INVOKABLE virtual bool pointDot() const;
    Q_INVOKABLE virtual void setPointDot(bool pointDot);

    Q_INVOKABLE virtual double pointDotRadius() const;
    Q_INVOKABLE virtual void setPointDotRadius(double pointDotRadius);

    Q_INVOKABLE virtual double pointDotStrokeWidth() const;
    Q_INVOKABLE virtual void setPointDotStrokeWidth(double pointDotStrokeWidth);

    Q_INVOKABLE virtual QString pointLabelFontFamily() const;
    Q_INVOKABLE virtual void setPointLabelFontFamily(const QString &pointLabelFontFamily);

    Q_INVOKABLE virtual QString pointLabelFontStyle() const;
    Q_INVOKABLE virtual void setPointLabelFontStyle(const QString &pointLabelFontStyle);

    Q_INVOKABLE virtual double pointLabelFontSize() const;
    Q_INVOKABLE virtual void setPointLabelFontSize(double pointLabelFontSize);

    Q_INVOKABLE virtual QString pointLabelFontColor() const;
    Q_INVOKABLE virtual void setPointLabelFontColor(const QString &pointLabelFontColor);

    Q_INVOKABLE virtual bool datasetStroke() const;
    Q_INVOKABLE virtual void setDatasetStroke(bool datasetStroke);

    Q_INVOKABLE virtual double datasetStrokeWidth() const;
    Q_INVOKABLE virtual void setDatasetStrokeWidth(double datasetStrokeWidth);

    Q_INVOKABLE virtual bool datasetFill() const;
    Q_INVOKABLE virtual void setDatasetFill(bool datasetFill);

private:
    bool            _pointDot            = true;
    double          _pointDotRadius      = 3;
    double          _pointDotStrokeWidth = 1;
    QString         _pointLabelFontFamily= "'sans-serif'";
    QString         _pointLabelFontStyle = "normal";
    double          _pointLabelFontSize  = 12;
    QString         _pointLabelFontColor = "#666";
    bool            _datasetStroke       = true;
    double          _datasetStrokeWidth  = 2;
    bool            _datasetFill         = true;
};

#endif // CHARTPOINTPROPERTIES_H
