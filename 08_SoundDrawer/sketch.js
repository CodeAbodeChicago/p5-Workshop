/*
	Music drawer
	
	Since this sketch loads a sound file, it *needs* to be viewed through a 
	local server.

	Similar to the last one but interactive this time.

	New p5 variables and functions:
		windowResized()
*/ 

var musicTrack;

function preload() {
	musicTrack = loadSound("assets/CarriedAway_DillonFrancisRemix.mp3");
	// Don't leave this function empty!
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	musicTrack.play();
	background(0);
}

function draw() {
	background(0, 3);
	if (mouseIsPressed) {
		var level = musicTrack.getLevel();
		var radius = map(level, 0, 1, 50, 400);
		var c = map(level, 0, 1, 100, 255);
		fill(c, 0, c, 100);
		stroke(255);
		strokeWeight(5);
		ellipse(mouseX, mouseY, radius, radius);
	}
}

// RESIZE
// Called when the browser window is resized - used here to resize the canvas 
// to match the browser
function windowResized() {
	resizeCanvas(window.innerWidth, window.innerHeight);
}