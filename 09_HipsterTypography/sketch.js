/*
	Loading a font

	Since this sketch loads a font, it *needs* to be viewed through a local 
	server.

	The font is called Great Vibes and is available online at fontsquirrel.com:
		http://www.fontsquirrel.com/fonts/great-vibes

	New p5 variables and functions:
		loadFont(...)
		textFont(...)
		textSize(...)
		text(...)
		split(...)
		round(...)
		translate(...)
		rotate(...)
*/ 

// A string pulled from the hipster ipsum
var hipsterString = "Chia normcore distillery bitters PBR&B meditation, street art YOLO twee slow-carb paleo Shoreditch quinoa Bushwick vegan. Readymade pug synth, farm-to-table skateboard Intelligentsia PBR you probably haven't heard of them next level cred PBR&B forage swag McSweeney's. Schlitz umami raw denim readymade letterpress, sustainable before they sold out mixtape bitters. Gentrify blog mustache scenester. Leggings tote bag craft beer Intelligentsia. Pitchfork Helvetica cliche, lomo put a bird on it master cleanse Carles beard whatever PBR. Fanny pack single-origin coffee wayfarers, quinoa small batch fap meh.";
// A variable to hold an array of words
var hipsterWords;
// A variable to hold our font once it is loaded
var cursiveFont;


function preload() {
	cursiveFont = loadFont("assets/GreatVibes-Regular.otf");
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont(cursiveFont); // Set the font to be the font we loaded
	background(0); // Initial black coat for the canvas

	// Take a string of words and turn it into an array of words by "splitting"
	// the string anywhere there is a space.  We'll use this to generate a 
	// random hipster word.
	hipsterWords = split(hipsterString, " ");
}


// Custom function to return a random word from the hipsterWords array
function getRandomWord() {
	var i = round(random(0, hipsterWords.length - 1));
	// Note: random gives us a number with a decimal, so round is used to turn 
	// that into an integer.  You can't use a decimal as an array index. 
	return hipsterWords[i];
}


function draw() {

	background(0, 5); // Slowly clear the screen to black

	// If the mouse is pressed, draw a random word on the screen at a random
	// position. 
	// EXTRA: Make the word have a random rotation
	if (mouseIsPressed) {	
		// Styling
		fill(255);
		strokeWeight(2);
		textSize(random(50, 200)); // Random size for the text

		// Random position
		var x = random(-200, width);
		var y = random(-200, height);

		// Random word
		var word = getRandomWord();

		// Regular solution
		// text(word, x, y);

		// EXTRA: adding rotation
		// This is complicated and I would recommend checking out this 
		// processing tutorial: https://processing.org/tutorials/transform2d/
		translate(x, y);
		rotate(random(-PI/10, PI/10));
		text(word, 0, 0);
	}

}


// RESIZE
// Called when the browser window is resized - used here to resize the canvas 
// to match the browser
function windowResized() {
	resizeCanvas(window.innerWidth, window.innerHeight);
}