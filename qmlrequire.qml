import QtQuick 2.0

import "main.js" as M

Rectangle {
    width: 360
    height: 360
    Text {
        anchors.centerIn: parent
        text: "I'm just a container for javascript :( Look at your console."
    }
    MouseArea {
        anchors.fill: parent
        onClicked: {
            Qt.quit();
        }
    }
}

