function shootplayerinit(){
		jBeep('sound/shot.wav');	
		shootangle= Math.atan2(mouse.y - turret.y, mouse.x - turret.x),
		sine = Math.sin(shootangle) * 20;
		cosi = Math.cos(shootangle) * 20;
		playershots.push({
		posx : (turret.x-4) + cosi,
		posy : (turret.y-4) + sine,
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
		 		playershots[i].posx += shotmovx;
		   		playershots[i].posy += shotmovy;
 			    var shotimg = new Image();
			 	shotimg.src = "img/shot.png";
				ctx.drawImage(shotimg, playershots[i].posx, playershots[i].posy, 8, 8);
				playershots[i].destruction++;
				if (playershots[i].destruction == 600){
					playershots[i].go=false;
				}	

	 		}
 	}
	
}
function shootenemyinit( posxstart ,  posystart){
		jBeep('sound/shot.wav');	
		shootangle= Math.atan2(turret.y - posystart, turret.x - posxstart ),
		sine = Math.sin(shootangle) * 20;
		cosi = Math.cos(shootangle) * 20;
		enemyshots.push({
			posx : (posxstart-4) + cosi,
			posy : (posystart-4) + sine,
			angle : shootangle,
			go : true,
			destruction : 0,
	
		})

	
}
function enemyshot(posx, posy) {
	for (var i = 0; i < playershots.length; i++) {
   			if(enemyshots[i].go==true) {
	    		shotmovx = Math.cos(enemyshots[i].angle) * shotspeed;
	    		shotmovy = Math.sin(enemyshots[i].angle) * shotspeed;
		 		enemyshots[i].posx += shotmovx;
		   		enemyshots[i].posy += shotmovy;
 			    var shotimg = new Image();
			 	shotimg.src = "img/enemyshot.png";
				ctx.drawImage(shotimg, enemyshots[i].posx, enemyshots[i].posy, 8, 8);
				enemyshots[i].destruction++;
				if (enemyshots[i].destruction == 600){
					enemyshots[i].go=false;
				}	

	 		}
 	}
	
}