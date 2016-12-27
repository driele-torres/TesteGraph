#include <QGuiApplication>
#include <QQmlApplicationEngine>
#include <QDebug>
#include <QQmlContext>

#include "charts/chart_line.h"
#include "charts/chart_bar.h"
#include "charts/chart_radar.h"
#include "charts/chart_pie.h"
#include "charts/chart_doughnut.h"
#include "charts/chart_polararea.h"

#include "chartsdata/custom_vector.h"
#include "chartsdata/custom_vectorlinear.h"
#include "chartsdata/custom_vectorround.h"
#include "chartsdata/custom_dataset.h"
#include "chartsdata/custom_colors.h"


int main(int argc, char *argv[])
{
    QCoreApplication::setAttribute(Qt::AA_EnableHighDpiScaling);
    QGuiApplication app(argc, argv);
    QQmlApplicationEngine engine;

//    qRegisterMetaType<ChartProperties>("ChartProperties");
//    qRegisterMetaType<QChartPropertiesList>("QChartPropertiesList");
//    qRegisterMetaType<ColorsChart>("ColorsChart");
//    qRegisterMetaType<QColorsChartList>("QColorsChartList");
//    qRegisterMetaType<CustomDataset>("CustomDataset");
//    qRegisterMetaType<QCustomDatasetList>("QCustomDatasetList");
//    qRegisterMetaType<CustomVector>("CustomVector");
//    qRegisterMetaType<QCustomVectorList>("QCustomVectorList");
//    qRegisterMetaType<QMLChart>("QMLChart");
//    qRegisterMetaType<QQMLChartList>("QQMLChartList");

    ColorsChart* color1 = new ColorsChart("rgba(220,220,220,0.5)",
                                          "rgba(220,220,220,1)",
                                          "rgba(220,220,220,1)",
                                          "#ffffff"           );

    ColorsChart* color2 = new ColorsChart("rgba(151,187,205,0.5)",
                                          "rgba(151,187,205,1)",
                                          "rgba(151,187,205,1)",
                                          "#ffffff"            );

    VectorLinear* vl1 = new VectorLinear();
    vl1->addValue(65, "January");
    vl1->addValue(59, "February");
    vl1->addValue(90, "March");
    vl1->addValue(81, "April");
    vl1->addValue(56, "May");
    vl1->addValue(55, "June");
    vl1->addValue(40, "July");
    vl1->setColor(color1);

    VectorLinear* vl2 = new VectorLinear();
    vl2->addValue(28, "January");
    vl2->addValue(48, "February");
    vl2->addValue(40, "March");
    vl2->addValue(19, "April");
    vl2->addValue(96, "May");
    vl2->addValue(27, "June");
    vl2->addValue(100,"July");
    vl2->setColor(color2);

    ColorsChart* clr1 = new                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ColorsChart("#F38630");
    ColorsChart* clr2 = new ColorsChart("#E0E4CC");
    ColorsChart* clr3 = new ColorsChart("#69D2E7");
    VectorRound* vr1  = new VectorRound();

    vr1->addValue(30 , "Inicio",clr3);
    vr1->addValue(50 , "Meio"  ,clr2);
    vr1->addValue(100, "Fim"   ,clr1);

    CustomDataset* cd = new CustomDataset();
    cd->addValue(vl1);
    cd->addValue(vl2);

    cd = new CustomDataset();
    cd->addValue(vr1);


    QMLChart * chart;
    chart = new LineChart();
    chart->setDefaultProperties();
    chart->addCustomDataset(cd);

    chart = new BarChart();
    chart->setDefaultProperties();
    chart->addCustomDataset(cd);

    chart = new RadarChart();
    chart->setDefaultProperties();
    chart->addCustomDataset(cd);

    chart = new PieChart();
    chart->setDefaultProperties();
    chart->addCustomDataset(cd);

//    chart = new DoughnutChart();
//    chart->setDefaultProperties();
//    chart->addCustomDataset(cd);

//    chart = new PolarAreaChart();
//    chart->setDefaultProperties();
//    chart->addCustomDataset(cd);

    engine.rootContext()->setContextProperty("chartDATA",chart);
    engine.load(QUrl(QLatin1String("qrc:/main.qml")));
    return app.exec();
}
