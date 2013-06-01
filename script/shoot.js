function shoot() {
	shot1();
	shot2();
	shot3();
	shot4();
	if(shot4go) stopshoot = true;
	if( (shot1go && shot2go && shot3go && shot4go) && ( shotposx>800 || shotposx <0 || shotposy>600 || shotposy <0 ) && ( shot2posx>800 || shot2posx <0 || shot2posy>600 || shot2posy <0 ) && ( shot3posx>800 || shot3posx<0 || shot3posy>600 || shot3posy <0 ) && ( shot4posx>800 || shot4posx < 0 || shot4posy>600 || shot4posy <0 ) ) {
		shot1go = false,
		shot2go = false,
		shot3go = false,
		shot4go = false,
		stopshoot = false;
	}
}

function shot1init() {
	shot1go = true;
	shotaimx = mouse.x,
	shotaimy = mouse.y,
	shotstartx = player.x,
	shotstarty = player.y,
	shotposx = player.x,
	shotposy = player.y;
	shot1go = true;
}

function shot2init() {
	shot2go = true;
	shot2aimx = mouse.x,
	shot2aimy = mouse.y,
	shot2startx = player.x,
	shot2starty = player.y,
	shot2posx = player.x,
	shot2posy = player.y;	
}

function shot3init() {
	shot3go = true;
	shot3aimx = mouse.x,
	shot3aimy = mouse.y,
	shot3startx = player.x,
	shot3starty = player.y,
	shot3posx = player.x,
	shot3posy = player.y;	
}

function shot4init() {
	shot4go = true;
	shot4aimx = mouse.x,
	shot4aimy = mouse.y,
	shot4startx = player.x,
	shot4starty = player.y,
	shot4posx = player.x,
	shot4posy = player.y;	
}

function shot1() {
	 if(shot1go) {
 		shotangle = Math.atan2(shotaimy - shotstarty, shotaimx - shotstartx);
    	shotmovx = Math.cos(shotangle) * shotspeed;
    	shotmovy = Math.sin(shotangle) * shotspeed;
 		
 		shotposx += shotmovx;
   		shotposy += shotmovy;
    
 		var shotimg = new Image();
 		shotimg.onload = function () {
 			ctx.drawImage(shotimg, shotposx, shotposy, 8, 8);
 		}
 		shotimg.src = "img/shot.jpg";
 	}
}

function shot2() {
	 if(shot1go && shot2go) {
 		shot2angle = Math.atan2(shot2aimy - shot2starty, shot2aimx - shot2startx);
    	shot2movx = Math.cos(shot2angle) * shotspeed;
    	shot2movy = Math.sin(shot2angle) * shotspeed;
 		
 		shot2posx += shot2movx;
   		shot2posy += shot2movy;
    
 		var shot2img = new Image();
 		shot2img.onload = function () {
 			ctx.drawImage(shot2img, shot2posx, shot2posy, 8, 8);
 		}
 		shot2img.src = "img/shot.jpg";
 	}
}

function shot3() {
	 if(shot1go && shot2go && shot3go) {
 		shot3angle = Math.atan2(shot3aimy - shot3starty, shot3aimx - shot3startx);
    	shot3movx = Math.cos(shot3angle) * shotspeed;
    	shot3movy = Math.sin(shot3angle) * shotspeed;
 		
 		shot3posx += shot3movx;
   		shot3posy += shot3movy;
    
 		var shot3img = new Image();
 		shot3img.onload = function () {
 			ctx.drawImage(shot3img, shot3posx, shot3posy, 8, 8);
 		}
 		shot3img.src = "img/shot.jpg";
 	}
}

function shot4() {
	 if(shot1go && shot2go && shot3go && shot4go) {
 		shot4angle = Math.atan2(shot4aimy - shot4starty, shot4aimx - shot4startx);
    	shot4movx = Math.cos(shot4angle) * shotspeed;
    	shot4movy = Math.sin(shot4angle) * shotspeed;
 		
 		shot4posx += shot4movx;
   		shot4posy += shot4movy;
    
 		var shot4img = new Image();
 		shot4img.onload = function () {
 			ctx.drawImage(shot4img, shot4posx, shot4posy, 8, 8);
 		}
 		shot4img.src = "img/shot.jpg";
 	}
}