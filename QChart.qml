import QtQuick 2.7
import QtQuick.Layouts 1.1
//import QtQuick.Window 2.2
import "QChartBase.js" as Charts

Rectangle {
    id:formContainer
    anchors.fill: parent
    color: "#FFFFFF"

    property var chartData;
    property var labelsColors;
    property var labelsTexts;
    property bool labelsAtRight;
    property bool labelsAtBottom;
    property bool isRound;
    property int stringLength: 0
    property ListModel labelsModel: ListModel {}

    onLabelsAtRightChanged:{}
    onLabelsAtBottomChanged: {}
    Component.onCompleted: rightSide()

    onChartDataChanged: {
        Charts.startObject(chartData);
        isRound = Charts.isRoundChart();
        labelsColors= Charts.vetoresColors()
        labelsTexts=  Charts.vetoresLabels()
        creatingLabelsModel()
        formContainer.update()
    }

    function creatingLabelsModel(){
        var maiorString = 0;
        for(var i = 0; i< labelsColors.length; i++){
            labelsModel.append({text:labelsTexts[i],color:labelsColors[i]})
            maiorString = (labelsTexts[i].length > maiorString)?labelsTexts[i].length :maiorString;
        }
        stringLength =maiorString
        console.log(maiorString)
    }

    function rightSide(){
        chart_canvas.state = "movingLeft"
        labelsInfo.state = "labelMovingRight";
        labelsList.state= "listvertical"
    }

    function leftSide(){
        chart_canvas.state = "movingRight"
        labelsInfo.state = "labelMovingLeft";
        labelsList.state= "listvertical"
    }

    function downSide(){
        chart_canvas.state = "movingDown"
        labelsInfo.state = "labelMovingUp";
        labelsList.state= "listhorizontal"
    }

    function upSide(){
        chart_canvas.state = "movingUp"
        labelsInfo.state = "labelMovingDown";
        labelsList.state = "listhorizontal"
    }

    Rectangle{
        id: labelsInfo
        color:formContainer.color
        state:"labelMovingUp"
        states:[
            State {
                name: "labelMovingRight"
                AnchorChanges{
                    target: labelsInfo
                    anchors.verticalCenter: formContainer.verticalCenter
                    anchors.right : formContainer.right
                    anchors.left  : chart_canvas.right
                    anchors.horizontalCenter: undefined
                    anchors.bottom: undefined
                    anchors.top: undefined
                }
                PropertyChanges {
                    target: labelsInfo
                    width  : stringLength*15
                    height : formContainer.height
                }
            },State {
                name: "labelMovingLeft"
                AnchorChanges {
                    target: labelsInfo
                    anchors.verticalCenter: formContainer.verticalCenter
                    anchors.right : chart_canvas.left
                    anchors.left  : formContainer.left

                    anchors.horizontalCenter: undefined
                    anchors.bottom: undefined
                    anchors.top: undefined
                }
                PropertyChanges {
                    target: labelsInfo
                    width  : formContainer. width * 0.2
                    height : formContainer.height
                }
            },State {
                name: "labelMovingUp"
                AnchorChanges {
                    target: labelsInfo
                    anchors.verticalCenter: undefined
                    anchors.right : undefined
                    anchors.left  : undefined
                    anchors.horizontalCenter: formContainer.horizontalCenter
                    anchors.bottom: chart_canvas.top
                    anchors.top: formContainer.top
                }
                PropertyChanges {
                    target: labelsInfo
                    height : formContainer.height * 0.2
                    width  : formContainer.width * 0.9
                }
            },State {
                name: "labelMovingDown"
                AnchorChanges {
                    target: labelsInfo
                    anchors.verticalCenter: undefined
                    anchors.right : undefined
                    anchors.left  : undefined
                    anchors.horizontalCenter: formContainer.horizontalCenter
                    anchors.bottom: formContainer.bottom
                    anchors.top: chart_canvas.bottom
                }
                PropertyChanges {
                    target: labelsInfo
                    height : formContainer.height * 0.2
                    width  : formContainer.width * 0.9
                }
            },State{
                name:"normal"
                PropertyChanges {
                    target: labelsInfo
                    visible: false
                    height: 0
                    width : 0
                }
                PropertyChanges {
                    target: contentWrapVertical
                    visible: false
                    height: 0
                    width : 0
                }
            }]

        Rectangle{
            id: contentWrap
            color:formContainer.color
            state: "horizontalWrap"
            states:[
                State {
                    name: "horizontalWrap"
                    when: labelsInfo.state === "labelMovingDown" ||labelsInfo.state === "labelMovingUp"
                    AnchorChanges{
                        target: contentWrap
                        anchors.horizontalCenter: labelsInfo.horizontalCenter
                        anchors.verticalCenter: labelsInfo.verticalCenter
                    }
                    PropertyChanges {
                        target: contentWrap
                        width  : labelsInfo.height * 0.9
                        height : labelsInfo.width * 0.9
                    }
                },State {
                    name: "verticalWrap"
                    when: labelsInfo.state === "labelMovingLeft" ||labelsInfo.state === "labelMovingRight"
                    AnchorChanges {
                        target: contentWrap
                        anchors.verticalCenter: labelsInfo.verticalCenterx
                        anchors.horizontalCenter: undefined

                    }
                    PropertyChanges {
                        target: contentWrap
                        width  : labelsInfo.height * 0.9
                        height : labelsInfo.height * 0.9
                    }
                }]

            ListView{
                id: labelsList
                interactive:false
                model: labelsModel
                anchors.fill: parent
                clip: true
                spacing: 2
                state: "listhorizontal"
                width:stringLength*15*labelsModel.count

            states: [
                State {
                    name: "listhorizontal"
                    PropertyChanges {
                        target: labelsList
                        orientation: ListView.Horizontal
                    }
                },
                State {
                    name: "listvertical"
                    PropertyChanges {
                        target: labelsList
                        orientation: ListView.Vertical
                        width: labelsList.biggestItem
                    }
                }
            ]
            delegate:
                Rectangle{
                id:contentInner
                states: [
                    State {
                        name: "horizontal"
                        when: labelsList.state === "listhorizontal"
                        PropertyChanges {
                            target: contentInner
                            height: textLabel.height * 3
                            width:(labelsInfo.width/labelsModel.count)
                            anchors.leftMargin: contentInner.height * 0.3
                        }
                        AnchorChanges{
                            anchors.verticalCenter:  parent.verticalCenter
                        }
                    },
                    State {
                        name: "vertical"
                        when: labelsList.state === "listvertical"
                        PropertyChanges {
                            target: contentInner
                            height: textLabel.height * 3
                            anchors.leftMargin: contentInner.width * 0.3
                        }
                        AnchorChanges{
                            anchors.verticalCenter:  parent.verticalCenter
                        }
                    }
                ]

                Rectangle{
                    id: colorLabel
                    anchors.verticalCenter: contentInner.verticalCenter
                    height: textLabel.height * 1.6
                    width:  textLabel.height * 1.6
                    color: model.color
                }
                Text {
                    id: textLabel
                    leftPadding: contentInner.height * 0.3
                    anchors.verticalCenter: contentInner.verticalCenter
                    anchors.left: colorLabel.right
                    horizontalAlignment:Text.AlignVCenter
                    wrapMode : Text.Wrap
                    text: model.text
                }
            }
        }
    }
}

QChartBase{
    id: chart_canvas;
    chartData: formContainer.chartData;
    color: formContainer.color
    state: "movingDown"
    states:[
        State {
            name: "movingDown"
            AnchorChanges{
                target: chart_canvas
                anchors.horizontalCenter: formContainer.horizontalCenter
                anchors.bottom: formContainer.bottom
                anchors.top: undefined
                anchors.left: undefined
                anchors.right:undefined
            }
            PropertyChanges {
                target: chart_canvas
                height: formContainer.height *0.8
                width : formContainer.width
            }
        },State {
            name: "movingUp"
            AnchorChanges {
                target: chart_canvas
                anchors.horizontalCenter: formContainer.horizontalCenter
                anchors.bottom: undefined
                anchors.left: undefined
                anchors.right:undefined
                anchors.top: formContainer.top
            }
            PropertyChanges {
                target: chart_canvas
                height: formContainer.height *0.8
                width : formContainer.width
            }
        },State {
            name: "movingLeft"
            AnchorChanges {
                target: chart_canvas
                anchors.bottom: undefined
                anchors.right:undefined
                anchors.top: undefined
                anchors.verticalCenter: formContainer.verticalCenter
                anchors.left: formContainer.left
            }
            PropertyChanges {
                target: chart_canvas
                height: formContainer.height
                width : formContainer.width - stringLength*15
            }
        },State {
            name: "movingRight"
            AnchorChanges {
                target: chart_canvas
                anchors.bottom: undefined
                anchors.top: undefined
                anchors.left: undefined
                anchors.verticalCenter: formContainer.verticalCenter
                anchors.right: formContainer.right
            }
            PropertyChanges {
                target: chart_canvas
                height: formContainer.height
                width : formContainer.width *0.8
            }
        },State{
            name:"normal"
            PropertyChanges {
                target: chart_canvas
                anchors.centerIn: formContainer
                height: formContainer.height
                width : formContainer.width -stringLength*15
            }
        }]
    //chartAnimated: true;
    //chartAnimationEasing: Easing.OutInBounce;
    //chartAnimationDuration: 2000;
}
}
