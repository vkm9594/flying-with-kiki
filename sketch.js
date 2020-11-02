var bgMusic;
var jumpSound;
var deathSound;
let scenery;
let addBuilding = [];
let buildings = [];
// let buildingScale = [];
let seagull;
let addBirds = [];
let kiki;
let addCharacter;
let up = 0;

function preload() {
  soundFormats('ogg', 'mp3');
  bgMusic = loadSound('sounds/kiki-theme.mp3');
  jumpSound = loadSound('sounds/jump-sound.mp3');
  deathSound = loadSound('sounds/death-sound.mp3');

  scenery = loadImage('images/background.jpg');
  seagull = loadImage('images/seagull.gif');
  kiki = loadImage('images/kiki.png');
  for (i = 0; i < 6; i++) {
    buildings[i] = loadImage('images/building' + i + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgMusic.loop();
  jumpSound.playMode('restart');
  addBuilding.push(new Building);
  addBirds.push(new Bird);
  addCharacter = new Character();
}

function draw() {
  image(scenery, 0, 0, width, height);

  if (key == ' ') {
    for (i = addBuilding.length - 1; i >= 0; i--) {
      addBuilding[i].update();
      addBuilding[i].show();
    }

    for (i = addBirds.length - 1; i >= 0; i--) {
      addBirds[i].update();
      addBirds[i].show();
    }

    if (frameCount % 200 === 0) {
      addBuilding.push(new Building);
      addBirds.push(new Bird);
    }
  }
  
  addCharacter.fly();
  addCharacter.show();

  // if(addCharacter.hits(addBuilding) || addCharacter.hits(addBirds)) {
  //   deathSound.play();
  //   console.log('GAME OVER');
  //   noLoop();
  // }
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
    image(this.building, this.x, this.y, this.w, this.h);
  }
}

class Bird extends Sprite {
  constructor() {
    super();
    this.img = loadImage("images/seagull.gif");
    this.x = width * 3;
    this.y = random(0, 200);
    this.speed = 2.5;
  }

  show() {
    push();
    scale(0.4);
    image(this.img, this.x, this.y);
    pop();
  }
}

class Character {
  constructor() {
    this.img = kiki;
    this.x = 300;
  }

  fly() {
    if ((keyIsDown(32)) && (up > -windowHeight * 1.5 + 150)) {
      jumpSound.play();
      up -= 5
    }
    if ((keyIsPressed === false) && (up < 0)) {
      up += 5
    }
  }

  // hits(Bird) {
  //   collideRectRect(200, 200, 100, 150, mouseX, mouseY, 50, 75);
  // }

  show() {
    push();
    scale(0.5);
    imageMode(CENTER);
    image(this.img, this.x, windowHeight * 1.5 + up);
    pop();
  }
}