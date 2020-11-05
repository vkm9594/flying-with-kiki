var bgMusic;
var jumpSound;
var deathSound;
let screen;
let titleImage;
let scenery;
let clouds = [];
let addClouds = [];
let addBuilding = [];
let buildings = [];
let buildingScale = [];
let seagull;
let addBirds = [];
let kiki;
let addCharacter;
let up = 0;
let gameOver;

function preload() {
  soundFormats('ogg', 'mp3');
  bgMusic = loadSound('sounds/kiki-theme.mp3');
  jumpSound = loadSound('sounds/jump-sound.mp3');
  deathSound = loadSound('sounds/death-sound.mp3');
  titleImage = loadImage('images/title-screen.png');
  scenery = loadImage('images/background.jpg');
  for (i = 0; i < 4; i++) {
    clouds[i] = loadImage('images/cloud' + i + '.png');
  }
  seagull = loadImage('images/seagull.gif');
  kiki = loadImage('images/kiki.png');
  for (i = 0; i < 6; i++) {
    buildings[i] = loadImage('images/building' + i + '.png');
  }
  gameOver = loadImage('images/game-over.png');
  screen = 0;
}

function setup() {
  screen = 0;
  createCanvas(windowWidth - 2, windowHeight - 3);
  bgMusic.loop();
  bgMusic.setVolume(0.2);
  jumpSound.playMode('restart');
  jumpSound.setVolume(0.1);
  deathSound.setVolume(0.2);
  addClouds.push(new Cloud);
  addBuilding.push(new Building);
  addBirds.push(new Bird);
  addCharacter = new Character();
}

function draw() {
  if (screen === 0) {
    image(titleImage, 0, 0, windowWidth, windowHeight);
  }

  if (screen === 1) {
    image(scenery, 0, 0, width, height);
    for (i = addClouds.length - 1; i >= 0; i--) {
      addClouds[i].update();
      addClouds[i].show();
    }
    for (i = addBuilding.length - 1; i >= 0; i--) {
      addBuilding[i].update();
      addBuilding[i].show();
    }
    for (i = addBirds.length - 1; i >= 0; i--) {
      addBirds[i].update();
      addBirds[i].show();
    }
    if (frameCount % 300 === 0) {
      addClouds.push(new Cloud);
      addBuilding.push(new Building);
      addBirds.push(new Bird);
    }
    if (frameCount % 700 === 0) {
      addClouds.push(new Cloud);
    }
    addCharacter.fly();
    addCharacter.show();
  }

  for (var i = 0; i < addBirds.length; i++) {
    if (addCharacter.hits(addBirds[i])) { // kiki checks every bird (hopefully)
      bgMusic.stop();
      deathSound.play();
      image(gameOver, 0, 0, windowWidth, windowHeight);
      noLoop();
    }
  }

  for (var j = 0; i < addBuilding.length; j++) {
    if (addCharacter.hits2(addBuilding[j])) {
      bgMusic.stop();
      deathSound.play();
      image(gameOver, 0, 0, windowWidth, windowHeight); // game over image not appearing?
      noLoop();
    }
  }

}

function mousePressed() {
  screen = 1;
}

class Sprite {
  update() {
    this.x -= this.speed;
  }
}