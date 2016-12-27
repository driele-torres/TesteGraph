QT += qml quick

CONFIG += c++11

QML_IMPORT_PATH =
QML_ROOT_PATH += $$PWD

# Default rules for deployment.
include(deployment.pri)

SOURCES += main.cpp \
    qjson/serializerrunnable.cpp \
    qjson/serializer.cpp \
    qjson/qobjecthelper.cpp \
    qjson/parserrunnable.cpp \
    qjson/parser.cpp \
    qjson/json_scanner.cpp \
    qjson/json_scanner.cc \
    qjson/json_parser.cc \
    charts/chart_doughnut.cpp \
    charts/chart_line.cpp \
    charts/chart_pie.cpp \
    charts/chart_polararea.cpp \
    charts/chart_qml.cpp \
    charts/chart_radar.cpp \
    chartsdata/custom_dataset.cpp \
    chartsdata/custom_vector.cpp \
    chartsproperties/properties_chart.cpp \
    chartsproperties/properties_chartanimation.cpp \
    chartsproperties/properties_chartbackdrop.cpp \
    chartsproperties/properties_chartgrid.cpp \
    chartsproperties/properties_chartlinear.cpp \
    chartsproperties/properties_chartpoint.cpp \
    chartsproperties/properties_chartround.cpp \
    chartsdata/custom_vectorlinear.cpp \
    chartsdata/custom_vectorround.cpp \
    chartsdata/custom_colors.cpp \
    chartsbase/custom.cpp \
    charts/chart_bar.cpp

HEADERS += \
    qjson/stack.hh \
    qjson/serializerrunnable.h \
    qjson/serializer.h \
    qjson/qobjecthelper.h \
    qjson/qjson_export.h \
    qjson/qjson_debug.h \
    qjson/position.hh \
    qjson/parserrunnable.h \
    qjson/parser.h \
    qjson/parser_p.h \
    qjson/location.hh \
    qjson/json_scanner.h \
    qjson/json_parser.hh \
    qjson/FlexLexer.h \
    charts/chart_doughnut.h \
    charts/chart_line.h \
    charts/chart_pie.h \
    charts/chart_polararea.h \
    charts/chart_qml.h \
    charts/chart_radar.h \
    chartsdata/custom_dataset.h \
    chartsdata/custom_vector.h \
    chartsproperties/properties_chart.h \
    chartsproperties/properties_chartanimation.h \
    chartsproperties/properties_chartbackdrop.h \
    chartsproperties/properties_chartgrid.h \
    chartsproperties/properties_chartlinear.h \
    chartsproperties/properties_chartpoint.h \
    chartsproperties/properties_chartround.h \
    chartsdata/custom_vectorlinear.h \
    chartsdata/custom_vectorround.h \
    chartsdata/custom_colors.h \
    chartsbase/custom.h \
    charts/chart_bar.h

RESOURCES += qml.qrc
