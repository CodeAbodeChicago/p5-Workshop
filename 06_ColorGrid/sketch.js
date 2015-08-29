/*
	Color grid - nested loops again

	Fill the screen with a 2D grid of squares representing a color gradient.
	For this, I've choosen to use HSB for the gradient:
		- The x position in the grid controls the hue
		- The y position in the grid controls the brightness

	For extras:
		- The mouseX changes the saturation of the *whole* grid
		- The mouseY changes the size of the squares in the grid 
*/ 

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100);
}

function draw() {

	// EXTRA
	// Map the mouseY to the size of the grid
	// Map the mouseX to the saturation of the whole gradient
	var squareSize = map(mouseY, 0, height, 25, width);
	var s = map(mouseX, 0, width, 0, 100);

	for (var y = 0; y < height; y += squareSize) {
		// We've got the y position of the square, so map that to the brightness
		var b = map(y, 0, height, 100, 0);

		for (var x = 0; x < width; x += squareSize) {
			// Now we've also got the x position, map that to the hue
			var h = map(x, 0, width, 0, 360);

			noStroke();
			fill(h, s, b);
			rect(x, y, squareSize, squareSize);
		}
	}
}