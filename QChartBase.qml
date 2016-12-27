/* QChartBase.qml ---
 *
 * Author: Julien Wintz
 * Created: Thu Feb 13 20:59:40 2014 (+0100)
 * Version:
 * Last-Updated: dec 2016
 *           By: Driele Torres
 */
import QtQuick 2.0
import "QChartBase.js" as Charts

Rectangle{
    id: formChartBase
    property   alias  chartData:                canvas.chartData;
    property   alias  chartAnimated:            canvas.chartAnimated;
    property   int  chartAnimationEasing  ;
    property   int  chartAnimationDuration;

Canvas {
    id: canvas;

    // ///////////////////////////////////////////////////////////////
    property   var  chart;
    property   var  chartData;
    property   bool chartAnimated: false;
    property   int  chartAnimationProgress: 0;
    property alias chartAnimationEasing: chartAnimator.easing.type;
    property alias chartAnimationDuration: chartAnimator.duration;
    anchors.fill: parent

    onChartDataChanged: {
        Charts.startObject(canvas.chartData);
        requestPaint();
        canvas.chartAnimationEasing  =formChartBase.chartAnimationEasing  ;
        canvas.chartAnimationDuration=formChartBase.chartAnimationDuration;
    }

    // /////////////////////////////////////////////////////////////////
    // Callbacks
    // /////////////////////////////////////////////////////////////////

    onPaint: {
        var ctx = canvas.getContext("2d");
        /* Reset the canvas context to allow resize events to properly redraw
           the surface with an updated window size */
        ctx.reset()
        chart = new Charts.Chart(canvas, ctx).Configuracao(Charts.chartOBject);
        if(typeof(chart)==='object'){
            chart.init();
            if (chartAnimated)
                chartAnimator.start();
            else
                chartAnimationProgress = 100;
            chart.draw(chartAnimationProgress/100);
        }
    }

    onHeightChanged: {
        requestPaint();
    }

    onWidthChanged: {
        requestPaint();
    }

    onChartAnimationProgressChanged: {
        requestPaint();
    }

    // /////////////////////////////////////////////////////////////////
    // Functions
    // /////////////////////////////////////////////////////////////////

    function repaint() {
        chartAnimationProgress = 0;
        chartAnimator.start();
    }

    // /////////////////////////////////////////////////////////////////
    // Internals
    // /////////////////////////////////////////////////////////////////

    PropertyAnimation {
        id: chartAnimator;
        target: canvas;
        property: "chartAnimationProgress";
        to: 100;
        duration: 500;
        easing.type: Easing.InOutElastic;
    }
}
}
