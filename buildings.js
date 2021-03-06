
class Building extends Sprite {
  constructor() {
    super();
    this.x = width + 300;
    this.y = windowHeight;
    this.yConstant = 0;
    this.building = random(buildings);
    // this.building = buildings[1];
    this.speed = 2.5;
    this.radius = 200;

  }

  show() {
    if (this.building === buildings[0]) {
      push();
      scale(1.05);
      // imageMode(CENTER)
      // noFill();
      // circle((this.x * 0.9523), this.y - 230 , this.radius * 2);
      
      //image(buildings[0], this.x * 0.9523, this.y - 470);
      image(buildings[0], this.x * 0.9523, this.y * 0.9523 - buildings[0].height);

      // circle(this.x, this.y - 255 , this.radius * 2);
      // noFill();
      // strokeWeight(4);
      // stroke('red');
      // rect(this.x * 0.9523, this.y - 230, buildings[0].width, buildings[0].height); // hitbox?
      pop();
    }
    if (this.building === buildings[1]) {
      push();
      scale(0.5);
      // image(buildings[1], this.x * 2, this.y - 250);
      image(buildings[1], this.x * 2, this.y * 2 - buildings[1].height);
      pop();
    }
    if (this.building === buildings[2]) {
      push();
      scale(0.4);
      // image(buildings[2], this.x * 2.5, this.y + 320);
      image(buildings[2], this.x * 2.5, this.y * 2.5 - buildings[2].height);
      pop();
    }
    if (this.building === buildings[3]) {
      push();
      scale(1.5);
      // image(buildings[3], this.x * 0.667, this.y - 500);
      image(buildings[3], this.x * 0.667, this.y * 0.667 - buildings[3].height);
      pop();
    }
    if (this.building === buildings[4]) {
      push();
      scale(0.45);
      // image(buildings[4], this.x * 2.222, this.y - 15);
      image(buildings[4], this.x * 2.222, this.y * 2.222 - buildings[4].height);
      pop();
    }
    if (this.building === buildings[5]) {
      push();
      scale(0.4);
      // image(buildings[5], this.x * 2.5, this.y + 500);
      image(buildings[5], this.x * 2.5, this.y  * 2.5 - buildings[5].height);
      pop();
    }
  }
}
