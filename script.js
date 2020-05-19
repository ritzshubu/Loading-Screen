
"use strict";
let creator;
let fpsdisp;
let w, h;
let circles = [];

class Circle {
  constructor(x, y, r, g, b, w) {
    this.pos = createVector(x, y);
    this.radius = 10;
    this.r = r;
    this.g = g;
    this.b = b;
    this.w = w;
    this.dy = random(-0.05, 0.05);
    this.angle = 0;
    this.alpha = 255;
  }
  show() {
    noFill();
    stroke(this.r, this.g, this.b, this.alpha);
    strokeWeight(this.w);
    circle(this.pos.x, this.pos.y, this.radius)
  }
  update() {
    push();
      this.radius += 0.1;
      this.alpha -= 0.1;
      this.pos.y -= this.dy;
      rotate(this.angle);
      this.angle += PI/90;
      this.show();
    pop();
  }
}
function setup() {
  if (windowWidth > displayWidth) {
    w = displayWidth;
    h = displayHeight*0.8;
  } else {
    w = windowWidth;
    h = windowHeight;
  }
  createCanvas(w, h);
  background(20);
  //setTimeout(drawCircle, 500);
  fpsdisp = createSpan().id("fps");
  creator = createSpan().id("creator"); 
  creator.html("created by SSR");
}

function draw() {
  background(20, 20);
  fpsdisp.html("fps: "+floor(frameRate()));
   if (frameCount%120 == 0) {
    //if (random(100)>99) 
    circles.push(new Circle(0, 0, random(255), random(255), random(255), random(4)));
}
  push();
    translate(width/2, height/2);
    for (let i=0; i<circles.length; i++) {
      circles[i].update();
      if (circles[i].alpha <= 0) circles.splice(i,1);
    }
  pop();
}
//function drawCircle() {
  //circles.push(new Circle(0, 0, random(255), random(255), random(255), random(4)));
  //setTimeout(drawCircle, 2000);
//}