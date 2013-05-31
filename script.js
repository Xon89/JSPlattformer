//by Kevin Baumgarten & Tobias Winkels-Herding

playarea_canvas = document.getElementById('playarea');
playarea = playarea_canvas.getContext('2d');

var gamefield = new Array();

function initialize()
{
	gamefield['width'] = 800;
	gamefield['height'] = 600;
	gamefield['player_margin'] = 10;
	gamefield['foreground'] = "#FFFFFF";
	gamefield['background'] = "#CCCCCC";
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
	
}

function runthegame()
{
	rendergamefield();
}

initialize();
var game = setInterval(runthegame, 10);
