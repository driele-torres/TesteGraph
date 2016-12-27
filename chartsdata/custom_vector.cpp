#include "custom_vector.h"

void CustomVector::addValue(QVariant value, QVariant label)
{
    _values << value;
    _labels << label;
}

QVariantList CustomVector::values() const
{
    return _values;
}

void CustomVector::setValues(const QVariantList &values)
{
    _values = values;
}

QVariantList CustomVector::labels() const
{
    return _labels;
}

void CustomVector::setLabels(const QVariantList &labels)
{
    _labels = labels;
}

QVariant CustomVector::subject() const
{
    return _subject;
}

void CustomVector::setSubject(const QVariant &subject)
{
    _subject = subject;
}
