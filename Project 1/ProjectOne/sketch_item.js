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
  textSize(36)
  textStyle(BOLD);
  fill(255);
  textFont('SF Pro Display');
  text('Recylce', 20, 50);
  textSize(36)
  textStyle(BOLD);
  fill(255);
  textFont('SF Pro Display');
  text('Paper Cups', 87, 130);
  fill(255);
  rect(307, 23, 48, 8, 8);
  rect(307, 36, 48, 8, 8);
  rect(307, 49, 48, 8, 8);
  fill(196);
  stroke(128, 128, 128);
  strokeWeight(4);
  rect(28, 168, 320, 320, 16);
  textSize(18)
  textStyle(NORMAL);
  fill(255);
  textWrap(WORD);
  noStroke();
  textFont('SF Pro Display');
  text('Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', 28, 550, 320);
  //image(img1, 218, 736, 60, 60);

  triangle(187, 791, 153, 756, 222, 756);

}
