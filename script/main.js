var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 800,
    height = 600,
    keys = [],
	bg1posx = 0,
	bg2posx = width;
	bg3posx = 0;
	bg4posx = width;
	var boxes = [];
	scrollingpoint = 350;

    var turret = new Segment(100,20);
    var playershots=[];
    var Enemieshots=[];
    var Enemies=[];

    canvas.width = 800;
	canvas.height = 600;
	var mouse = utils.captureMouse(canvas);
	var offset = 0;
function startscreen() {
	var startimg = new Image();
	startimg.src = "img/start.png";
		ctx.drawImage(startimg, 0, 0, 800, 600);
}

function disableselect(e){
	return false;
	}
	function reEnable(){
		return true;
	}
	document.onselectstart=new Function ("return false")
	if (window.sidebar){
	document.onmousedown=disableselect;
	document.onclick=reEnable;
}

function update(){
	inputplayer();
	
	startscreen();
	if(keys[13]) {
		if(player.nodead) {
			canvas.width=canvas.width;
			canvas.width=width;
			movement();

			background();
			drawBoxes();
			scrolling();
			collision();
			drawPlayer();
			drawEnemy();
			cooldown();
			playershot();
			Enemiesshot();
		} else {
			keys[13] = false; 
			restart();
		}
 	}
 	requestAnimationFrame(update);
}

window.addEventListener("load",function(){
	restart();
    update();
});







