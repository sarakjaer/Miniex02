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
  ellipse(45, 55, 10, 10);
  ellipse(65, 45, 10, 10);
  line(5, 85, 30, 110);
  line(80, 110, 110, 85);
  line(40, 145, 40, 175);
  line(70, 145, 70, 175);
}