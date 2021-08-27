let font;
let graphic;
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function preload() {
  font = loadFont('../../assets/spacegrotesk-medium.otf')
}

function setup() {
  createCanvas(canvasWidth, window.innerHeight);
  
  graphic = createGraphics(canvasWidth, canvasHeight);
  
  graphic.textAlign(CENTER, CENTER);
  graphic.textSize(600);
  graphic.textFont(font);
}

function draw() {
  background(0)
  
  const tileSize = 50;
  
  for (let x = 0; x < 12; x = x +1) {
    for (let y = 0; y < 12; y = y +1) {
      
      const color = `rgba(${x*20}, 0, ${y+frameCount}, 0.2)`;
      
      graphic.fill(color);
      graphic.text('a', width /1.95, height /2.95);
      
      const distortion = sin(frameCount * 0.05 + x * 0.2 + y * 0.2) * 50;
      
      //source
      const sx = x * tileSize + distortion;
      const sy = y * tileSize;
      const sw = tileSize;
      const sh = tileSize;

      //destination
      const dx = x * tileSize;
      const dy = y * tileSize;
      const dw = tileSize;
      const dh = tileSize;
      
      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
    }
  }
}