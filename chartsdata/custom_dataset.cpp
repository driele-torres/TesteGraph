#include "custom_dataset.h"

void CustomDataset::addValue(CustomVector* value)
{
    _dataset << value;
}

void CustomDataset::addTitle(const QString &value)
{
    _title = QVariant(value);
}

QVariant CustomDataset::title() const
{
    return _title;
}

void CustomDataset::setTitle(const QVariant &title)
{
    _title = title;
}

QCustomVectorList CustomDataset::dataset() const
{
    return _dataset;
}

void CustomDataset::setDataset(const QCustomVectorList &dataset)
{
    _dataset = dataset;
}
