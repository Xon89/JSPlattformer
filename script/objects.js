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
      grounded: false,
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
	bg1posx = 0,
	bg2posx = width;
	bg3posx = 0;
	bg4posx = width;
	

    drawTankmov = "stand";
    var turret = new Segment(100,20);
    var playershots=[];
canvas.width = width;
canvas.height = height;
var mouse = utils.captureMouse(canvas);
var planeposx = 800;
var planeposy = 35;

function startscreen() {
	var startimg = new Image();
	startimg.onload = function () {
		ctx.drawImage(startimg, 0, 0, 800, 600);
	}
	startimg.src = "img/start.png";
}

function background(){
	var bg1img = new Image();
	bg1img.onload = function () {
		ctx.drawImage(bg1img, bg1posx, 0, 800, 600);
	}
	bg1img.src = "img/bg2.png";
	
	var bg2img = new Image();
	bg2img.onload = function () {
		ctx.drawImage(bg2img, bg2posx, 0, 800, 600);
	}
	bg2img.src = "img/bg2.png";
	
	var bg3img = new Image();
	bg3img.onload = function () {
		ctx.drawImage(bg1img, bg1posx, 0, 800, 600);
	}
	bg3img.src = "img/bg3.png";
	
	var bg4img = new Image();
	bg4img.onload = function () {
		ctx.drawImage(bg2img, bg2posx, 0, 800, 600);
	}
	bg4img.src = "img/bg3.png";

}
function drawPlayer(){
		drawTankPlayer();
		drawTurretPlayer();
}	
function drawEnemy(){
	enemyPlane();
}
function drawTurretPlayer(){
	turret.x = player.x + 30;
	turret.y = player.y + 16;
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

function drawTankPlayer() {
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
function enemyPlane(){
	if(planeposx>-1000) {
		var planeimg = new Image();
		planeimg.onload = function () {
			ctx.drawImage(planeimg, planeposx, planeposy, 53, 33);
		}
		planeimg.src = "img/Planebody.png";
		
		planeposx = planeposx - 5;
		drawTurret(planeposx+12 , planeposy+17)

	} else
		planeposx = 800;
}
function drawTurret(parentx, parenty){
	

		planeTurX = parentx;
		planeTurY = parenty;
		planeTurRot = Math.atan2 (turret.y - planeTurY, turret.x - planeTurX);
		var planeTurImg = new Image();
		planeTurImg.onload = function() {
			ctx.save();
		    ctx.translate(planeTurX,planeTurY);
		    ctx.rotate(planeTurRot);
		    ctx.drawImage(planeTurImg,-8, -8,37,16);
			ctx.restore();
		}
		planeTurImg.src ="img/Turret2.png";
}
function drawBoxes(){
//draw boxes and Fill
	var img = new Image();
	img.src="img/box.png";
	var pat=ctx.createPattern(img,"repeat");
	ctx.fillStyle=pat;
	ctx.beginPath();
	
	for (var i = 0; i < boxes.length; i++) {
    ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
	}
	ctx.fill();
}
var boxes = [];
boxes.push({
    x: 0,
    y: height - 2,
    width: width,
    height: 50
});    
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
    height: 10
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
    x: 600,
    y: 550,
    width: 40,
    height: 40
});
