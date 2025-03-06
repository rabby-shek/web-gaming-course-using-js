const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "./character.png";
const spreadWidth = 575;
const spreadHeight = 523;
let frameX = 0;
let frameY = 3;
let gameFrame = 0;
let gameStagger = 5;
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(
    playerImage,
    frameX * spreadWidth,
    frameY * spreadHeight,
    spreadWidth,
    spreadHeight,
    0,
    0,
    spreadWidth,
    spreadHeight
  );
  if (gameFrame % gameStagger === 0) {
    if (frameX < 6) {
      frameX++;
    } else {
      frameX = 0;
    }
  }

  gameFrame++;

  requestAnimationFrame(animate);
}

animate();
