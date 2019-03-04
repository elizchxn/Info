var canvas = document.querySelector("canvas");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c = canvas.getContext("2d");


c.fillStyle = "#663300";
c.fillRect(244,250,115,70);

c.fillStyle = "#ff4d4d";
c.beginPath();
c.arc(300,100,100,0,Math.PI*2);
c.fill();

c.beginPath();
c.moveTo(200,100);
c.lineTo(400,100);
c.stroke();
c.beginPath();
c.moveTo(200,100);
c.lineTo(275,250);
c.stroke();
c.beginPath();
c.moveTo(300,100);
c.lineTo(300,250);
c.stroke();
c.beginPath();
c.moveTo(400,100);
c.lineTo(330,250);
c.stroke();

c.beginPath();
c.moveTo(300,100);
c.lineTo(300,0);
c.stroke();


console.log(canvas);