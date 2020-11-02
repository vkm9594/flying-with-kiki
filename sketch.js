var bgMusic;
let scenery;
let build = [];
let buildings = [];
let seagull;
let birds = [];
let kiki;
let character;
let up = 0;

function preload() {
  soundFormats('ogg', 'mp3');
  bgMusic = loadSound('kiki-theme.mp3');
  scenery = loadImage('buildings/background.jpg');
  seagull = loadImage('buildings/seagull.gif');
  kiki = loadImage('buildings/kiki.png');
  for (i = 0; i < 6; i++) {
    buildings[i] = loadImage('buildings/building' + i + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // bgMusic.play();
  build.push(new AddBuilding);
  birds.push(new AddBirds);
  character = new AddCharacter();
}

function draw() {
  image(scenery, 0, 0, width, height);

  for (i = build.length - 1; i >= 0; i--) {
    build[i].update();
    build[i].show();
  }

  for (i = birds.length - 1; i >= 0; i--) {
    birds[i].update();
    birds[i].show();
  }

  character.fly();
  character.show();

  if (frameCount % 200 === 0) {
    build.push(new AddBuilding);
    birds.push(new AddBirds);
  }
}

class Objects {

}

class AddBuilding extends Objects {
  constructor() {
    super();
    this.x = width;
    this.y = height - 350;
    this.w = random(600);
    this.h = random(400, 700);
    this.building = random(buildings);
    this.speed = 2.5;
  }

  update() {
    this.x -= this.speed;
  }

  show() {
    // imageMode(CORNER);
    image(this.building, this.x, this.y, this.w, this.h);
  }
}

class AddBirds extends Objects {
  constructor() {
    super();
    this.img = seagull;
    this.width = width * 3;
    this.height = random(0, 200);
    this.speed = 2.5;
  }

  update() {
    this.width -= this.speed;
  }

  show() {
    push();
    scale(0.4);
    // translate(-frameCount * 5, 0);
    image(this.img, this.width, this.height);
    pop();
  }
}

class AddCharacter extends Objects {
  constructor() {
    super();
    this.img = kiki;
    this.width = 300;
    this.height = windowHeight * 1.5 + up;
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
    image(kiki, 300, windowHeight * 1.5 + up); // why do the constructor variables not work?
    pop();
  }
}