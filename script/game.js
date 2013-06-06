function update(){
	inputplayer();
	
	startscreen();
	if(keys[13]) {
		if(player.active) {
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
		} else {
			keys[13] = false; 
			player.active = 1; 
			enemyshots = [];
			playershots = [];
			player.x = width/2;
			player.y = height - 5;
			restart();

			
			offset = 0;
		}
 	}
 	
 	requestAnimationFrame(update);
}

window.addEventListener("load",function(){
	restart();
    update();
});





