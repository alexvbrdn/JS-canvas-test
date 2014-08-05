window.onload = function() {
	var canvas = document.getElementById('canvas');
	if(!canvas){
		alert("Can't get the canvas");
		return;
	}

	var ctx = canvas.getContext('2d');
	if(!ctx){
		alert("Can't get context of the canvas");
		return;
	}
	var xSize=new Array();
	var xTotal = 0;
	while(xTotal<800){
		var r = Math.floor((Math.random() * 100) + 1);
		xTotal = r + xTotal;
		xSize.push(r);
	}
	var ySize=new Array();
	var yTotal = 0;
	while(yTotal<800){
		var r = Math.floor((Math.random() * 100) + 1);
		yTotal = r + yTotal;
		ySize.push(r);
	}
	var xPos = 0;
	for(var x in xSize) {
		var yPos = 0;
		for(var y in ySize) {
			ctx.beginPath();
			ctx.rect(xPos,yPos,xSize[x],ySize[y]);
			ctx.fillStyle='#'+Math.floor(Math.random()*16777215).toString(16);
			ctx.fill();
			ctx.closePath();
			yPos = parseInt(yPos)+parseInt(ySize[y]);
		}
		xPos = parseInt(xPos)+parseInt(xSize[x]);
	}
}