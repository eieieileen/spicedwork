console.log("Sanitycheck");

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

//head
ctx.beginPath();
ctx.arc(250, 100, 60, 0, Math.PI * 2);
ctx.strokeStyle = "#522B29";
ctx.stroke();

//body
ctx.fillRect(250, 160, 1, 150);

//left arm
ctx.beginPath();
ctx.moveTo(150, 150);
ctx.lineWidth = 1;

ctx.lineTo(250, 200);

ctx.stroke();
ctx.closePath();

//right arm
ctx.beginPath();
ctx.moveTo(350, 150);
ctx.lineWidth = 1;

ctx.lineTo(250, 200);
ctx.stroke();
ctx.closePath();

//left leg
ctx.beginPath();
ctx.moveTo(250, 310);
ctx.lineWidth = 1;

ctx.lineTo(150, 400);
ctx.stroke();
ctx.closePath();

// right leg
ctx.beginPath();
ctx.moveTo(250, 310);
ctx.lineWidth = 1;

ctx.lineTo(350, 400);
ctx.stroke();
ctx.closePath();