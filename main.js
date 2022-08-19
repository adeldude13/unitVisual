canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth-25;
ctx.canvas.height = window.innerHeight-25;


const width = ctx.canvas.width;
const height = ctx.canvas.height;
const radius = 1;
const pixel_size = 200;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);
function drawCircle() {
	ctx.strokeStyle = "white";
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.arc(width / 2, height / 2, radius * pixel_size, 0, 2 * Math.PI);
	ctx.stroke();
		/* Y line */
	ctx.beginPath();
	ctx.strokeStyle = "blue";
	ctx.moveTo(width/2, (height/2)-radius*pixel_size);
	ctx.lineTo(width/2, (height/2)+radius*pixel_size);
	ctx.stroke();
		/* X line */
	ctx.beginPath();
	ctx.strokeStyle = "red";
	ctx.moveTo((width/2)-radius*pixel_size, (height/2));
	ctx.lineTo((width/2)+radius*pixel_size, (height/2));
	ctx.stroke();
	ctx.fillStyle = "white";
	ctx.fillRect(width/2, height/2, 1, 1);
}

function drawLine(deg) {
	rad = deg * Math.PI / 180;
	x = Math.cos(rad)*pixel_size;
	y = -Math.sin(rad)*pixel_size;
	console.log((x), " ", (y));
	ctx.strokeStyle = "green";
	ctx.beginPath();
	ctx.moveTo((width/2), height/2);
	ctx.lineTo((width/2) + x, (height/2)+y);
	ctx.stroke();
}

drawCircle();
drawLine(45);
