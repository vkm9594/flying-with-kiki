class Character {
  constructor() {
    this.img = kiki;
    this.x = 300;
    this.width = kiki.width / 2;
    this.height = kiki.height / 2;
    this.radius = 105;

    this.hits = function(other) {
      var d = dist(this.x, windowHeight * 1.5 + up, other.x, other.y);
      if (d < this.radius + other.radius) {
        return true;
      } else {
        return false;
      }
    }

    this.hits2 = function(other2) {
<<<<<<< HEAD
      var d2 = dist(this.x, windowHeight * 1.5 + up, other2.x, other2.y - 255)
        if (d < this.radius + other2.radius) {
          return true;
        } else {
          return false;
        }
=======
      var upper = this.height + -windowHeight * 1.5 + 150;
      var left = 0;
      var d = dist(this.x, windowHeight * 1.5 + up, buildings[0].x * 1.25, buildings[0].y - 470);
>>>>>>> 36aa8c9319921c034dce1ee0ceb1449740b0d858

      // if (other2 === buildings[0]) {
      //   if(upper < 500 || left < 99999) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // }
<<<<<<< HEAD

      if (other2 === buildings[0]) {
        if(d < buildings[0].width + this.radius) {
          return true;
        } else {
          return false;
        }

      }
=======
    //   if (other2 === buildings[0]) {
    //     if(d < buildings[0].width + this.radius) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
>>>>>>> 36aa8c9319921c034dce1ee0ceb1449740b0d858
    }
    
  }

  

  fly() {
    if ((keyIsDown(32)) && (up > -windowHeight * 1.5 + 150)) {
      jumpSound.play();
      up -= 5;
    }
    if ((keyIsPressed === false) && (up < 0)) {
      up += 5;
    }
  }

  show() {
    push();
    scale(0.5);
    imageMode(CENTER);
    image(this.img, this.x, windowHeight * 1.5 + up);

    noFill();
    stroke('red')
    circle(this.x, windowHeight * 1.5 + up, this.radius * 2); // hitbox

    // rect(this.x - this.left, windowHeight * 1.5 + up, 25, kiki.width / 2, kiki,height / 2);

    pop();
  }

}