var bgMusic;
var jumpSound;
var deathSound;
let scenery;
let addBuilding = [];
let buildings = [];
let buildingScale = [];
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
  createCanvas(windowWidth - 2, windowHeight - 3);
  bgMusic.loop();
  bgMusic.setVolume(0.2);
  jumpSound.playMode('restart');
  jumpSound.setVolume(0.1);
  deathSound.setVolume(0.1);
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

    if (frameCount % 300 === 0) {
      addBuilding.push(new Building);
      addBirds.push(new Bird);
    }
  }
  addCharacter.fly();
  addCharacter.show();

  // if(addCharacter.hits(addBuilding) || addCharacter.hits(addBirds)) {
  //   deathSound.play();
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
    this.y = windowHeight;
    this.building = random(buildings);
    // this.building = buildings[5];
    this.speed = 2.5;
  }

  show() {
    if (this.building === buildings[0]) {
      push();
      scale();
      image(buildings[0], this.x, this.y - 500);
      pop();
    }
    if (this.building === buildings[1]) {
      push();
      scale(0.5);
      image(buildings[1], this.x * 2, this.y - 325);
      pop();
    }
    if (this.building === buildings[2]) {
      push();
      scale(0.5);
      image(buildings[2], this.x * 2, this.y - 150);
      pop();
    }
    if (this.building === buildings[3]) {
      push();
      scale(1.5);
      image(buildings[3], this.x * 0.667, this.y - 700);
      pop();
    }
    if (this.building === buildings[4]) {
      push();
      scale(0.5);
      image(buildings[4], this.x * 2, this.y - 300);
      pop();
    }
    if (this.building === buildings[5]) {
      push();
      scale(0.5);
      image(buildings[5], this.x * 2, this.y - 300);
      pop();
    }
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
      // jumpSound.volume(0.5);
      jumpSound.play();
      up -= 5
    }
    if ((keyIsPressed === false) && (up < 0)) {
      up += 5
    }
  }

  show() {
    push();
    scale(0.5);
    imageMode(CENTER);
    image(this.img, this.x, windowHeight * 1.5 + up);
    pop();
  }

}