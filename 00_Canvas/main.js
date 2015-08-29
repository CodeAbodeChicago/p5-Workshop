/* 
	HTML Canvas Demo - no p5js :(

	We do this so that we understand what p5 is doing for us under the hood.

	If you want to dive into HTML canvas without a library, check out:
		1. http://diveintohtml5.info/canvas.html
		2. https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
*/

// Add a canvas to index.html and give it a width and height attribute.  
// Apply some styling to give it a border and center it on the page. 

// Get the canvas object
var canvas = document.getElementById("canvas");

// Create a drawing context - defines whether we will be drawing in 2D or 3D 
var ctx = canvas.getContext("2d");

// Drawing a solid rectangle
// 	- Set the current style
// 	- Draw the rectangle with the current style
// 		- What's the coordinate system?
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(200, 100, 400, 400);

// Drawing a rectangle outline
ctx.strokeStyle = "rgb(0, 0, 255)";
ctx.lineWidth = 20;
ctx.strokeRect(300, 200, 200, 200);

// Adding an event to draw a random rectangle
canvas.onclick = function () {
	var x = Math.random() * 800;
	var y = Math.random() * 600;
	var s = Math.random() * 100 + 50;
	ctx.fillStyle = "hsl(" + Math.random() * 255 + ", 75%, 50%)";
	ctx.fillRect(x, y, s, s);
}