#ifndef VECTORLINEAR_H
#define VECTORLINEAR_H
#include <QObject>

#include "custom_vector.h"
#include "custom_colors.h"

class VectorLinear : public CustomVector
{
    Q_OBJECT
    Q_PROPERTY(QVariant      subject  READ subject  WRITE setSubject)
    Q_PROPERTY(QVariantList  labels   READ labels   WRITE setLabels )
    Q_PROPERTY(QVariantList  data     READ values   WRITE setValues )
    Q_PROPERTY(ColorsChart*  colors   READ color    WRITE setColor  )

public:
    explicit VectorLinear(QObject *parent = 0): CustomVector(parent){}

    Q_INVOKABLE virtual ColorsChart * color() const;
    Q_INVOKABLE virtual void setColor(ColorsChart *color);

private:
    ColorsChart *_color = nullptr;
};
#endif // VECTORLINEAR_H
