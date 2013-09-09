function cooldown(){
	if (player.shotavail==0){
		player.shotcd--;
			if (player.shotcd==0){
				player.shotavail=1;
		}
	}
}

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
			shotspeed: player.shotspeed,
			destruction : 0,
		})
}

function playershot() {
	for (var i = 0; i < playershots.length; i++) {
   			if(playershots[i].go==true) {
	    		shotmovx = Math.cos(playershots[i].angle) * playershots[i].shotspeed;
	    		shotmovy = Math.sin(playershots[i].angle) * playershots[i].shotspeed;
		 		playershots[i].x += shotmovx;
		   		playershots[i].y += shotmovy;
 			    var shotimg = new Image();
			 	shotimg.src = "img/shot.png";
				ctx.drawImage(shotimg, playershots[i].x, playershots[i].y, playershots[i].width, playershots[i].height);
				playershots[i].destruction++;
				if (playershots[i].destruction == 600){
					playershots[i].go=false;
				}	
				for (var j = 0; j < Enemys.length; j++){
					if (Enemys[j].nodead ==1){
						if (Enemys[j].active ==1){
								var hit=colCheckHit(playershots[i], Enemys[j]);

						}
					}
				}
	 		}
 	}
}

function shootenemyinit( xstart ,  ystart, speed){
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
			shotspeed: speed,
		})
}

function enemyshot() {
	for (var i = 0; i < enemyshots.length; i++) {
   			if(enemyshots[i].go==true) {
	    		shotmovx = Math.cos(enemyshots[i].angle) * enemyshots[i].shotspeed;
	    		shotmovy = Math.sin(enemyshots[i].angle) * enemyshots[i].shotspeed;
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
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),

        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2);

    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {         // figures out on which side we are colliding (top, bottom, left, or right)         
   				var hit=1;
                shapeB.nodead = 0;
                shapeB.active =0;
 				jBeep('sound/hit.wav');
 				return hit;
    }   
}