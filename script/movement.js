function movement(){
    player.velX *= friction;
    player.velY += gravity;
    player.x += player.velX;
    player.y += player.velY;
}