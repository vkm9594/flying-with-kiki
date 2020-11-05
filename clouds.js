class Cloud {
  constructor() {
    this.x = -10;
    this.y = random(0, 2000);
    this.cloud = random(clouds);
    this.speed = 0.05;
  }

  update() {
    this.x += this.speed; // clouds just appear on the screen instead of sliding in, need to fix
  }

  show() {
    push();
    scale(0.13);
    image(this.cloud, this.x * 200, this.y);
    pop();
  }
}