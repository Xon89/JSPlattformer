function movement(){
    player.velX *= friction;
    player.velY += gravity;
    player.x += player.velX;
    player.y += player.velY;
}
function collision(){
		for (var i = 0; i < boxes.length; i++) {
	        var dir = colCheck(player, boxes[i]);
	}
	            if (dir == "b")
            {player.jumping=false;}
	
}
function scrolling() {
	if (player.x<0) {
		player.x = 0;
	} else if (player.x>(width/3)*2) {
		player.x = (width/3)*2;
	}	

    if(player.y >= height-player.height){
        player.y = height - player.height;
        player.jumping = false;
    }
    if(drawTankmov == "right" && (player.x == (width/3)*2)) {
		bg1posx = bg1posx - 3;
		bg2posx = bg2posx - 3;
		bg3posx = bg3posx - 5;
		bg4posx = bg4posx - 5;
		
		for (var i = 0; i < boxes.length; i++) {
    		boxes[i].x = boxes[i].x - 5;
		}
		
		ctx.fill();

	}
	
	if(bg1posx <= -width)
		bg1posx = width;
	if(bg2posx <= -width)
		bg2posx = width;
	if(bg3posx <= -width)
		bg3posx = width;
	if(bg4posx <- -width)
		bg4posx = width;
}

function colCheck(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;
 
    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {         // figures out on which side we are colliding (top, bottom, left, or right)         
    var oX = hWidths - Math.abs(vX),             oY = hHeights - Math.abs(vY);         if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
}
