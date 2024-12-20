new p5((p) => {
  let canvas;
  const eye_size = 40;
  const iris_size = 15;

  let eyes = [];
  let soots = [];
  let img;
  p.preload = function () {
    img = p.loadImage('/assets/soot.png');
  };

  p.setup = function () {
    p.pixelDensity(1);
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-2');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');

    for (let i = 0; i < 10; ++i) {
      let v;
      let too_close = true;
      let close_count = 0;
      while (too_close && close_count < 50) {
        close_count++;
        too_close = false;
        v = p.createVector(
          p.random(p.width * 0.1, p.width * 0.9),
          p.random(p.height * 0.1, p.height * 0.9)
        );
        eyes.forEach((eye) => {
          let d = p5.Vector.dist(v, eye);
          if (d < 150) {
            too_close = true;
            console.log('too close');
          }
        });
      }

      soots.push(p5.Vector.add(v, p.createVector(8, 0)));
      let v1 = p.createVector(eye_size * 0.52, 0);
      eyes.push(p5.Vector.add(v, v1));
      eyes.push(p5.Vector.sub(v, v1));
    }
    p.rectMode(p.CENTER);

    p.imageMode(p.CENTER);
    p.background(248, 99, 237);
  };

  p.draw = function () {
    p.background(248, 99, 237);

    let mouse_vector = p.createVector(p.mouseX, p.mouseY);

    p.noFill();

    p.strokeWeight(3);
    // make size of soot img smaller if screen is smaller
    soots.forEach((soot) => {
      p.image(img, soot.x, soot.y);
    });

    eyes.forEach((eye) => {
      // draw eye white
      p.fill(255);
      p.circle(eye.x, eye.y, eye_size);
      // calculate iris vector
      let iris_vector = p5.Vector.sub(mouse_vector, eye);
      iris_vector
        .normalize()
        .mult(
          p.constrain(
            p.map(
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
      p.translate(eye.x, eye.y);
      p.fill(0);
      p.circle(iris_vector.x, iris_vector.y, iris_size);
      p.resetMatrix();
    });
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
});
