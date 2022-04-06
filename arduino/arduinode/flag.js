var j = require("johnny-five");
var board = new j.Board();
var servo, red, cell;
var turn = false;

board.on("ready", on);

function on() {
    var configurations = {pin:"A0", freq: 50}
    cell = new j.Sensor(configurations); 
    red = new j.Led(13);

    servo = new j.Servo(9);
    servo.to(0);

    wave();
}
function wave() {
    light = (cell.value);
    if (light > 480) {
        if (turn) {
        servo.to(90)
        red.on();
        turn = false;
        } else {
        servo.to(80)
        turn = true;
    }
    } else {
    servo.to(5);
    red.off();
    }

    setTimeout(wave, 250);
}
