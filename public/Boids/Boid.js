class Boid {
  constructor() {
    this.position = createVector(
      width - random(0,400),
      height - random(-50, 50)
    );
    this.perceptionRadius = 500;
    this.velocity = createVector(random(-6, 0), random(-6, 0));
    this.velocity.setMag(random(0.2, 3));
    this.acceleration = createVector();
    this.maxForce = 0.01;
    this.maxSpeed = 3;
    let colorIndex = random(1);
    let alpha = 15;
    this.frame = 1;
    if (colorIndex > 0.5) {
      this.color = color(0, 179, 255, alpha);
    } else if (colorIndex < 0.25) {
      this.color = color(174, 0, 255, alpha);
    } else {
      this.color = color(0, 0, 255, alpha);
    }
  }

  edges() {
    if (this.position.x > width + 50) {
      this.position.x = -50;
    } else if (this.position.x < -50) {
      this.position.x = width + 50;
    }
    if (this.position.y > height + 50) {
      this.position.y = -50;
    } else if (this.position.y < -50) {
      this.position.y = height +50;
    }
  }

  align(boids) {
    let steering = createVector();
    let total = 0;

    for (let other of boids) {
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other != this && d < this.perceptionRadius) {
        steering.add(other.velocity);
        total++;
      }
    }

    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }

    return steering;
  }

  cohesion(boids) {
    let steering = createVector();
    let total = 0;

    for (let other of boids) {
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other != this && d < this.perceptionRadius) {
        steering.add(other.position);
        total++;
      }
    }

    if (total > 0) {
      steering.div(total);
      steering.sub(this.position);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }

    return steering;
  }

  separation(boids) {
    let steering = createVector();
    let total = 0;

    for (let other of boids) {
      let d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other != this && d < this.perceptionRadius) {
        let diff = p5.Vector.sub(this.position, other.position);
        diff.div(d);
        steering.add(diff);
        total++;
      }
    }

    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }

    return steering;
  }

  mouseInfluence(mouseVector) {
    // if (dist(this.position.x, this.position.y, mouseX, mouseY) < this.perceptionRadius * 1.2) {
    //   let mouseVector = createVector(this.position.x, this.position.y);
    //   mouseVector.sub(mouseX, mouseY);
    //   mouseVector.setMag(
    //     3 / dist(this.position.x, this.position.y, mouseX, mouseY) + 0.01);
    //   //console.log(mouseVector);
    //   this.acceleration.add(mouseVector);
    // }
    mouseVector.limit(1);
    this.acceleration.add(mouseVector);
  }

  flock(boids) {
    let alignment = this.align(boids).mult(1.3);
    let cohesion = this.cohesion(boids).mult(2.5);
    let separation = this.separation(boids).mult(2.3);

    //   alignment.mult(alignmentSlider.value());
    //   cohesion.mult(cohesionSlider.value());
    //   separation.mult(separationSlider.value());

    this.acceleration.add(alignment);
    this.acceleration.add(cohesion);
    this.acceleration.add(separation);
  }

  update() {
    this.edges();
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.acceleration.mult(0);
  }

  show() {
    let theta = this.velocity.heading() + radians(90);

    push();
    fill(this.color);
    noStroke();
    translate(this.position.x, this.position.y);
    rotate(theta);
    let tip = createVector(0, -40);
    let left = createVector(-15, 0);
    let right = createVector(15, 0);

    triangle(tip.x, tip.y, left.x, left.y, right.x, right.y);
    pop();
  }
}
