let scenery;
let rect = [];
let buildings = [];
let seagull;
let kiki;
let up = 0;

function preload() {
  scenery = loadImage('buildings/background.jpg');
  seagull = loadImage('buildings/seagull.gif');
  kiki = loadImage('buildings/kiki.png');
  for (i = 0; i < 6; i++) {
    buildings[i] = loadImage('buildings/building' + i + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 6; i++) {
    let x = width;
    let y = height - 400;
    let w = random(600);
    let h = random(400, 700);
    let b = new AddBuilding(x, y, w, h);
    rect.push(b);
  }
}

function draw() {
  image(scenery, 0, 0, width, height);

  push();
  scale(0.5);
  translate(-frameCount, 0);
  image(seagull, width * 2, 0);
  pop();

  push();
  scale(0.5)
  imageMode(CENTER);
  image(kiki, 300, windowHeight * 1.5 + up);
  pop();
  fly();

  for (build of rect) {
    build.update();
    build.show();
  }

}

class AddBuilding {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.building = random(buildings);
  }

  update() {
    translate(-frameCount * 1.5, 0);
  }

  show() {
    image(this.building, this.x, this.y, this.w, this.h);
  }
}

function fly() {
  if ((keyIsDown(32)) && (up > -windowHeight * 1.5 + 150)) {
    up -= 5
  }
  if ((keyIsPressed === false) && (up < 0)) {
    up += 5
  }
}