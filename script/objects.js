var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 800,
    height = 600,
    keys = [],
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
    drawTankmov = "stand";
    var turret = new Segment(100,20);
canvas.width = width;
canvas.height = height;
var mouse = utils.captureMouse(canvas);
var planeposx = 800;


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
function drawTurret(){
		turret.x = player.x + 30;
	turret.y = player.y + 15;
	turret.rotation = Math.atan2 (mouse.y - turret.y, mouse.x - turret.x);
	var turretimg = new Image();
	turretimg.onload = function() {
	ctx.save();
    ctx.translate(turret.x,turret.y);
    ctx.rotate(turret.rotation);
    ctx.drawImage(turretimg,-8, -8,37,16);
	ctx.restore();
	}
	turretimg.src ="img/Turret1.png";
}
function drawTank() {
	if( (drawTankmov == "stand") && !player.jumping) {
		var tankstandimg = new Image();
		tankstandimg.onload = function () {
			ctx.drawImage(tankstandimg, player.x, player.y, player.width, player.height);
		}
		tankstandimg.src = "img/Tankbody.png";
	} else if( (drawTankmov == "left") && !player.jumping) {
		var tankleftimg = new Image();
		tankleftimg.onload = function () {
			ctx.drawImage(tankleftimg, player.x, player.y, player.width, player.height);
		}
		tankleftimg.src = "img/Tankleft.png";
	} else if( (drawTankmov == "right") && !player.jumping) {
		var tankrightimg = new Image();
		tankrightimg.onload = function () {
			ctx.drawImage(tankrightimg, player.x, player.y, player.width, player.height);
		}
		tankrightimg.src = "img/Tankright.png";
	} else if( (drawTankmov == "stand") && player.jumping){
		var tankupimg = new Image();
		tankupimg.onload = function () {
			ctx.drawImage(tankupimg, player.x, player.y, player.width, player.height);
		}
		tankupimg.src = "img/Tankup.png";
	} else if( (drawTankmov == "left") && player.jumping){
		var tankupleftimg = new Image();
		tankupleftimg.onload = function () {
			ctx.drawImage(tankupleftimg, player.x, player.y, player.width, player.height);
		}
		tankupleftimg.src = "img/Tankupleft.png";
	} else if( (drawTankmov == "right") && player.jumping){
		var tankuprightimg = new Image();
		tankuprightimg.onload = function () {
			ctx.drawImage(tankuprightimg, player.x, player.y, player.width, player.height);
		}
		tankuprightimg.src = "img/Tankupright.png";
	}
}


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
