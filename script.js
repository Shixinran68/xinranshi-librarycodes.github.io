// inspired from https://p5play.org/learn/sprite.html
// library found from: https://github.com/molleindustria/p5.play

function setup() {
 createCanvas(400,400);
}

function draw() {
  stroke(0, 0, 255);
  fill(230, 80, 90);
  textAlign(CENTER);
  textSize(20)
  //the text on the center
  text('Take a break! Click the canvas to play!!!', width / 2, height / 2);

  // let mousepressed to control the generation of "sprite"
  if (mouse.pressed()) {
    let s = new Sprite(mouse.x, mouse.y, 40, 40);
    
    // velovities of the sprite
    s.vel.x = random(-10, 10);
    s.vel.y = random(-10, 10);
  }
}

