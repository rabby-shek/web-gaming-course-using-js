const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImg = new Image();
playerImg.src = "./gl.jpg";
const spritWidth =626 / 6 + 20;
const spritHeight = 626 / 4 + 10;
let frameX = 0;
let frameY = 3;
let gameFrame = 0;
const staggerFrame = 5;
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(
    playerImg,
    4 * spritWidth,
    0,
    spritWidth ,
    spritHeight,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );
  if (gameFrame % staggerFrame == 0) {
    if (frameX < 6) frameX++;
    else frameX = 0;
   
  }
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
