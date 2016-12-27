#ifndef CHARTLINEARBASE_H
#define CHARTLINEARBASE_H
#include "properties_chart.h"
#include <QObject>
//static const QStringList suportedFonts << "serif"<< "sans-serif"<< "'cursive'"<< "'fantasy'"<< "'monospace'";
class ChartLinearProperties : public ChartProperties
{
    Q_OBJECT

    Q_PROPERTY(bool    scaleOverlay     READ scaleOverlay     WRITE setScaleOverlay   )
    Q_PROPERTY(bool    scaleOverride    READ scaleOverride    WRITE setScaleOverride  )
    Q_PROPERTY(double  scaleSteps       READ scaleSteps       WRITE setScaleSteps     )
    Q_PROPERTY(double  scaleStepWidth   READ scaleStepWidth   WRITE setScaleStepWidth )
    Q_PROPERTY(double  scaleStartValue  READ scaleStartValue  WRITE setScaleStartValue)
    Q_PROPERTY(QString scaleLineColor   READ scaleLineColor   WRITE setScaleLineColor )
    Q_PROPERTY(double  scaleLineWidth   READ scaleLineWidth   WRITE setScaleLineWidth )
    Q_PROPERTY(bool    scaleShowLine    READ scaleShowLine    WRITE setScaleShowLine  )
    Q_PROPERTY(QString scaleLabel       READ scaleLabel       WRITE setScaleLabel     )
    Q_PROPERTY(bool    scaleShowLabels  READ scaleShowLabels  WRITE setScaleShowLabels)
    Q_PROPERTY(QString scaleFontFamily  READ scaleFontFamily  WRITE setScaleFontFamily)
    Q_PROPERTY(double  scaleFontSize    READ scaleFontSize    WRITE setScaleFontSize  )
    Q_PROPERTY(QString scaleFontStyle   READ scaleFontStyle   WRITE setScaleFontStyle )
    Q_PROPERTY(QString scaleFontColor   READ scaleFontColor   WRITE setScaleFontColor )

public:
    explicit ChartLinearProperties(QObject *parent = 0) : ChartProperties(parent){}

    bool scaleOverlay() const;
    void setScaleOverlay(bool scaleOverlay);

    bool scaleOverride() const;
    void setScaleOverride(bool scaleOverride);

    double scaleSteps() const;
    void setScaleSteps(double scaleSteps);

    double scaleStepWidth() const;
    void setScaleStepWidth(double scaleStepWidth);

    double scaleStartValue() const;
    void setScaleStartValue(double scaleStartValue);

    QString scaleLineColor() const;
    void setScaleLineColor(const QString &scaleLineColor);

    double scaleLineWidth() const;
    void setScaleLineWidth(double scaleLineWidth);

    bool scaleShowLine() const;
    void setScaleShowLine(bool scaleShowLine);

    QString scaleLabel() const;
    void setScaleLabel(const QString &scaleLabel);

    bool scaleShowLabels() const;
    void setScaleShowLabels(bool scaleShowLabels);

    QString scaleFontFamily() const;
    void setScaleFontFamily(const QString &scaleFontFamily);

    double scaleFontSize() const;
    void setScaleFontSize(double scaleFontSize);

    QString scaleFontStyle() const;
    void setScaleFontStyle(const QString &scaleFontStyle);

    QString scaleFontColor() const;
    void setScaleFontColor(const QString &scaleFontColor);

private:

    bool    _scaleOverlay            = true                    ;
    bool    _scaleOverride           = false                   ;
    double  _scaleSteps              = 0.0                     ;
    double  _scaleStepWidth          = 0.0                     ;
    double  _scaleStartValue         = 0.0                     ;
    double  _scaleLineWidth          = 1                       ;
    bool    _scaleShowLine           = true                    ;
    bool    _scaleShowLabels         = true                    ;
    double  _scaleFontSize           = 12                      ;
    QString _scaleLineColor          = "#666"        ;
    QString _scaleLabel              = "<%=value%>"            ;
    QString _scaleFontStyle          = "normal"                ;
    QString _scaleFontColor          = "#666"                  ;
    QString _scaleFontFamily         = "'sans-serif'"          ;
};

#endif // CHARTLINEARPROPERTIES_H
