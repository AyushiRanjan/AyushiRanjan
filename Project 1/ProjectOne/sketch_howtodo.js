
function setup() {
  // put setup code here
  createCanvas(375, 812);
  link = createA('file:///Users/jimlin/Desktop/p5/ProjectOne/item.html', '');
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

  fill(196);
  ellipseMode(CORNER);
  ellipse(56,176,100);
  ellipse(56,336,100);
  ellipse(56,496,100);

  textSize(18)
  textStyle(NORMAL);
  fill(255);
  textFont('SF Pro Display');
  text('Wash it!', 176, 230);
  text('Break it down!', 176, 390);
  text('Put it in the correct trash bin!', 176, 530,150);

  rect(20, 638, 335, 2);
  text('Or', 20, 665);
  text('Just use reusable cup!', 20, 690);

  img = createImg('https://raw.githubusercontent.com/OverMochi/project1/main/button1.png','file:///Users/jimlin/Desktop/p5/ProjectOne/item.html').parent(link);
  img.position(98, 752);
  img.size(180,40);
}
