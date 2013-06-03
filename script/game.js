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

	var tankimg = new Image();
	tankimg.onload = function () {
		ctx.drawImage(tankimg, player.x, player.y, player.width, player.height);
	}
	var turretimg = new Image();
	turretimg.onload = function() {
			ctx.drawimage(turretimg, player.x-10, player.y, player.width, player.height);
	}
	tankimg.src = "img/tankbody.png";
	turretimg.src ="img/Turret1.png"
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
	}
	else
		planeposx = 800;
}

document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
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