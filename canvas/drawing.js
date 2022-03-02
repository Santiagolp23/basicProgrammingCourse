var d = document.getElementById("drawing");
var canvas = d.getContext("2d");
var lines = 30;
var counter = 0;
var yi, xf;

function drawLine(color, xInitial, yInitial, xFinal, yFinal) {

    canvas.beginPath();
    canvas.strokeStyle = color;
    canvas.moveTo(xInitial, yInitial);
    canvas.lineTo(xFinal, yFinal);
    canvas.stroke();
    canvas.closePath();
}

for(counter; counter < lines; counter++) {
    yi = 10 * counter;
    xf = 10 * (counter + 1);
    drawLine("black", 0, yi, xf, 300);
    drawLine("black", yi, 0, 300, xf); //Clever trick to do the same at the opposite corner LOL
}

drawLine("red", 1, 1, 1, 299);
drawLine("red", 1, 299, 299, 299);
drawLine("red", 299, 1, 1, 1);
drawLine("red", 299, 299, 299, 1);