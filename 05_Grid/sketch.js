/*
	Grids!  Nested loops aren't so scary.  To create a grid, we need something
	that looks like this (in pseudocode):

		for (y positions that are evenly spaced along the screen)
			for (x positions that are evenly spaced along the screen)
				draw a rectangle at (x, y)

		The inner loop creates a row of rectangles.  The outer loop repeats the
		row at different y positions, creating a grid.

	New p5 variables and functions:
		dist(...)
		colorMode(...)

*/ 


function setup() {

	// Create a drawing surface
	createCanvas(windowWidth, windowHeight);

	// Switch color modes to HSB - setting the max values for H, S, and B to be 
	// 360, 100 & 100 respectively.  Colors will now be interpreted as HSB, e.g.
	// fill(...)  
	colorMode(HSB, 360, 100, 100);
}


function draw() {

	// Draw a background
	background(0, 25);

	// Create a grid of ellipses (or rects or triangles) that cover the screen
	// 	- To create a row of ellipses, you'll want to create a loop that takes 
	// 	  an x position variable from 0 (left of the screen) to width (right 
	// 	  side of the screen).  Instead of stepping by 1 each iteration of the
	// 	  loop, try stepping by something greater than or equal to 50.  
	// 	- To repeat that row and make a grid, you'll want to nest you x position
	// 	  loop inside of a loop that contols the y position.

	var gridSize = 50; 	// Grid sizes smaller than this will be taxing on your
						// computer's processor!

	// This loop repeats the row and makes a grid
	for (var y = 0; y < height; y += gridSize) {

		// This loop creates a row
		for (var x = 0; x < width; x += gridSize) {

			// Regular solution: filled circle grid
			// fill(0, 50, 100);
			// ellipse(x, y, 50, 50);

			// EXTRA 1
			// var h = map(x, 0, width, 0, 360);
			// var s = map(y, 0, height, 0, 100);
			// fill(h, s, 100);
			// ellipse(x, y, 50, 50);

			// EXTRA 2
			var d = dist(mouseX, mouseY, x, y);
			var r = map(d, 0, 500, 100, 10);
			var h = map(d, 0, width, 0, 360);
			// You can also make this fill transparent for some extra fun...
			fill(h, 50, 100);  
			ellipse(x, y, r, r);

			// Note about line 56 - if d is outside of the range 0 - 500, r will
			// *not* go out of the range 100 - 10.  If d is 1000, r will max 
			// out at 10.  Map(...) caps the values returned.


		}
	}

	// EXTRAS
	// 	1. Use map(...) to change the color of the circles in the grid based on
	// 	   their x & y position.
	// 	2. Make it interactive.  dist(...) calculates the distance between two 
	// 	   points.  Let's use the distance between the mouse and each circle in 
	// 	   the grid to do something fun:
	// 	   	- When drawing a circle in the grid, find the distance between the 
	// 	   	  circle's x & y and the mouseX & mouseY.
	// 	   	- Map that distance to some aspect of the circle's visual properties
	// 	   	  (e.g. radius, hue, brightness, transparency, etc.).  You'll want 
	// 	   	  to use the map(...) function.
}