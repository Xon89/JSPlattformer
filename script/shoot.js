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
				if (playershots[i].destruction == 600){
					playershots[i].go=false;
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
			angle : shootangle,
			go : true,
			destruction : 0,
	
		})

	
}
function enemyshot(x, y) {
	for (var i = 0; i < playershots.length; i++) {
   			if(enemyshots[i].go==true) {
	    		shotmovx = Math.cos(enemyshots[i].angle) * shotspeed;
	    		shotmovy = Math.sin(enemyshots[i].angle) * shotspeed;
		 		enemyshots[i].x += shotmovx;
		   		enemyshots[i].y += shotmovy;
 			    var shotimg = new Image();
			 	shotimg.src = "img/enemyshot.png";
				ctx.drawImage(shotimg, enemyshots[i].x, enemyshots[i].y, playershots[i].width, playershots[i].height);
				enemyshots[i].destruction++;
				if (enemyshots[i].destruction == 600){
					enemyshots[i].go=false;
				}	

	 		}
 	}
	
}