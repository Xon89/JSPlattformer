// ONLY want the definition of objects in here
function restart(){
	drawTankmov = "stand";
	var cosi = 0, 
	sine = 0; //needed to fix bug in startscreen
	Enemies.length=0;
	boxes.length=0;
	Enemieshots.length=0;
	playershots.length=0;
	
	    player = {
	      x : width/2,
	      y : height - 5,
	      width : 60,
	      height : 40,
	      speed: 3,
	      velX: 0,
	      velY: 0,
	      nodead: 1,
	      grounded: false,
	      active: true,
	      jumping: false,
	      shotcd: 50,
	      shotspeed: 10,
	      shotavail: 1,
	      friction: 0.8,
    	  gravity: 0.3,
	    }
	Enemies.push({
		//pushes a tower
	  		x: 1000,//needs to be vartiable from levels
			y: 450,//needs to be vartiable from levels
			width: 20,
			height: 60,
			active : 0,
			timer : 80,
			shoottimer : 100,
			nodead: 1,
			picturesource: "img/Tower1.png",
			Turret: true,
			Turretpictursesource:"img/Turret2.png",
			shotspeed: 10,
	});
	

	
	boxes.push({
	    x: 0,
	    y: height - 2,
	    width: width,
	    height: 50
	});
	
	boxes.push({
	    x: 600,
	    y: 560,
	    width: 400,
	    height: 40
	});
	
	boxes.push({
	    x: 755,
	    y: 530,
	    width: 80,
	    height: 40
	});
	

	

}