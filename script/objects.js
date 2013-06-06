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
      active: true,
      jumping: false
    },
    friction = 0.8,
    shotspeed = 10,
    gravity = 0.3,
	bg1posx = 0,
	bg2posx = width;
	bg3posx = 0;
	bg4posx = width;
	planeactive=1;
	scrolling =0;
    drawTankmov = "stand";
    var turret = new Segment(100,20);
    var playershots=[];
    var enemyshots=[];
    timerplaneshots =0;
	enemyplanes ={
		x: 800,
		y: 35,
		width: 53,
		height: 33,
		mov: -1,
		active : 1,
		timer : 500,
		shoottimer : 100,
	}
    canvas.width = 800;
	canvas.height = 600;
	var mouse = utils.captureMouse(canvas);


function startscreen() {
	var startimg = new Image();
	startimg.src = "img/start.png";
		ctx.drawImage(startimg, 0, 0, 800, 600);


}

function background(){
	var bg1img = new Image();
	bg1img.src = "img/bg2.png";
		ctx.drawImage(bg1img, bg1posx, 0, 801, 600);

	var bg2img = new Image();
		bg2img.src = "img/bg2.png";
		ctx.drawImage(bg2img, bg2posx, 0, 801, 600);

	var bg3img = new Image();
	bg3img.src = "img/bg3.png";
		ctx.drawImage(bg1img, bg1posx, 0, 801, 600);

	var bg4img = new Image();
	bg4img.src = "img/bg3.png";
		ctx.drawImage(bg2img, bg2posx, 0, 801, 600);
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
	turretimg.src ="img/Turret1.png";
	ctx.save();
    ctx.translate(turret.x,turret.y);
    ctx.rotate(turret.rotation);
    ctx.drawImage(turretimg,-8, -8,37,16);
	ctx.restore();
}

function drawTankPlayer() {
	if( (drawTankmov == "stand") && !player.jumping) {
		var tankstandimg = new Image();
		tankstandimg.src = "img/Tankbody.png";
			ctx.drawImage(tankstandimg, player.x, player.y, player.width, player.height);
	

	} else if( (drawTankmov == "left") && !player.jumping) {
		var tankleftimg = new Image();
		tankleftimg.src = "img/Tankleft.png";
			ctx.drawImage(tankleftimg, player.x, player.y, player.width, player.height);

	} else if( (drawTankmov == "right") && !player.jumping) {
		var tankrightimg = new Image();
		tankrightimg.src = "img/Tankright.png";
			ctx.drawImage(tankrightimg, player.x, player.y, player.width, player.height);

	} else if( (drawTankmov == "stand") && player.jumping){
		var tankupimg = new Image();
		tankupimg.src = "img/Tankup.png";
			ctx.drawImage(tankupimg, player.x, player.y, player.width, player.height);

	} else if( (drawTankmov == "left") && player.jumping){
		var tankupleftimg = new Image();
		tankupleftimg.src = "img/Tankupleft.png";
			ctx.drawImage(tankupleftimg, player.x, player.y, player.width, player.height);

	} else if( (drawTankmov == "right") && player.jumping){
		var tankuprightimg = new Image();
		tankuprightimg.src = "img/Tankupright.png";
			ctx.drawImage(tankuprightimg, player.x, player.y, player.width, player.height);


	}
}
function drawTurret(parentx, parenty){
		planeTurX = parentx;
		planeTurY = parenty;
		planeTurRot = Math.atan2 (turret.y - planeTurY, turret.x - planeTurX);
		var planeTurImg = new Image();
		planeTurImg.src ="img/Turret2.png";
		ctx.save();
		ctx.translate(planeTurX,planeTurY);
		ctx.rotate(planeTurRot);
		ctx.drawImage(planeTurImg,-8, -8,37,16);
		ctx.restore();

}
function enemyPlane(){
	if(enemyplanes.active == 1) {
		timerplaneshots++;
		
		if(enemyplanes.mov== -1){
			enemyplanes.x=enemyplanes.x-5;
			if (enemyplanes.x==0){
				enemyplanes.mov= 1;
			}
			var planeimg = new Image();
			planeimg.src = "img/Planebody.png";
			ctx.drawImage(planeimg, enemyplanes.x, enemyplanes.y, enemyplanes.width, enemyplanes.height);
			drawTurret(enemyplanes.x+13 , enemyplanes.y+16);
		}
		else{
			enemyplanes.x=enemyplanes.x+5;
					if (enemyplanes.x==800){
				enemyplanes.mov= -1;
			}
			var planeimg = new Image();
			planeimg.src = "img/Planebodyflipped.png";
			ctx.drawImage(planeimg, enemyplanes.x, enemyplanes.y, enemyplanes.width, enemyplanes.height);
			drawTurret(enemyplanes.x+40 , enemyplanes.y+16); 
			if (timerplaneshots == 500){
			timerplaneshots =0;
			shootenemyinit(enemyplanes.x+40 , enemyplanes.y+16);
			}
		}
		
		enemyplanes.shoottimer--;
		if(enemyplanes.shoottimer == 0) {
			shootenemyinit(planeTurX,planeTurY);
			enemyplanes.shoottimer = 100;
		}
	}
	else {
			enemyplanes.timer--;
			if(enemyplanes.timer == 0) {
				enemyplanes.active = 1;
				enemyplanes.timer = 500;
				enemyplanes.x = 750;
			}
	}
}
function enemyTower(){
		for (var i = 0; i < enemyTowers.length; i++) {
			var Towerimg = new Image();
			Towerimg.src ="img/Tower1.png";
			ctx.drawImage(Towerimg, enemyTowers.x, enemyTowers.y);
			drawTurret(enemyTowers.x+14,enemyTowers.y+5)
		}
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
var enemyTowers=[];
enemyTowers.push({
    x:400,
    y:300
});
var boxes = [];
boxes.push({
    x: 0,
    y: height - 2,
    width: width,
    height: 50
});


boxes.push({
    x: 600,
    y: 560,
    width: 400,
    height: 40
});

boxes.push({
    x: 755,
    y: 530,
    width: 80,
    height: 40
});

boxes.push({
    x: 1000,
    y: 510,
    width: 300,
    height: 100
});

boxes.push({
    x: 1330,
    y: 560,
    width: 40,
    height: 40
});

boxes.push({
    x: 1400,
    y: 460,
    width: 300,
    height: 200
});

boxes.push({
    x: 1700,
    y: 510,
    width: 40,
    height: 160
});

boxes.push({
    x: 1740,
    y: 560,
    width: 40,
    height: 80
});