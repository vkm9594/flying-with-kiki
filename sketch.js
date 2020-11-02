var bgMusic;
let scenery;
let addBuilding = [];
let buildings = [];
let buildingScale = [];
let seagull;
let Addbirds = [];
let kiki;
let Addcharacter;
let up = 0;

function preload() {
  soundFormats('ogg', 'mp3');
  bgMusic = loadSound('sounds/kiki-theme.mp3');
  scenery = loadImage('images/background.jpg');
  seagull = loadImage('images/seagull.gif');
  kiki = loadImage('images/kiki.png');
  for (i = 0; i < 6; i++) {
    buildings[i] = loadImage('images/building' + i + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // bgMusic.play();
  addBuilding.push(new Building);
  Addbirds.push(new Bird);
  Addcharacter = new Character();
}

function draw() {
  image(scenery, 0, 0, width, height);

  for (i = addBuilding.length - 1; i >= 0; i--) {
    addBuilding[i].update();
    addBuilding[i].show();
  }

  for (i = Addbirds.length - 1; i >= 0; i--) {
    Addbirds[i].update();
    Addbirds[i].show();
  }

  Addcharacter.fly();
  Addcharacter.show();

  if (frameCount % 200 === 0) {
    addBuilding.push(new Building);
    Addbirds.push(new Bird);
  }
}

class Sprite { 
  update() {
    this.x -= this.speed;
  }
}

class Building extends Sprite {
  constructor() {
    super();
    this.x = width;
    this.y = height - 350;
    this.w = random(600);
    this.h = random(400, 700);
    this.building = random(buildings);
    this.speed = 2.5;
  }

  show() {
    image(this.building, this.x, this.y);
  }
}

class Bird extends Sprite {
  constructor() {
    super();
    this.img = loadImage("images/seagull.gif");
    this.x = width * 3;
    this.height = random(0, 200);
    this.speed = 2.5;
  }

  show() {
    push();
    scale(0.4);
    image(this.img, this.x, this.height);
    pop();
  }
}

class Character {
  constructor() {
    this.img = kiki;
    this.width = 300;
  }

  fly() {
    if ((keyIsDown(32)) && (up > -windowHeight * 1.5 + 150)) {
      up -= 5
    }
    if ((keyIsPressed === false) && (up < 0)) {
      up += 5
    }
  }

  show() {
    push();
    scale(0.5)
    imageMode(CENTER);
    image(this.img, this.width, windowHeight * 1.5 + up); // why do the constructor variables not work?
    pop();
  }
}