
class Building extends Sprite {
  constructor() {
    super();
    this.x = width + 300;
    this.y = windowHeight;
<<<<<<< HEAD
    this.yConstant = 0;
=======
    this.width = buildings[0].width;
    this.height = buildings[0].height;
>>>>>>> 36aa8c9319921c034dce1ee0ceb1449740b0d858
    // this.building = random(buildings);
    this.building = buildings[0];
    this.speed = 2.5;
    this.radius = 200;

  }

  show() {
    if (this.building === buildings[0]) {
      push();
      circle(this.x, this.y - 230 , this.radius * 2);
      scale(1.05);
      imageMode(CENTER)
      image(buildings[0], this.x * 0.9523, this.y - 250);
      noFill();
<<<<<<< HEAD
      // circle(this.x, this.y - 255 , this.radius * 2);
      // noFill();
      // strokeWeight(4);
      // stroke('red');
      // rect(this.x * 0.9523, this.y - 470, buildings[0].width, buildings[0].height); // hitbox?
=======
      strokeWeight(3);
      stroke('red');
      rect(this.x * 0.9523, this.y - 470, buildings[0].width, buildings[0].height);
      // line(0, height - 320 + buildings[1].height, this.x, height - 320 + buildings[1].height)
>>>>>>> 36aa8c9319921c034dce1ee0ceb1449740b0d858
      pop();
    }
    if (this.building === buildings[1]) {
      push();
      scale(0.5);
      image(buildings[1], this.x * 2, this.y - 250);
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
      image(buildings[4], this.x * 2.222, this.y - 15);
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
