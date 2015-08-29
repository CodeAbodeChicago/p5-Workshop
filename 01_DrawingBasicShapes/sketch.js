/*
	Now, let's create some shapes with p5.	Ellipses, lines, points, oh my.

	New p5 variables and functions:
		setup(), draw()
		createCanvas()
		windowWidth, windowHeight
		background(...)
		fill(...), noFill(...)
		stroke(...), noStroke(...), strokeWeight(...)
		ellipse(...), rect(...), line(...), point(...),	triangle(...)
*/ 


// Check out index.html


// Setup runs ONCE at the start of the sketch
function setup() {

	// Create a canvas that takes up the whole window
	createCanvas(windowWidth, windowHeight);

}


// After setup is run, draw runs continuously at 60 fps
function draw() {

	// Draw a background
	background(0, 0, 0);

	// Applying some styling
	fill(255, 255, 255);
	stroke(255, 204, 0);
	strokeWeight(10);

	// Draw an ellipse
	ellipse(100, 100, 100, 100);

	// Draw a line & point with the same styling
	line(200, 100, 200, 300);
	point(300, 300);

	// Draw a rect and triangle with a different styling
	noStroke();
	fill(0, 255, 255);
	rect(400, 200, 150, 200, 40);
	triangle(500, 600, 600, 400, 700, 600);

}