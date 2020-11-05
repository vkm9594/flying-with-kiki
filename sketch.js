var bgMusic;
var jumpSound;
var deathSound;
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
  titleImage = loadImage('images/title-screen.jpg');
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
}

function setup() {
  createCanvas(windowWidth - 2, windowHeight - 3);
  // bgMusic.loop();
  // bgMusic.setVolume(0.2);
  // jumpSound.playMode('restart');
  // jumpSound.setVolume(0.1);
  deathSound.setVolume(0.1);
  addClouds.push(new Cloud);
  addBuilding.push(new Building);
  addBirds.push(new Bird);
  addCharacter = new Character();
}

function draw() {
 // beginGame();
 image(scenery, 0, 0, width, height);
  if (key == ' ') {
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
  }
  addCharacter.fly();
  addCharacter.show();

  for(var i = 0; i < addBirds.length; i++) {
    if(addCharacter.hits(addBirds[i])){ // kiki checks every bird (hopefully)
      deathSound.play();
      image(gameOver, 0, 0, windowWidth, windowHeight);
      noLoop();
    }
  }

  for(var j = 0; i < addBuilding.length; j++) {
    if(addCharacter.hits2(addBuilding[j])) {
      deathSound.play();
      image(gameOver, 0, 0, windowWidth, windowHeight); // game over image not appearing?
      noLoop();
    }
  }

  circle(this.x - frameCount, this.y - 255 , this.radius * 2);

}

// function beginGame() {
//   image(titleImage, 0, 0, windowWidth, windowHeight);
//   if(keyCode === ENTER) {
//     image(scenery, 0, 0, width, height);
//     addCharacter.fly();
//     addCharacter.show();
//   }
// }

class Sprite {
  update() {
    this.x -= this.speed;
  }
}
