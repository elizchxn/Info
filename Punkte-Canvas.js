var canvas = document.querySelector("canvas");

var width = window.innerWidth;
var height = window.innerHeight;

canvas.width=width;
canvas.height=height;

var c = canvas.getContext("2d");

function drawRandomCircle() {
//Zufälliger Punkt auf der Zeichenfläche(Breite Höhe abhängig von Browserfenster

var x = Math.random()*width;
var y = Math.random()*height;

//Breite vom Kreis zufällig im Wertebereich zw. 20 - 50

var radius = 20 + Math.random()*30;

//Zufällige Farbe

var r = Math.random()*255;
var g = Math.random()*255;
var b = Math.random()*255;
c.strokeStyle = "rgb("+r+" , "+g+" , "+b+")";
c.stroke();

var r = Math.random()*255;
var g = Math.random()*255;
var b = Math.random()*255;
c.fillStyle = "rgb("+r+" , "+g+" , "+b+")";
c.lineWidth = 5;

c.beginPath();
c.arc(x,y,radius,0,Math.PI*2);
c.fill();
}
//ruft eine Funktion immer wieder auf (Interval in Millisekunden)
setInterval(drawRandomCircle, 1);