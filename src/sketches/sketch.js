let canvas;

let eyes = [];
let soots = [];
let eye_size = 40;
let iris_size = 15;

function preload() {
  img = loadImage('/assets/soot.png');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  for (let i = 0; i < 10; ++i) {
    let v;
    let too_close = true;
    while (too_close) {
      too_close = false;
      v = createVector(
        random(width * 0.1, width * 0.9),
        random(height * 0.1, height * 0.9)
      );
      eyes.forEach((eye) => {
        let d = p5.Vector.dist(v, eye);
        if (d < 150) {
          too_close = true;
          console.log('too close');
        }
      });
    }

    soots.push(p5.Vector.add(v, createVector(8, 0)));
    let v1 = createVector(eye_size * 0.52, 0);
    eyes.push(p5.Vector.add(v, v1));
    eyes.push(p5.Vector.sub(v, v1));
  }

  imageMode(CENTER);
}

function draw() {
  background(248, 99, 237);

  let mouse_vector = createVector(mouseX, mouseY);
  strokeWeight(3);
  soots.forEach((soot) => {
    image(img, soot.x, soot.y);
  });

  eyes.forEach((eye) => {
    // draw eye white
    fill(255);
    circle(eye.x, eye.y, eye_size);
    // calculate iris vector
    let iris_vector = p5.Vector.sub(mouse_vector, eye);
    iris_vector
      .normalize()
      .mult(
        constrain(
          map(
            p5.Vector.dist(mouse_vector, eye),
            0,
            eye_size,
            0,
            eye_size / 2 - iris_size / 2
          ),
          0,
          eye_size / 2 - iris_size / 2
        )
      );
    // .mult(15);

    // draw iris
    translate(eye.x, eye.y);
    fill(0);
    circle(iris_vector.x, iris_vector.y, iris_size);
    resetMatrix();
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
