#ifndef CHARTANIMATIONPROPERTIES_H
#define CHARTANIMATIONPROPERTIES_H
#include "properties_chart.h"
#include <QObject>

// This classe is responsable to handle all the configurations about animation (proprieties) on a chart.

class ChartAnimationProperties : public ChartProperties
{
    Q_OBJECT

    Q_PROPERTY(QString    onAnimationComplete  READ onAnimationComplete  WRITE setOnAnimationComplete)
    Q_PROPERTY(bool       animateRotate        READ animateRotate        WRITE setAnimateRotate      )
    Q_PROPERTY(bool       animation            READ animation            WRITE setAnimation          )
    Q_PROPERTY(long long  animationSteps       READ animationSteps       WRITE setAnimationSteps     )
    Q_PROPERTY(QString    animationEasing      READ animationEasing      WRITE setAnimationEasing    )
    Q_PROPERTY(bool       animateScale         READ animateScale         WRITE setAnimateScale       )

public:

    explicit ChartAnimationProperties(QObject *parent = 0): ChartProperties(parent){}

    Q_INVOKABLE virtual bool animateRotate() const;
    Q_INVOKABLE virtual void setAnimateRotate(bool animateRotate);

    Q_INVOKABLE virtual bool animation() const;
    Q_INVOKABLE virtual void setAnimation(bool animation);

    Q_INVOKABLE virtual long long animationSteps() const;
    Q_INVOKABLE virtual void setAnimationSteps(long long animationSteps);

    Q_INVOKABLE virtual QString animationEasing() const;
    Q_INVOKABLE virtual void setAnimationEasing(const QString &animationEasing);

    Q_INVOKABLE virtual bool animateScale() const;
    Q_INVOKABLE virtual void setAnimateScale(bool animateScale);

    Q_INVOKABLE virtual QString onAnimationComplete() const;
    Q_INVOKABLE virtual void setOnAnimationComplete(const QString &onAnimationComplete);

private:
    bool        _animateRotate  = true           ;
    bool        _animation      = true           ;
    long long   _animationSteps = 100            ;
    QString     _animationEasing= "easeOutBounce";
    //Type of easing used by the property animation on the QML
    bool        _animateScale   = false          ;
    // COULD RECEIVE  A JS FUNCTION AS PARAMETRE
    // DONO IF A FUNCTION NAME OR IMPLEMENTATION
    //MAYBE SOME PREDEFINED ACTION COULD BE DONE
    QString     _onAnimationComplete = "null";
};

#endif // CHARTANIMATIONPROPERTIES_H
