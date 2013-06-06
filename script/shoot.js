function shootplayerinit(){
		jBeep('sound/shot.wav');	
		shootangle= Math.atan2(mouse.y - turret.y, mouse.x - turret.x),
		sine = Math.sin(shootangle) * 20;
		cosi = Math.cos(shootangle) * 20;
		playershots.push({
			x : (turret.x-4) + cosi,
			y : (turret.y-4) + sine,
			width : 8,
			height: 8,
			angle : shootangle,
			go : true,
			destruction : 0,
		})

	
}
function playershot() {
	for (var i = 0; i < playershots.length; i++) {
   			if(playershots[i].go==true) {
	    		shotmovx = Math.cos(playershots[i].angle) * shotspeed;
	    		shotmovy = Math.sin(playershots[i].angle) * shotspeed;
		 		playershots[i].x += shotmovx;
		   		playershots[i].y += shotmovy;
 			    var shotimg = new Image();
			 	shotimg.src = "img/shot.png";
				ctx.drawImage(shotimg, playershots[i].x, playershots[i].y, playershots[i].width, playershots[i].height);
				playershots[i].destruction++;
				if (enemyplanes.active == 1){
				colCheckHit(playershots[i], enemyplanes);
				}
				if (playershots[i].destruction == 600){
					playershots[i].go=false;
				}	
				for (var j = 0; j < enemyTowers.length; j++){
					if (enemyTowers[j].active ==1){
							colCheckHit(playershots[i], enemyTowers[j])
					}
				}

					
			
	 		}
 	}
	
}
function shootenemyinit( xstart ,  ystart){
		jBeep('sound/shot.wav');	
		shootangle= Math.atan2(turret.y - ystart, turret.x - xstart ),
		sine = Math.sin(shootangle) * 20;
		cosi = Math.cos(shootangle) * 20;
		enemyshots.push({
			x : (xstart-4) + cosi,
			y : (ystart-4) + sine,
			width : 8,
			height: 8,
			angle : shootangle,
			go : true,
			destruction : 0,
		})

	
}
function enemyshot() {
	for (var i = 0; i < enemyshots.length; i++) {
   			if(enemyshots[i].go==true) {
	    		shotmovx = Math.cos(enemyshots[i].angle) * shotspeed;
	    		shotmovy = Math.sin(enemyshots[i].angle) * shotspeed;
		 		enemyshots[i].x += shotmovx;
		   		enemyshots[i].y += shotmovy;
 			    var shotimg = new Image();
			 	shotimg.src = "img/enemyshot.png";
				ctx.drawImage(shotimg, enemyshots[i].x, enemyshots[i].y, enemyshots[i].width, enemyshots[i].height);
				enemyshots[i].destruction++;
				if (enemyshots[i].destruction == 600){
					enemyshots[i].go=false;
				}	
				if (player.active == 1){
				colCheckHit(enemyshots[i], player);
				}

	 		}
 	}
	
}
function colCheckHit(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2);
     
 
    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {         // figures out on which side we are colliding (top, bottom, left, or right)         
   
                shapeB.active = 0;
 				jBeep('sound/hit.wav');
    }
    
}