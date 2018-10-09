function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  var a = 8;
  var b = 8;
  var r, g;
  r = random(255);
  g = random(255);

//circle 1
  noStroke();
  fill(216, 191, 216, 50);
  ellipse(a, b, 18, 18);

//dot1
  for (var x = a - 20; x < width + 100; x += 20) {
    for (var y = b - 20; y < height + 100; y += 20) {
      // line(x,0,x,height);
      // line(0,y,width,y);
      fill(r, g, 216, 80);
      ellipse(x, y, 8, 8);
      ellipse(x, y, 19, 19);
    }
  }

//rect
  for (var m = a; m < width + 100; m += 40) {
    for (var n = b; n < height + 100; n += 40) {
      fill(216, g, 216, 100);
      rect(m, n, 20, 20, 4);
    }
  }
  for (var m = a - 20; m < width + 100; m += 40) {
    for (var n = b - 20; n < height + 100; n += 40) {
      fill(216, g, 216, 70);
      rect(m, n, 20, 20, 4);
    }
  }

//dot
  for (var p = a; p < width + 100; p += 20) {
    for (var q = b; q < height + 100; q += 20) {
      fill(r, 215, 0, 100);
      ellipse(p - 20, q - 20, 14, 14);
    }
  }
  for (var p = a + 10; p < width + 100; p += 20) {
    for (var q = b + 10; q < height + 100; q += 20) {
      fill(r, 215, 0, 100);
      ellipse(p, q, 7, 7);
    }
  }

}
