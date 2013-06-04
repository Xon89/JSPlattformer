var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 800,
    height = 600,
    player = {
      x : width/2,
      y : height - 5,
      width : 60,
      height : 40,
      speed: 3,
      velX: 0,
      velY: 0,
      jumping: false
    },
    keys = [],
    friction = 0.8,
    shotspeed = 10,
    shot1go = null,
    shot2go = null,
    shot3go = null,
    shot4go = null,
    stopshoot = false,
    gravity = 0.3,
	bg1posx = 0
	bg2posx = width;

canvas.width = width;
canvas.height = height;
var mouse = utils.captureMouse(canvas);
var planeposx = 800;
drawTankmov = "stand";

function background(){
		var bg1img = new Image();
	bg1img.onload = function () {
		ctx.drawImage(bg1img, bg1posx, 0, 800, 600);
	}
	bg1img.src = "img/bg.jpg";
	
	var bg2img = new Image();
	bg2img.onload = function () {
		ctx.drawImage(bg2img, bg2posx, 0, 800, 600);
	}
	bg2img.src = "img/bg.jpg";

}

var turret = new Segment(100,20);

var boxes = [];
    
boxes.push({
    x: 0,
    y: height-10,
    width: 60,
    height: 80
});
boxes.push({
    x: 0,
    y: height - 2,
    width: width,
    height: 50
});
boxes.push({
    x: width - 10,
    y: 0,
    width: 50,
    height: height
});
 
boxes.push({
    x: 120,
    y: 10,
    width: 80,
    height: 80
});
boxes.push({
    x: 170,
    y: 50,
    width: 80,
    height: 80
});
boxes.push({
    x: 220,
    y: 100,
    width: 80,
    height: 80
});
boxes.push({
    x: 400,
    y: 300,
    width: 40,
    height: 40
});
