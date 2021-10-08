var img1;

//function preload() {
//  img1 = loadImage('next.png');
//}

function setup() {
  // put setup code here
  createCanvas(375, 812);
}

function draw() {
  // put drawing code here
  background(141);
  fill(190);
  noStroke();
  rect(0, 0, 375, 80);
  fill(255);
  rect(307, 23, 48, 8, 8);
  rect(307, 36, 48, 8, 8);
  rect(307, 49, 48, 8, 8);
  textSize(36)
  textStyle(BOLD);
  fill(255);
  textFont('SF Pro Display');
  text('Recylce', 20, 50);
  textSize(28)
  textStyle(BOLD);
  fill(255);
  textFont('SF Pro Display');
  text('Paper Cups', 20, 130);
  textSize(18)
  textStyle(NORMAL);
  fill(255);
  noStroke();
  textFont('SF Pro Display');
  text('What is the material of the composition?', 20, 162);

  fill(196);
  ellipseMode(CORNER);
  ellipse(56,216,100);
  ellipse(56,364,100);
  ellipse(56,512,100);
  rect(153,264,54,4);
  rect(153,412,54,4);
  rect(153,560,54,4);

  rect(211,216,100,100,16);
  rect(211,364,100,100,16);
  rect(211,512,100,100,16);

  fill(255);
  triangle(187, 791, 153, 756, 222, 756);

}
