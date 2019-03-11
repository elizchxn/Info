var canvas = document.querySelector("canvas");

var width = window.innerWidth;
var height = window.innerHeight;

canvas.width=width;
canvas.height=height;

var c = canvas.getContext("2d");

var lastX = Math.random()*width;;
var lastY = Math.random()*height;

function drawRandomLine() {
c.lineWidth = 3;

var x = Math.random()*width;
var y = Math.random()*height;

c.beginPath();
c.moveTo(lastX,lastY);
c.lineTo(x,y);

var r = Math.random()*255;
var g = Math.random()*255;
var b = Math.random()*255;
c.strokeStyle = "rgb("+r+" , "+g+" , "+b+")";
c.stroke();

lastX = x;
lastY = y;
}
setInterval(drawRandomLine, 50);