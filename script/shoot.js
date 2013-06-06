function shootplayerinit(){
		jBeep('sound/shot.wav');	
		shootangle= Math.atan2(mouse.y - turret.y, mouse.x - turret.x),
		sine = Math.sin(shootangle) * 20;
		cosi = Math.cos(shootangle) * 20;
		playershots.push({
		posx : (turret.x-4) + cosi,
		posy : (turret.y-4) + sine,
		angle : Math.atan2(mouse.y - turret.y, mouse.x - turret.x),
		go : true,
	
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


	 		}
 	}
	
}
