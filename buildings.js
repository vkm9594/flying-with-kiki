
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
      scale(1.05);
      image(buildings[0], this.x * 1.25, this.y - 470 );
      noFill();
      strokeWeight(4)
      stroke('red')
      rect(this.x * 1.25, this.y - 470, buildings[0].width, buildings[0].height)
      // line(0, height - 320 + buildings[1].height, this.x, height - 320 + buildings[1].height)
      pop();
    }
    if (this.building === buildings[1]) {
      push();
      scale(0.5);
      image(buildings[1], this.x * 2.5, this.y - 250);
      pop();
    }
    if (this.building === buildings[2]) {
      push();
      scale(0.4);
      image(buildings[2], this.x * 2.5, this.y + 320);
      pop();
    }
    if (this.building === buildings[3]) {
      push();
      scale(1.5);
      image(buildings[3], this.x * 0.667, this.y - 500);
      pop();
    }
    if (this.building === buildings[4]) {
      push();
      scale(0.45);
      image(buildings[4], this.x * 2.5, this.y - 15);
      pop();
    }
    if (this.building === buildings[5]) {
      push();
      scale(0.4);
      image(buildings[5], this.x * 2.5, this.y + 500);
      pop();
    }
  }
}
