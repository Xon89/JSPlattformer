
function update(){
	inputplayer();
	movement();

	background();
	drawBoxes();
	scrolling();
	collision();
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





window.addEventListener("load",function(){
    update();
});



function drawBoxes(){
//draw boxes and Fill
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

