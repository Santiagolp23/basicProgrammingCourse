var jf = require("johnny-five");
var board = new jf.Board();

board.on("ready", turnOn);

function turnOn() {
    var red = jf.Led(13);
    var yellow = jf.Led(9);
    red.blink(200);
    yellow.blink(700);
}
