import QtQuick 2.7
import "QChartBase.js" as Charts

Rectangle {
    id:formContainer
    anchors.fill: parent
    color: "#ffffff"

    property  var chartData;
    property  var labelsColors;
    property  var labelsTexts;
    property  bool labelsAtRight;
    property  bool labelsAtBottom;
    property ListModel labelsModel: ListModel {}

    onChartDataChanged: {
        Charts.startObject(chartData);
        labelsColors= Charts.vetoresColors()
        labelsTexts=  Charts.vetoresLabels()
        creatingLabelsModel()
        labelsInfo.movingToRIght()
        formContainer.update()
    }

    function creatingLabelsModel(){
        for(var i = 0; i< labelsColors.length; i++){
            labelsModel.append({text:labelsTexts[i],color:labelsColors[i]})
        }
    }

    onLabelsAtRightChanged:{
        labelsInfo.movingToRIght()
    }

    onLabelsAtBottomChanged: {

    }

    Rectangle{
        id: labelsInfo
        width  : parent.width * 0.3
        height : formContainer.height
        visible: Charts.isRoundChart()
        anchors.verticalCenter: formContainer.verticalCenter
        anchors.right : chart_canvas.left
        anchors.left  : formContainer.left

        function movingToRIght(){

            if (labelsAtRight){
                anchors.right = formContainer.right
                anchors.left  = chart_canvas.right
                chart_canvas.movingLeft()
            }else{
                anchors.right = chart_canvas.left
                anchors.left  = formContainer.left
                chart_canvas.movingRight()
            }
        }

//        function movingToRIght(){

//            if (labelsAtBottom){
//                width  = formContainer.width
//                height = parent.height * 0.3
//                anchors.horizontalCenter= formContainer.horizontalCenter
//                anchors.right = formContainer.right
//                anchors.left  = formContainer.left
//                anchors.top = formContainer.top
//                anchors.bottom  = chart_canvas.top
//                contentWrapVertical.movingDirection()

//            }else{

//            }
//        }

        Rectangle{
            id:contentWrapVertical
            height: parent.height/labelsModel.count
            width:parent.width
            anchors.verticalCenter:parent.verticalCenter

            function movingDirection(){
                width  = parent.width
                height =  parent.height
                anchors.verticalCenter= parent.verticalCenter
                anchors.horizontalCenter = parent.horizontalCenter
            }
            ListView{
                id: labelsList
                model: labelsModel
                anchors.fill: parent
                orientation: ListView.Vertical
                delegate:
                    Rectangle{
                    id: labelsContainer
                    // anchors.horizontalCenter: anchors.horizontalCenter
                    height: textLabel.height * 2 //labelsInfo.height * 0.8
                    width: labelsInfo.height/labelsModel.count
                    Rectangle{
                        id:contentWrap
                        //anchors.horizontalCenter: labelsContainer.horizontalCenter
                        //anchors.verticalCenter:   labelsContainer.verticalCenter
                        height: textLabel.height * 2
                        width: textLabel.height  * 1.2 + textLabel.width
                        Rectangle{
                            id: colorLabel
                            anchors.leftMargin: 5
                            anchors.verticalCenter: parent.verticalCenter
                            height: textLabel.height * 1.2
                            width:  textLabel.height *1.2
                            color: model.color
                        }
                        Text {
                            id: textLabel
                            leftPadding: contentWrap.height * 0.3
                            anchors.verticalCenter: parent.verticalCenter
                            anchors.left: colorLabel.right
                            horizontalAlignment:Text.AlignVCenter
                            width : (labelsInfo.width/model.count) * 0.8
                            wrapMode : Text.Wrap
                            text: model.text
                        }
                    }
                }
            }
        }
    }
//(Charts.isRoundChart())? parent.height *0.85 : parent.height?
    QChartBase{
        id: chart_canvas;
        height:parent.height
        width : parent.width * 0.7
        anchors.bottom: parent.bottom
        chartData: formContainer.chartData;

        function movingRight(){
            anchors.right = formContainer.right
//            anchors.left = undefined
        }
        function movingLeft(){
            anchors.left= formContainer.left
//            anchors.left = undefined
        }
        //        chartAnimated: true;
        //        chartAnimationEasing: Easing.OutInBounce;
        //        chartAnimationDuration: 2000;
    }
}
