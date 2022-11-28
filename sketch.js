function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasContainer");
  r = random(255)
  g = random(255)
  b = random(255)
  background(random(255),random(255),random(255));
  strokeWeight(random(0,15))
}

function draw() {
  if (mouseIsPressed){
    centx = width/2
    centy = height/2
    inx  = mouseX
    iny = mouseY
    tx = pmouseX
    ty = pmouseY
    stroke(r,g,b)
    line(inx,iny,tx,ty);
    line(width-inx,height-iny,width-tx,height-ty);
    line((centx-inx)+centx,iny,(centx-tx)+centx,ty);
    line(inx,(centy-iny)+centy,tx,(centy-ty)+centy);
  }
}
  function keyPressed() {
  if (keyCode === SHIFT) {
    r = random(255)
    g = random(255)
    b = random(255)
  } 
  if (keyCode === RIGHT_ARROW){
    strokeWeight(random(0,15))
  }
}
