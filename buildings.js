
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
      image(buildings[2], this.x * 2, this.y - 300);
      pop();
    }
    if (this.building === buildings[3]) {
      push();
      scale(1.5);
      image(buildings[3], this.x * 0.667, this.y - 690);
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
