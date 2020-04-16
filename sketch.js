var col = 200;
var c= 100;
var d= 155;


function setup() {
 
  
  
  createCanvas(400, 400);
  
}

function draw() {
 
  col,c,d = mouseX/3;
  background (col,c,d);
  fill (250,188, 222);
  ellipse (mouseX, mouseY, 50, 50);
}
  