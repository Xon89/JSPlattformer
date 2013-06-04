  
 function inputplayer(){
    if (keys[32]) {
      //JUMP
      if(!player.jumping){
       player.jumping = true;
       player.velY = -player.speed*2;
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