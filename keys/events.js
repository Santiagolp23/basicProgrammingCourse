var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
};

document.addEventListener("keydown", drawKeyPress);
document.addEventListener("mousedown", drawMousePress);
document.addEventListener("mousemove", drawMouseMove);
document.addEventListener("mouseup", drawMouseUp);


var box = document.getElementById("drawingArea");
var paper = box.getContext("2d");
var x = 150;
var y = 150;
var mousePressed = false;

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
    var movement = 3;
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

function drawMousePress(event) {
    drawPressed = true;
    xPressed = event.layerX;
    yPressed = event.layerY;
}

function drawMouseMove(event) {
    do {
        x = event.layerX;
        y = event.layerY;
        drawLine("red", xPressed, yPressed, x, y, paper);
    }
    while(drawMousePress == true);
}

function drawMouseUp(event){
    drawPressed = false;
}