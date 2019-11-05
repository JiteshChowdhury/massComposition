var webcam;
function setup() {
	var canvas = createCanvas(innerWidth, innerHeight);
	canvas.parent('sketch-div');
	webcam = createCapture(VIDEO);
	webcam.size(innerWidth, innerHeight);
	noStroke();
	fill(25,25,25);
	rectMode(CENTER);
}

function draw() {
	background(255);
	webcam.loadPixels();
	var stepSize = round(constrain(mouseX/8, 6, 35));
	for (var y=0; y<=innerHeight; y+=stepSize) {
		for (var x=0; x<=innerWidth; x+=stepSize) {
		  var i = y * innerWidth + x;
		  var darkness = (255 - webcam.pixels[i*4]) / 255;
		  var length = stepSize * darkness;
		  rect(x,y,length*1.5,length*1.5);
		}
	}
	image(webcam, 0, 0, 150, 120);
}
