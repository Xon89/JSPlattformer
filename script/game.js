function update(){
	inputplayer();
	
	startscreen();
	if(keys[13]) {
		if(player.nodead) {
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
			enemyshot();
			drawScore();
		} else {
			keys[13] = false; 
			restart();

			
		}
 	}
 	
 	requestAnimationFrame(update);
}

window.addEventListener("load",function(){
	restart();
    update();
});





