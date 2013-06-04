
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





