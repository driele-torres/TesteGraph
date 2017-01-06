// /////////////////////////////////////////////////////////////////
// Polar Chart Data Sample
// /////////////////////////////////////////////////////////////////

var ChartPolarData = {
    labels:  ["January","February","March","April","May","June"],
    datasets:[[30,90,24,58,82,8]],
    colors:[{
                fillColor: "#D97041",
              strokeColor: null,
               pointColor: null,
            pointStrokeColor: null
            },
            {
                fillColor: "#C7604C",
              strokeColor: null,
               pointColor: null,
            pointStrokeColor: null
            },
            {
                fillColor: "#21323D",
              strokeColor: null,
               pointColor: null,
            pointStrokeColor: null
            },
            {
                fillColor: "#9D9B7F",
              strokeColor: null,
               pointColor: null,
            pointStrokeColor: null
            },
            {
                fillColor: "#7D4F6D",
              strokeColor: null,
               pointColor: null,
            pointStrokeColor: null
            },
            {
                fillColor: "#584A5E",
              strokeColor: null,
               pointColor: null,
            pointStrokeColor: null
            }]
}


// /////////////////////////////////////////////////////////////////
// Pie Chart Data Sample
// /////////////////////////////////////////////////////////////////

var ChartPieData = {
    labels:  ["Inicio","Meio","Fim"],
    datasets:[[30,50,100]],
    colors:[{
                fillColor: "#F38630",
              strokeColor: null,
               pointColor: null,
            pointStrokeColor: null
            },
            {
                fillColor: "#E0E4CC",
              strokeColor: null,
               pointColor: null,
            pointStrokeColor: null
            },
            {
                fillColor: "#69D2E7",
              strokeColor: null,
               pointColor: null,
            pointStrokeColor: null
            }]
}

// /////////////////////////////////////////////////////////////////
// Doughnut Chart Data Sample
// /////////////////////////////////////////////////////////////////

var ChartDoughnutData = {
    labels:  ["Inicio","Meio","Fim", "Mais Um", "Mais esse"],
    datasets:[[30,50,100,40, 120]],
    colors:[{
            fillColor: "#F7464A",
          strokeColor: null,
           pointColor: null,
        pointStrokeColor: null
        },
        {
            fillColor: "#E2EAE9",
          strokeColor: null,
           pointColor: null,
        pointStrokeColor: null
        },
        {
            fillColor: "#D4CCC5",
          strokeColor: null,
           pointColor: null,
        pointStrokeColor: null
        },
        {
            fillColor: "#949FB1",
          strokeColor: null,
           pointColor: null,
        pointStrokeColor: null
        },
        {
            fillColor: "#4D5360",
          strokeColor: null,
           pointColor: null,
        pointStrokeColor: null
        }]
}

// /////////////////////////////////////////////////////////////////
// Radar Chart Data Sample
// /////////////////////////////////////////////////////////////////

var ChartRadarData = {
      labels: ["Eating","Drinking","Sleeping",
        "Designing","Coding","Partying","Running"],
    datasets:[[65,59,90,81,56,55,40],[28,48,40,19]],
      colors:[{
                       fillColor: "rgba(220,220,220,0.5)",
                     strokeColor: "rgba(220,220,220,1)",
                      pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff"
              },
              {
                       fillColor: "rgba(151,187,205,0.5)",
                     strokeColor: "rgba(151,187,205,1)",
                      pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff"
               }]
}

// /////////////////////////////////////////////////////////////////
// Bar Chart Data Sample
// /////////////////////////////////////////////////////////////////

var ChartBarData = {
      labels: ["January","February","March","April","May","June","July"],
    datasets: [[65,59,90,81,56,55,40], [28,48,40,19,96,27,100]],
      colors:[{
                  fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)"
              },
              {
                  fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
              }]
}



// /////////////////////////////////////////////////////////////////
// Line Chart Data Sample
// /////////////////////////////////////////////////////////////////

//var ChartLineData = {
//      labels: ["January","February","March","April","May","June","July"],
//    datasets: [[65,59,90,81,56,55,40],[28,48,40,19,96,27,100]],
//      colors:[{
//                      fillColor: "rgba(220,220,220,0.5)",
//                    strokeColor: "rgba(220,220,220,1)",
//                     pointColor: "rgba(220,220,220,1)",
//               pointStrokeColor: "#ffffff"
//              },
//              {
//                      fillColor: "rgba(151,187,205,0.5)",
//                    strokeColor: "rgba(151,187,205,1)",
//                     pointColor: "rgba(151,187,205,1)",
//               pointStrokeColor: "#ffffff",
//               }]
//}

var ChartLineData = {
    "chartDatasets":[
       {
          "dataset":[
             {
                "colors":{
                   "fillColor":"rgba(151,187,205,0.5)",
                   "pointColor":"rgba(151,187,205,1)",
                   "pointStrokeColor":"#fff",
                   "strokeColor":"rgba(151,187,205,1)"
                },
                "data":[
                   89,
                   13
                ],
                "labels":[
                   "label1",
                   "label4"
                ],
                "subject":"Numeros"
             }
          ],
          "title":"Exemplo"
       }
    ],
    "chartProperties":{
       "animateRotate":true,
       "animateScale":false,
       "animation":true,
       "animationEasing":"easeOutBounce",
       "animationSteps":100,
       "bezierCurve":true,
       "onAnimationComplete":"null",
       "percentageInnerCutout":50.0,
       "scaleBackdropColor":"rgba(255,255,255,0.75)",
       "scaleBackdropPaddingX":2.0,
       "scaleBackdropPaddingY":2.0,
       "scaleFontColor":"#666",
       "scaleFontFamily":"'Arial'",
       "scaleFontSize":12.0,
       "scaleFontStyle":"normal",
       "scaleLabel":"<%=value%>",
       "scaleLineColor":"rgba(0,0,0,.1)",
       "scaleLineWidth":1.0,
       "scaleOverlay":true,
       "scaleOverride":false,
       "scaleShowLabelBackdrop":true,
       "scaleShowLabels":true,
       "scaleShowLine":true,
       "scaleStartValue":0.0,
       "scaleStepWidth":0.0,
       "scaleSteps":0.0,
       "segmentShowStroke":true,
       "segmentStrokeColor":"#fff",
       "segmentStrokeWidth":2
    },
    "chartTitle":"Grafico",
    "chartType":0
 }

//var ChartPolarData = [{
//    value: 30,
//    color: "#D97041"
// }, {
//    value: 90,
//    color: "#C7604C"
// }, {
//    value: 24,
//    color: "#21323D"
// }, {
//    value: 58,
//    color: "#9D9B7F"
// }, {
//    value: 82,
//    color: "#7D4F6D"
// }, {
//    value: 8,
//    color: "#584A5E"
//}]

//var ChartPieData =
//[{
//    value: 30,
//    color: "#F38630"
// },
// {
//    value: 50,
//    color: "#E0E4CC"
// },
// {
//    value: 100,
//    color: "#69D2E7"
// }]

//var ChartDoughnutData = [{
//    value: 30,
//    color: "#F7464A"

// }, {
//    value: 50,
//    color: "#E2EAE9"
// }, {
//    value: 100,
//    color: "#D4CCC5"
// }, {
//    value: 40,
//    color: "#949FB1"
// }, {
//    value: 120,
//    color: "#4D5360"
//}]

//var chartLine =
//        {
//    labels: [    "Red", "Orange", "Yellow", "Green", "Blue"],
//    datasets:[{
//            data: [ 898, 8787, 697, 354, 782],
//            label: 'My dataset'
//        }]
//}

//var chartOptions = {
//    responsive: true,
//    legend: {
//        position: 'right',
//    },
//    title: {
//        display: true,
//        text: 'Chart.js Polar Area Chart'
//    },
//    scale: {
//      ticks: {
//        beginAtZero: true
//      },
//      reverse: false
//    },
//    animation: {
//        animateRotate: false,
//        animateScale: true
//    }
//}
var testeR =
{
"nome": "deucerto",
"nome composto": "deuerrado"
}
ListView{
            id: listView
            property int tipoUser: 1//REPRESENTANTE
            anchors.topMargin:  forms.marginDefault() *4
            anchors.top: lineMatricula.bottom
            anchors.horizontalCenter: parent.horizontalCenter

            height: forms.getHeightForLine(2)
            width: parent.width * 0.24

            highlight: Rectangle {
                width: listView.cellWidth;
                height:listView.cellHeight;
                visible: listView.currentIndex>=0;
                color:colors.backgroundColorTabSelected()
            }

            currentIndex: listView.tipoUser

            orientation: ListView.HorizontalFlick

            highlightFollowsCurrentItem: true

            highlightRangeMode: ListView.NoHighlightRange//ListView.ApplyRange

            model: optionModel

            cellWidth: width
            cellHeight: height

            visible: false

            delegate: GMRectangleCell{
                id: delegateItem
                width: listView.cellWidth
                height: listView.cellHeight
                color: colors.colorTransparent()
                selected:false

                MouseArea{
                    anchors.fill: parent
                    onClicked: {
                        delegateItem.selected = listView.currentIndex = model.index
                        listView.tipoUser = model.tipo
                        qmlSessionLogin.setTipoUser(model.tipo)
                    }
                    GMRectangle{
                        anchors.fill: parent
                        color: parent.parent.color
                        anchors.margins: forms.marginDefault()
                        GMLabel{
                            anchors.fill: parent
                            text: model.descDomain
                            horizontalAlignment: Text.AlignHCenter
                            verticalAlignment: Text.AlignVCenter
                            font.pointSize: func.fontPointMinimum()
                            color: delegateItem.ListView.isCurrentItem ?colors.foreColorLabelSelected() : colors.foreColorLabel()
                            //font.bold: true
                        }
                    }
                }
            }
        }
