const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

let playerState = "run";
const playerImage = new Image();
playerImage.src = "./character.png";
const spreadWidth = 575;
const spreadHeight = 523;
let gameFrame = 0;
let gameStagger = 5;
const animationFrames = [];
const animationStates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 9,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 12,
  },
  {
    name: "hit",
    frames: 4,
  },
];
animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spreadWidth;
    let positionY = index * spreadHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }
  animationFrames[state.name] = frames;
});
console.log(animationFrames);
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position =
    Math.floor(gameFrame / gameStagger) %
    animationFrames[playerState].loc.length;
  let frameX = spreadWidth * position;
  let frameY = animationFrames[playerState].loc[position].y;
  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spreadWidth,
    spreadHeight,
    0,
    0,
    spreadWidth,
    spreadHeight
  );

  gameFrame++;

  requestAnimationFrame(animate);
}

animate();
