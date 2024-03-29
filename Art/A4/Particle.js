
function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(width), random(height));
  this.acc = createVector(random(width), random(height));
  this.maxspeed = 1;

  this.prevPos = this.pos;

  this.follow = function(vectors) {
    let x = floor(this.pos.x / scl);
    let y = floor(this.pos.y / scl);
    let index = x + y * cols;
    let force = vectors[index];
    this.applyForce(force);

  }

  this.update = function() {
    this.vel.add(random(-5,5));
    this.vel.limit(this.maxspeed);
    this.pos.add(random(-5,5), random(-5,5));
    this.acc.mult(0);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.show = function() {
    strokeWeight(random(5));
    let r = random(10,100);
    arc(this.pos.x, this.pos.y, r, r, TWO_PI, 0);
    noFill();
    //point(this.pos.x, this.pos.y);
    this.updatePrev();
  }

  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }
  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  }
}
