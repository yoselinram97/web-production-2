let angle = 0;

function setup() {
  createCanvas(800,400);
  background(0);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  
  
  //top shapes that appear as clouds
    noStroke();
for (var x = -380; x < width+45; x += 100) {
 fill('#293050');
 ellipse(x, -15, 140, 100);
 }
  
  //background(0);
  fill(42, 42, 53, 15);
  rect(0, 0, width, height);
  
  fill(255);
  ellipse(random(width), random(height), 3, 3);
  
  push();
  fill('#a2b4c2');
  noStroke();
  translate(400, 80);
  rotate(angle);
  rectMode(CENTER);
  rect(0, 0, 75, 75, 33);
  angle = angle + 2;
  pop();
  
  
    
//for buildings
  strokeWeight(1);
  stroke('#9fb1bf');
  let c = color('#405b6c');
fill(c);
  rect(0, 250, 100, 150);
  rect(100, 270, 60, 130);
  rect(160, 220, 80, 190);
  rect(240, 230, 60, 170);
  rect(300, 210, 80, 190);
  rect(380, 280, 60, 130);
  rect(440, 210, 80, 190);
  rect(520, 190, 60, 210);
  rect(580, 210, 80, 190);
  rect(660, 330, 60, 100);
  rect(720, 215, 80, 190);
  
}
