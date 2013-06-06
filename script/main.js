var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 800,
    height = 600,

    keys = [],

    friction = 0.8,
    shotspeed = 10,
    gravity = 0.3,
	bg1posx = 0,
	bg2posx = width;
	bg3posx = 0;
	bg4posx = width;
	var boxes = [];
	planeactive=1;
	
	scrollingpoint = 350;
    drawTankmov = "stand";
    var turret = new Segment(100,20);
    var playershots=[];
    var enemyshots=[];
    var enemyTowers=[];
    timerplaneshots =0;
    canvas.width = 800;
	canvas.height = 600;
	var mouse = utils.captureMouse(canvas);
	var offset = 0;

function startscreen() {
	var startimg = new Image();
	startimg.src = "img/start.png";
		ctx.drawImage(startimg, 0, 0, 800, 600);


}

function background(){

	var bg1img = new Image();
	bg1img.src = "img/bg1.png";
		ctx.drawImage(bg1img, bg3posx, 0, 801, 600);
		ctx.drawImage(bg1img, bg4posx, 0, 801, 600);
		
	var bg2img = new Image();
	bg2img.src = "img/bg2.png";
		ctx.drawImage(bg2img, bg1posx, 0, 801, 600);
		ctx.drawImage(bg2img, bg2posx, 0, 801, 600);
		

	

}
function drawScore(){
	Score.time++;
	
	ctx.font = "bold 12px sans-serif";
  	ctx.fillText("Time:" +Math.round(Score.time/60)+"      Score:"+Score.points , 20, 15);
}
function drawPlayer(){
		if (player.shotavail==0){
		player.shotcd--;
			if (player.shotcd==0){
				player.shotavail=1;
			}
		}
		drawTankPlayer();
		drawTurretPlayer();

}	
function drawEnemy(){
		enemyTower();
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
		TurX = parentx;
		TurY = parenty;
		TurRot = Math.atan2 (turret.y - TurY, turret.x - TurX);
		var TurImg = new Image();
		TurImg.src ="img/Turret2.png";
		ctx.save();
		ctx.translate(TurX,TurY);
		ctx.rotate(TurRot);
		ctx.drawImage(TurImg,-8, -8,37,16);
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
			shootenemyinit(TurX,TurY);
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
			if (enemyTowers[i].nodead==1){
				if (enemyTowers[i].x<=800){
					enemyTowers[i].active=1;
				}
				if(enemyTowers[i].active == 1) {	
					var Towerimg = new Image();
					if (enemyTowers[i].timer < 40){
					Towerimg.src ="img/Tower1.png";
					enemyTowers[i].timer--;
					}
					else{
						Towerimg.src="img/Tower2.png"
						enemyTowers[i].timer=80;
					}
					ctx.drawImage	(Towerimg, enemyTowers[i].x, enemyTowers[i].y);
					drawTurret(enemyTowers[i].x+10,enemyTowers[i].y+9)
					enemyTowers[i].shoottimer--;
					if(enemyTowers[i].shoottimer == 0) {
						shootenemyinit(enemyTowers[i].x+14,enemyTowers[i].y+5);
						enemyTowers[i].shoottimer = 100;
					}
				}
			}
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
