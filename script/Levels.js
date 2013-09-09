
 var level1=[
 			[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
 			[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
 			[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
 			[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
 			[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
 			[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
 			]
 			
 for (var i = 0; i < level1.length; i++){
 	for (var j = 0; j < level1[i].length; j++){
 	 	drawlevel(level1[i][j],i,j)
	};	
 };	
function drawlevel(type, yval, xval){
	if (type==2){
		boxes.push({
			width: 50,
			height: 50,
			x: xval*50,
			y: yval*50,
		});
	}
}