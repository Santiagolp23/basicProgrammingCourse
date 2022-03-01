var d = document.getElementById("drawing");
var canvas = d.getContext("2d");
canvas.beginPath();
canvas.strokeStyle = "red";
canvas.moveTo(100, 100);
canvas.lineTo(200, 200);
canvas.stroke();
canvas.closePath();