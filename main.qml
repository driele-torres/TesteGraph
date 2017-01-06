import QtQuick 2.5
import QtQuick.Window 2.2
import QtQuick.Controls 2.0

ApplicationWindow {
    id: root
    width: 300
    height: 300
    visible: true
    x:0
    y:0

    title: qsTr("Teste  de Charts")

    QChart{
        anchors.fill: parent
        labelsAtBottom: false;
        chartData: chartDATA.toJson()
    }


//    Rectangle {
//        width: 300
//        height: 300

//        Rectangle {
//            id: button
//            color: "red"
//            height: 20
//            z:99999
//            anchors {
//                top: parent.top
//                left: parent.left
//                right: parent.right
//            }

//            Text {
//                anchors.centerIn: parent
//                text: "Click me to add rows"
//            }

//            MouseArea {
//                anchors.fill: parent
//                onClicked: {
//                    var row = { "id":listModel.count }
//                    listModel.insert(0, row)
//                }
//            }
//        }

//        ListView {
//            rotation: 360

//            anchors {
//                top: button.bottom
//                bottom: parent.bottom
//                left: parent.left
//                right: parent.right
//            }

//            model: ListModel {
//                id: listModel
//            }

//            delegate: Rectangle {
////                rotation: 180
//                width: ListView.view.width
//                height: 20
//                color: "green"

//                Text {
//                    anchors.centerIn: parent
//                    text: model.id
//                }
//            }
//        }
//    }
}
