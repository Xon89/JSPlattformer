
function update(){
	inputplayer();
	
	startscreen();
	
	if(keys[13]) {
		movement();
	
		background();
		drawBoxes();
		scrolling();
		collision();
		drawTank();
		drawTurret();
		enemyPlane();
		shoot();
 	}
 	
 	requestAnimationFrame(update);
}

window.addEventListener("load",function(){
    update();
});





