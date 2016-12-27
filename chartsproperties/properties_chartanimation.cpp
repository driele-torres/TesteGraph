#include "properties_chartanimation.h"

bool ChartAnimationProperties::animateRotate() const
{
    return _animateRotate;
}

void ChartAnimationProperties::setAnimateRotate(bool animateRotate)
{
    _animateRotate = animateRotate;
}

bool ChartAnimationProperties::animation() const
{
    return _animation;
}

void ChartAnimationProperties::setAnimation(bool animation)
{
    _animation = animation;
}

long long ChartAnimationProperties::animationSteps() const
{
    return _animationSteps;
}

void ChartAnimationProperties::setAnimationSteps(long long animationSteps)
{
    _animationSteps = animationSteps;
}

QString ChartAnimationProperties::animationEasing() const
{
    return _animationEasing;
}

void ChartAnimationProperties::setAnimationEasing(const QString &animationEasing)
{
    _animationEasing = animationEasing;
}

bool ChartAnimationProperties::animateScale() const
{
    return _animateScale;
}

void ChartAnimationProperties::setAnimateScale(bool animateScale)
{
    _animateScale = animateScale;
}

QString ChartAnimationProperties::onAnimationComplete() const
{
    return _onAnimationComplete;
}

void ChartAnimationProperties::setOnAnimationComplete(const QString &onAnimationComplete)
{
    _onAnimationComplete = onAnimationComplete;
}
