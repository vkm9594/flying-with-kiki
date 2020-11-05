
class Building extends Sprite {
  constructor() {
    super();
    this.x = width;
    this.y = windowHeight;
    // this.building = random(buildings);
    this.building = buildings[0];
    this.speed = 2.5;
  }

  show() {
    if (this.building === buildings[0]) {
      push();
      //scale(0.8);
      image(buildings[0], this.x * 1.25, this.y - 405 );
      noFill();
      strokeWeight(4)
      stroke('red')
      rect(this.x * 1.25, this.y - 405, buildings[0].width, buildings[0].height)
      // line(0, height - 320 + buildings[1].height, this.x, height - 320 + buildings[1].height)
      pop();
    }
    if (this.building === buildings[1]) {
      push();
      scale(0.4);
      image(buildings[1], this.x * 2.5, this.y + 70);
      pop();
    }
    if (this.building === buildings[2]) {
      push();
      scale(0.4);
      image(buildings[2], this.x * 2.5, this.y + 140);
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
      scale(0.4);
      image(buildings[4], this.x * 2.5, this.y + 100);
      pop();
    }
    if (this.building === buildings[5]) {
      push();
      scale(0.4);
      image(buildings[5], this.x * 2.5, this.y + 110);
      pop();
    }
  }
}
