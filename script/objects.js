


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
enemyplanes ={
		x: 800,
		y: 35,
		width: 53,
		height: 33,
		mov: -1,
		active : 1,
		timer : 500,
		shoottimer : 100,
	}
Score={
	time:0,
	points:0,
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

enemyTowers.push({
  		x: 1410,
		y: 240,
		width: 20,
		height: 60,
		active : 0,
		timer : 80,
		shoottimer : 100,
		nodead: 1,
});

enemyTowers.push({
  		x: 2010,
		y: 460,
		width: 20,
		height: 60,
		active : 0,
		timer : 80,
		shoottimer : 100,
		nodead: 1,
});

enemyTowers.push({
  		x: 2550,
		y: 190,
		width: 20,
		height: 60,
		active : 0,
		timer : 80,
		shoottimer : 100,
		nodead: 1,
});

enemyTowers.push({
  		x: 2650,
		y: 190,
		width: 20,
		height: 60,
		active : 0,
		timer : 80,
		shoottimer : 100,
		nodead: 1,
});

enemyTowers.push({
  		x: 2750,
		y: 190,
		width: 20,
		height: 60,
		active : 0,
		timer : 80,
		shoottimer : 100,
		nodead: 1,
});

enemyTowers.push({
  		x: 3095,
		y: 460,
		width: 20,
		height: 60,
		active : 0,
		timer : 80,
		shoottimer : 100,
		nodead: 1,
});

enemyTowers.push({
  		x: 3860,
		y: 40,
		width: 20,
		height: 60,
		active : 0,
		timer : 80,
		shoottimer : 80,
		nodead: 1,
});

enemyTowers.push({
  		x: 3820,
		y: 190,
		width: 20,
		height: 60,
		active : 0,
		timer : 80,
		shoottimer : 90,
		nodead: 1,
});

enemyTowers.push({
  		x: 3930,
		y: 340,
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

boxes.push({
    x: 1000,
    y: 510,
    width: 300,
    height: 100
});

boxes.push({
    x: 1330,
    y: 560,
    width: 40,
    height: 40
});

boxes.push({
    x: 1400,
    y: 460,
    width: 300,
    height: 200
});

boxes.push({
	x: 1400,
	y: 300,
	width: 40,
	height: 40
});

boxes.push({
    x: 1700,
    y: 510,
    width: 40,
    height: 160
});

boxes.push({
    x: 1740,
    y: 560,
    width: 40,
    height: 80
});

boxes.push({
	x: 1900,
	y: 560,
	width: 240,
	height: 80
});

boxes.push({
	x: 2000,
	y: 520,
	width: 40,
	height: 80
});

boxes.push({
	x: 2500,
	y: 250,
	width: 320,
	height: 40
});

boxes.push({
	x: 2650,
	y: 560,
	width: 300,
	height: 60
});

boxes.push({
	x: 2700,
	y: 520,
	width: 200,
	height: 40
});

boxes.push({
	x: 2750,
	y: 480,
	width: 100,
	height: 40
});

boxes.push({
	x: 2800,
	y: 440,
	width: 50,
	height: 40
});

boxes.push({
	x: 3050,
	y: 560,
	width: 100,
	height: 60
});

boxes.push({
	x: 3075,
	y: 520,
	width: 50,
	height: 40
});

boxes.push({
	x: 3840,
	y: 100,
	width: 160,
	height: 25
});

boxes.push({
	x: 3800,
	y: 250,
	width: 200,
	height: 25
});

boxes.push({
	x: 3910,
	y: 400,
	width: 90,
	height: 25
});

boxes.push({
	x: 4000,
	y: 0,
	width: 40,
	height: height
});
boxes.push({
	x: 4000,
	y: 0,
	width: 40,
	height: height
});

}