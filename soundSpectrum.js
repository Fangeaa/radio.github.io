let mic, fft;

function setup() {
  createCanvas(windowWidth, 100);
  noFill();

  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT(0.8, 64);
  fft.setInput(mic);
}

function draw() {
  background(0);

  let spectrum = fft.analyze();

  beginShape();
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    vertex(x, height);
    vertex(x, h);
  }
  endShape();
}
