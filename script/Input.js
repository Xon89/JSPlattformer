
 
function inputplayer(){

    if (keys[32]) {
      //JUMP
      if(!player.jumping && player.grounded){
       player.jumping = true;
       player.velY = -player.speed*2;
       player.grounded = false;
      }
    }   	
    if (keys[39] || keys[68]) {
        // MOVE RIGHT
        if (player.velX < player.speed) {
            player.velX++;
        }
    }
    if (keys[37] || keys[65]) {
        // MOVE LEFT
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }

}
document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
    if( (keys[37] || keys[65]) && keys[13])
    	drawTankmov = "left";
    if( (keys[39] || keys[68]) && keys[13] )
    	drawTankmov = "right";
});

document.body.addEventListener("keyup", function(e) {
    if(keys[37] || keys[65] || keys[39] || keys[68])
    	tankinmovement = true;   
    	 
    if(e.keyCode != 13) 
    	keys[e.keyCode] = false;
    
    if((!keys[37] && !keys[65] ) && (!keys[39] && !keys[68]))
    	tankinmovement = false;
    	
    if(!tankinmovement)
    	drawTankmov = "stand";
    	
    tankinmovement = null;
});

canvas.addEventListener("mousedown", function(e) {
	if(keys[13]) {
		if (player.shotavail==1){
			player.shotcd= 30;
			player.shotavail=0;
			shootplayerinit();
		}
	}
}, false);
