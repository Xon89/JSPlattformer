
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

