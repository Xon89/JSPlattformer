
function update(){
	inputplayer();
	
	startscreen();
	
	if(keys[13]) {
		canvas.width=canvas.width;
		canvas.width=width;
		movement();
	
		background();
		drawBoxes();
		scrolling();
		collision();
		drawPlayer();
		drawEnemy();
		playershot();

 	}
 	
 	requestAnimationFrame(update);
}

window.addEventListener("load",function(){
    update();
});





