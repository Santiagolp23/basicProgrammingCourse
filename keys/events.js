var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
};

document.addEventListener("keyup", drawKeyPress);
var box = document.getElementById("drawingArea");
var paper = box.getContext("2d");
var x = 150;
var y = 150;

drawLine("red", 149, 149, 151, 151, paper);

function drawLine(color, xInitial, yInitial, xFinal, yFinal, paper) {

    paper.beginPath();
    paper.strokeStyle = color;
    paper.lineWidth = 3;
    paper.moveTo(xInitial, yInitial);
    paper.lineTo(xFinal, yFinal);
    paper.stroke();
    paper.closePath();
}

function drawKeyPress(event) {
    var consColor = "blue";
    var movement = 10;
    switch(event.keyCode) {
        case keys.UP:
            drawLine(consColor, x, y, x, y - movement, paper);
            y = y - movement;
        break;

        case keys.DOWN:
            drawLine(consColor, x, y, x, y + movement, paper);
            y = y + movement;
        break;

        case keys.LEFT:
            drawLine(consColor, x, y, x - movement, y, paper);
            x = x - movement;
        break;

        case keys.RIGHT:
            drawLine(consColor, x, y, x + movement, y, paper);
            x = x + movement;
        break;
    }
}