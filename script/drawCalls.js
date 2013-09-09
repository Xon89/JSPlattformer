function background(){
	// needs to become: set background to level
	var bg1img = new Image();
	bg1img.src = "img/bg1.png";
		ctx.drawImage(bg1img, bg3posx, 0, 801, 600);
		ctx.drawImage(bg1img, bg4posx, 0, 801, 600);
		
	var bg2img = new Image();
	bg2img.src = "img/bg2.png";
		ctx.drawImage(bg2img, bg1posx, 0, 801, 600);
		ctx.drawImage(bg2img, bg2posx, 0, 801, 600);
}
function drawBoxes(){
//draw boxes and Fill
// needs to become: draw all boxes in level
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


function drawPlayer(){
		drawTankPlayer();
		drawTurretPlayer();
}	
function drawTankPlayer() {
	//needs to be changed to accomendate for different Tankbodys, make it more modular, get img and body from player object.
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
function drawTurretPlayer(){
	//needs to allow different turrets
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
function drawEnemy(){
		for (var i = 0; i < Enemies.length; i++) {
			if (Enemies[i].nodead==1){
				if (Enemies[i].x<=800){
					Enemies[i].active=1;
				}
				if(Enemies[i].active == 1) {	
					var Enemyimg = new Image();
					Enemyimg.src =Enemies[i].picturesource;

					ctx.drawImage	(Enemyimg, Enemies[i].x, Enemies[i].y);
						if (Enemies[i].Turret==true){
							drawTurretEnemy(Enemies[i].x+10,Enemies[i].y+9)
							Enemies[i].shoottimer--;
							if(Enemies[i].shoottimer == 0) {
								shootenemyinit(Enemies[i].x+14,Enemies[i].y+5, Enemies[i].shotspeed);
								Enemies[i].shoottimer = 100;

							}
						}	
				}
			}
		}
}


function drawTurretEnemy(parentx, parenty){
	// needs to allow different turrets
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

function Segment (width, height, color) {
  this.x = 0;
  this.y = 0;
  this.width = width;
  this.height = height;
  this.vx = 0;
  this.vy = 0;
  this.rotation = 0;
  this.scaleX = 1;
  this.scaleY = 1;
  this.color = (color === undefined) ? "#ffffff" : utils.parseColor(color);
  this.lineWidth = 1;
}