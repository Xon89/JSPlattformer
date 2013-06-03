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
    gravity = 0.3;

canvas.width = width;
canvas.height = height;
var mouse = utils.captureMouse(canvas);
var planeposx = 800;
drawTankmov = "stand";


function update(){
    if (keys[32]) {
      //JUMP
      if(!player.jumping){
       player.jumping = true;
       player.velY = -player.speed*2;
      }
    }
    if (keys[39] || keys[68]) {
        // MOVE RIGHT
        if (player.velX < player.speed) {
            player.velX++;
        }
    }
    if (keys[37] || keys[65]) {
        // MOV LEFT
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }

    player.velX *= friction;

    player.velY += gravity;

    player.x += player.velX;
    player.y += player.velY;

    if (player.x >= width-player.width) {
        player.x = width-player.width;
    } else if (player.x <= 0) {
        player.x = 0;
    }

    if(player.y >= height-player.height){
        player.y = height - player.height;
        player.jumping = false;
    }
    
	var bgimg = new Image();
	bgimg.onload = function () {
		ctx.drawImage(bgimg, 0, 0, 800, 600);
	}
	bgimg.src = "img/bg.jpg";

	drawTank();
	
	var turretimg = new Image();
	turretimg.onload = function() {
			ctx.drawimage(turretimg, player.x-10, player.y, player.width, player.height);
	}
	
	turretimg.src ="img/Turret1.png";
	
	enemyPlane();
	
	shoot();
 	
 	requestAnimationFrame(update);
}

function enemyPlane(){
	if(planeposx>-150) {
		var planeimg = new Image();
		planeimg.onload = function () {
			ctx.drawImage(planeimg, planeposx, 20, 150, 120);
		}
		planeimg.src = "img/plane.png";
		
		planeposx = planeposx - 5;
		} else
		planeposx = 800;
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

document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
    if(keys[37] || keys[65])
    	drawTankmov = "left";
    if(keys[39] || keys[68])
    	drawTankmov = "right";
});

document.body.addEventListener("keyup", function(e) {
    if(keys[37] || keys[65] || keys[39] || keys[68])
    	tankinmovement = true;
    keys[e.keyCode] = false;
    if((!keys[37] && !keys[65] ) && (!keys[39] && !keys[68]))
    	tankinmovement = false;
    if(!tankinmovement)
    	drawTankmov = "stand";
    tankinmovement = null;
});

canvas.addEventListener("mousedown", function(e) {
	if(!stopshoot) {
		if(!shot1go || !shot2go || !shot3go || !shot4go)
			jBeep('sound/shot.wav');
		if(shot1go && shot2go && shot3go) 
			shot4init();
		if(shot1go && shot2go && !shot3go)
			shot3init();
		if(shot1go && !shot2go)
			shot2init();
		if(!shot1go)
			shot1init();
	}
}, false);

window.addEventListener("load",function(){
    update();
});