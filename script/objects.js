
function drawBoxes(){
//draw boxes and Fill
	var img = new Image();
	img.src="img/box.png";
	var pat=ctx.createPattern(img,"repeat");
	ctx.fillStyle=pat;
	ctx.beginPath();
	
	for (var i = 0; i < boxes.length; i++) {
    ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
	}
	ctx.fill();
}
var enemyTowers=[];

function restart(){
enemyTowers.length=0;
boxes.length=0;
enemyshots.length=0;
playershots.length=0;
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
enemyTowers.push({
  		x: 050,
		y: 400,
		width: 20,
		height: 60,
		active : 1,
		timer : 80,
		shoottimer : 100,
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