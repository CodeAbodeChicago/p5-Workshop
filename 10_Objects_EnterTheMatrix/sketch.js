/*
	Matrix-style falling text :)

	Since this sketch loads a font, it *needs* to be viewed through a local 
	server.

	This relies on our object knowledge.  We are going to treat each falling 
	character as an object that has: an x position, a y position, a speed and a
	letter.

	New p5 variables and functions:
		char(...)

*/ 


var characters = []; // An array to hold our falling character objects
var numCharacters = 500; // Num of character objects we'll create
var myFont; // A variable to hold our font once it is loaded


function preload() {
	myFont = loadFont("assets/agency-fb.ttf");
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0); // Initial black coat of color

	textFont(myFont); // Set the font to be the font we loaded
	textSize(40); // Set the text size for the rest of the sketch

	// Create our array of character objects
	for (var i = 0; i < numCharacters; i += 1) {
		var charObj = {
			letter: getRandomLetter(),
			x: random(0, width),
			y: random(0, height),
			speed: random(1.5, 2.5)
		};
		characters.push(charObj);
	}
}


// Custom function to create a random letter
// char(...) is a p5 function that converts a number to a string.  This uses 
// something called ASCII encoding to associate characters with numbers.  Check
// out this table: http://www.ascii-code.com/.  Char(...) takes a number in the 
// "dec" colum and turns it into "symbol" column
function getRandomLetter() {
	// Print a num that converts to a printable character
	var num = round(random(25, 255));
	return char(num);
}


// Custom function to update the position of all our characters
// 	1. Move them downward by their speed, and if they've passed the bottom of 
// 	   the screen, put them back at the top of the screen.
// 	2. Pick a new random letter 
function updateCharacters() {
	for (var i = 0; i < numCharacters; i += 1) {
		characters[i].y += characters[i].speed;
		if (characters[i].y > height) {
			characters[i].y = 0;
		}
		characters[i].letter = getRandomLetter();
	}
}


function draw() {
	background(0, 10); // Slowly clear to black

	stroke(0);
	strokeWeight(1);

	// Regular solution: set the style to a glowing green for drawing
	// fill(41, 255, 123);

	// EXTRA: let the mouse position control HSB	
	colorMode(HSB, 360, 100, 100);	
	var h = map(mouseX, 0, width, 0, 360);
	var s = map(mouseY, 0, height, 0, 100);
	fill(h, s, 100);	

	// Update all the characters
	updateCharacters();

	// Loop through the characters and draw them
	for (var i = 0; i < numCharacters; i += 1) {
		text(characters[i].letter, characters[i].x, characters[i].y);
	}
}