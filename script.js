//by Kevin Baumgarten & Tobias Winkels-Herding

playarea_canvas = document.getElementById('playarea');
playarea = playarea_canvas.getContext('2d');

var gamefield = new Array();
var tank = new Array();

function initialize()
{
	gamefield['width'] = 800;
	gamefield['height'] = 600;
	gamefield['player_margin'] = 10;
	gamefield['foreground'] = "#FFFFFF";
	gamefield['background'] = "#CCCCCC";
	
	tank['x'] = 50;
	tank['y'] = 500; 
}

function rendergamefield()
{
	
	playarea.beginPath();
	playarea.clearRect(0,0,gamefield['width'],gamefield['height']);
	playarea.fillStyle = gamefield['background'];
	playarea.stroke();
	playarea.closePath();
	
	//draw background image
	var bgimg = new Image();
	bgimg.onload = function () {
		playarea.drawImage(bgimg, 0, 0, 800, 600);
	}
	bgimg.src = "bg.jpg";
	
	//draw tank
	var tankimg = new Image();
	tankimg.onload = function () {
		playarea.drawImage(tankimg, tank['x'], tank['y'], 70, 50);
	}
	tankimg.src = "tank.jpg";
	
	document.onkeydown = checkKeyDown;
	document.onkeyup = checkKeyUp;
}

function runthegame()
{
	rendergamefield();
}

function checkKeyDown(e) {
    if(e.keyCode == 37)
    	tank['x'] = tank['x'] - 5;
    if(e.keyCode == 39)
    	tank['x'] = tank['x'] + 5;

}

function checkKeyUp(e) {
	if(e.keyCode == 37){}
	if(e.keyCode == 39){}
}

initialize();
var game = setInterval(runthegame, 10);
