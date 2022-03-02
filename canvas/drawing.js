var d = document.getElementById("drawing");
var canvas = d.getContext("2d");
var width = d.width;

var numberLinesUser = document.getElementById("userInputLines");
var button = document.getElementById("userButton");
button.addEventListener("click", drawingByCLick);


function drawLine(color, xInitial, yInitial, xFinal, yFinal) {

    canvas.beginPath();
    canvas.strokeStyle = color;
    canvas.moveTo(xInitial, yInitial);
    canvas.lineTo(xFinal, yFinal);
    canvas.stroke();
    canvas.closePath();
}

function drawingByCLick() {
    var lines = parseInt(numberLinesUser.value);
    var counter = 0;
    var space = width / lines;


    for(counter; counter < lines; counter++) {
        yi = space * counter;
        xf = space * (counter + 1);
        drawLine("black", 0, yi, xf, 300);
        drawLine("black", yi, 0, 300, xf); //Clever trick to do the same at the opposite corner LOL
    }

    drawLine("red", 1, 1, 1, (width - 1));
    drawLine("red", 1, (width - 1), (width - 1), (width - 1));
    drawLine("red", 299, (width - 1), (width - 1), (width - 1));
    drawLine("red", (width - 1), (width - 1), (width - 1), 1);

}