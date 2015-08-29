/*
	Mouse + Random

	New p5 variables and functions:
		random(...)
*/ 


function setup() {

	// Create a drawing surface
	createCanvas(windowWidth, windowHeight);
	
	// Fill the screen with an initial color - black
	background(0);

}


function draw() {

	// Don't clear the screen this time

	// If the left mouse button is pressed, draw a circle on the screen with a
	// random color.  I'd recommend a random grayscale value.
	// If the right mouse button is pressed, clear the screen.
	if (mouseIsPressed) {
		if (mouseButton === LEFT) {
			var c = random(0, 255);
			fill(c);
			noStroke();
			ellipse(mouseX, mouseY, 100, 100);
		}		
		else if (mouseButton === RIGHT) {
			background(0);
		}
	}
}
