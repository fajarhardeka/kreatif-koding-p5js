function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(0);

  // style the arc
  noStroke();
  fill(255, 0, 127);


  // Maken bite animations speed
  let biteSize = PI / 16;
  let startAngle = biteSize * sin(frameCount * 0.1) + biteSize; 
  let endAngle = TWO_PI - startAngle;
  
  // draw the arc
  arc(50, 50, 80, 80, startAngle, endAngle, PIE);
}

/* 

arc (x, y, w, h, start, loop, stop, [mode], [detail]) 
x = number of x-coordinate of the arc's ellipse.
y = number of y-coordinate of the arc's ellipse.
w = width of the arc ellipse by default.
h = height of the arc's ellipse by default.
start = angle to start the arc, in specified radians.
stop = angle to stop the arc, in specified radians.
mode = constant: optional parameter to determine the way of
drawing the arc, either CHORD, PIE, or OPEN (optional).
detail = optional parameter to for WebGL, mode only.
This is to specify the number of vertices that makes up
the perimeter of the arc. Default value is 25. 
Won't draw a stroke for detail of more than 50. (optional)

*/
