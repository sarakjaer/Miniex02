function setup() {
createCanvas(displayWidth,displayHeight);
}

function draw() {
  background(255, 255, 0);
  fill(240, 255, 255); 
  ellipse(56, 46, 55, 55);
  triangle(10, 145, 55, 75, 100, 145);
  fill(0);
  arc(55, 60, 16, 16, 0,3.14, PI+QUARTER_PI, CHORD);
  fill(255)
  ellipse(45, 45, 10, 10);
  ellipse(65, 45, 10, 10);
}