
function update(){
	inputplayer();
	movement();
	collision();
	background();

	drawBoxes();
	collision2();
	drawTank();
	drawTurret();
	enemyPlane();
	shoot();
 	
	
	if(drawTankmov == "right" && (player.x == (width/3)*2)) {
		bg1posx = bg1posx - 3;
		bg2posx = bg2posx - 3;
	}
	
	if(bg1posx <= -width)
		bg1posx = width;
	if(bg2posx <= -width)
		bg2posx = width;
	
 	requestAnimationFrame(update);
}

function collision2() {
	if (player.x<0) {
		player.x = 0;
	} else if (player.x>(width/3)*2) {
		player.x = (width/3)*2;
	}	

    if(player.y >= height-player.height){
        player.y = height - player.height;
        player.jumping = false;
    }
}




window.addEventListener("load",function(){
    update();
});

function drawTurretsub(img,x,y,width,height,rad){
	ctx.save();
	
    ctx.translate(x,y);
    ctx.rotate(rad);
    ctx.drawImage(img,-8, -8,width,height);

	ctx.restore();
}

function drawBoxes(){
//draw boxes and Fill, also call collision detection
	var img = new Image();
	img.src="img/Tankbody.png";
	var pat=ctx.createPattern(img,"repeat");
	ctx.fillStyle=pat;
	ctx.beginPath();
	
	for (var i = 0; i < boxes.length; i++) {
    ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
	}
	ctx.fill();
}

