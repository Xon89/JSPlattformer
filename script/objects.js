


function restart(){
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
      jumping: false
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
  		x: 200,
		y: 400,
		width: 20,
		height: 60,
		active : 0,
		timer : 80,
		shoottimer : 100,
		nodead: 1,
});
enemyTowers.push({
  		x: 2000,
		y: 400,
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
}