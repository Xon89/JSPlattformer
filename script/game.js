
function update(){
	inputplayer();
	
	startscreen();
	
	if(keys[13]) {
		if(player.alive) {
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
			player.alive = true; 
			enemyshots = [];
			playershots = [];
			player.x = width/2;
			player.y = height - 5;}
 	}
 	
 	requestAnimationFrame(update);
}

window.addEventListener("load",function(){
    update();
});





