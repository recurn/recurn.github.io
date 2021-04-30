let qtree;

let particles = [];

const flock = [];

let alignmentSlider, cohesionSlider, separationSlider;

let lastMX, lastMY, lastMouseVector;

let created = false;

let widthReduction = 20;

function setup() {

}

function windowResized() {
  let homeElementHeight = document.getElementById("splash").clientHeight;
  resizeCanvas(windowWidth - widthReduction, homeElementHeight);
}

function draw() {
  let element = document.getElementById("boids-display");
  let homeElementHeight = document.getElementById("splash").clientHeight;
  if (!created && element) {
    var clientWidth = element.clientWidth;

    var canvas = createCanvas(clientWidth - 1, homeElementHeight);
    canvas.parent("boids-display");


    lastMX = mouseX;
    lastMY = mouseY;
    lastMouseVector = createVector();

    for (let i = 0; i < 400; i++) {
      flock.push(new Boid());
    }
    created = true;
  } else if (created){
    if (flock.length < 500 && random(1) < 0.08) {
      flock.push(new Boid());
    }

    background(255);

    let mouseVector = createVector();

    mouseVector = createVector(mouseX - lastMX, mouseY - lastMY);
    lastMX = mouseX;
    lastMY = mouseY;
    mouseVector.setMag(0.02);

    if (mouseVector.equals(createVector(0, 0))) {
      mouseVector = lastMouseVector;
    } else {
      lastMouseVector = mouseVector;
    }

    let boundary = new Rectangle(width / 2, height / 2, height, width);
    qtree = new QuadTree(boundary, 4);

    for (let f of flock) {
      let point = new Point(f.position.x, f.position.y, f);
      qtree.insert(point);

      f.update();
      f.show();
      f.mouseInfluence(mouseVector);
    }

    for (let f of flock) {
      let range = new Circle(f.position.x, f.position.y, 20);
      let points = qtree.query(range);

      //console.log(range);

      if (points) {
        f.flock(points);
      }
    }
  }
}