function restart(){
	
	var cosi = 0, 
	sine = 0; //needed to fix bug in startscreen
	enemyTowers.length=0;
	boxes.length=0;
	enemyshots.length=0;
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
	      shotavail: 1,
	    }
	    

	
	enemyTowers.push({
	  		x: 1000,
			y: 450,
			width: 20,
			height: 60,
			active : 0,
			timer : 80,
			shoottimer : 100,
			nodead: 1,
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