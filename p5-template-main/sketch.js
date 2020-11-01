var bgMusic;
let scenery;
let rect = [];
let buildings = [];
let seagull;
let birds;
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
  for (let i = 0; i < 6; i++) {
    let b = new AddBuilding();
    rect.push(b);
  }
  birds = new AddBirds();
  character = new AddCharacter();
}

function draw() {
  image(scenery, 0, 0, width, height);

  birds.update();
  birds.show();

  character.fly();
  character.show();

  for (build of rect) {
    build.update();
    build.show();
  }

}

class Objects {

}

class AddBuilding extends Objects {
  constructor() {
    super();
    this.x = width;
    this.y = height - 400;
    this.w = random(600);
    this.h = random(400, 700);
    this.building = random(buildings);
  }

  update() {
    translate(-frameCount * 1.5, 0);
  }

  show() {
    image(this.building, this.x, this.y, this.w, this.h);
  }
}

class AddBirds extends Objects {
  constructor() {
    super();
    this.img = seagull;
    this.width = width * 2;
    this.height = random(0, 250);
  }

  update() {

  }

  show() {
    push();
    scale(0.4);
    translate(-frameCount, 0);
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
    image(kiki, 300, windowHeight * 1.5 + up);
    pop();
  }
}