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
        labelsAtRight: false;
        chartData: chartDATA.toJson()
    }
}
