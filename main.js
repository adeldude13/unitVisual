canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth-25;
ctx.canvas.height = window.innerHeight-25;

const width = ctx.canvas.width;
const height = ctx.canvas.height;
const size = (width + height) / 6.5;
const radius = 1;

function clear() {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, width, height);
}

function drawCircle() {
	ctx.beginPath();
	ctx.arc(toCanvasX(0), toCanvasY(0), radius*size, 0, 2 * Math.PI);
	ctx.stroke();
}

function drawLines() {
	var temp = ctx.strokeStyle;
	var size_t = size - 5;
	ctx.beginPath();
	ctx.strokeStyle = "blue";
	ctx.moveTo(toCanvasX(0), toCanvasY(0-radius* size_t ));
	ctx.lineTo(toCanvasX(0), toCanvasY(0+radius* size_t ));
	ctx.stroke();
	ctx.beginPath();
	ctx.strokeStyle = "red";
	ctx.moveTo(toCanvasX(0-radius*size_t), toCanvasY(0));
	ctx.lineTo(toCanvasX(0+radius*size_t), toCanvasY(0));
	ctx.stroke();
}

function drawLineByAngel(angel) {
	var x = Math.cos(angel) * (size - 5);
	var y = Math.sin(angel) * (size - 5);
	
	ctx.beginPath();
	ctx.strokeStyle = "green";
	ctx.moveTo(toCanvasX(0), toCanvasY(0));
	ctx.lineTo(toCanvasX(x), toCanvasY(y));
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "purple";
	ctx.moveTo(toCanvasX(0), toCanvasY(0));
	ctx.lineTo(toCanvasX(x), toCanvasY(0));
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "yellow";
	ctx.moveTo(toCanvasX(0), toCanvasY(y));
	ctx.lineTo(toCanvasX(0), toCanvasY(0));
	ctx.stroke();
}

function toCanvasX(x) {
	var sx = (width/2) + x;
	return sx;
}

function toCanvasY(y) {
	var sy = (height/2) - y;
	return sy;
}

function toWorldX(x) {
	var cx = x - (width/2);
	return cx;
}

function toWorldY(y) {
	var cy = -y + (height/2);
	return cy;
}

window.addEventListener("mousemove", function(event) {
	var x = toWorldX(event.clientX);
	var y = toWorldY(event.clientY);
	var angel = Math.atan2(y, x);
	main();
	drawLineByAngel(angel);
})

function main() {
	clear();
	ctx.strokeStyle = "white";
	ctx.lineWidth = 8;
	drawCircle();
	drawLines();
	ctx.fillStyle = "white";
	ctx.fillRect(toCanvasX(0-4), toCanvasY(0+4), 8, 8);
}

main();
