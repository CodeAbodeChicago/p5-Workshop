/*
	Mapping!  map() is super useful, the end.

	New p5 variables and functions:
		width, height
		map(...)

*/ 


function setup() {

	// Create a drawing surface
	createCanvas(windowWidth, windowHeight);
	
	// Give the screen an initial black coating
	background(0);

}


function draw() {

	// Clears the screen with a transparent color
	background(0, 0, 0, 25);

	// Draw an ellipse in the center of the screen
	// 	- Use map(...) to set the radius of the ellipse using mouseX.  HINT: 
	// 	  mouseX is a value between 0 and width.
	// 	- Use map(...) to change some other aspect of your sketch using mouseY.
	// 	  HINT: mouseY is a value between 0 and height.

	var radius = map(mouseX, 0, width, 0, width);
	var weight = map(mouseY, 0, height, 0, 400);

	fill(255, 255, 255);
	stroke(255, 204, 0);
	strokeWeight(weight);
	ellipse(width / 2, height / 2, radius, radius);
}