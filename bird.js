class Bird extends Sprite {
  constructor() {
    super();
    this.img = loadImage("images/seagull.gif");
    this.x = width * 2.5;
    this.y = random(100, 275);
    this.radius = 55;
    this.speed = 5;

  }

  show() {
    push();
    scale(0.5);
    imageMode(CENTER);
    image(this.img, this.x, this.y);
    // noFill();
    // stroke('red')
    // circle(this.x, this.y, this.radius * 2) //hitbox
    pop();
  }
}