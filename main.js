const canvasScreen = document.querySelector("canvas");
const canvasContext = canvasScreen.getContext("2d");

const windowPixelSize = {
  width: innerWidth,
  height: innerHeight,
};

canvasScreen.width = windowPixelSize.width;
canvasScreen.height = windowPixelSize.height;

addEventListener("resize", () => {
  canvasScreen.width = windowPixelSize.width;
  canvasScreen.height = windowPixelSize.height;
});

let wave = {
  y: canvasScreen.height / 2,
  length: 0.01,
  amplitude: 100,
  frequency: 0.01,
};

const strokeColors = {
  h: 200,
  s: 50,
  l: 50,
};

const backgroundColors = {
  r: 0,
  b: 10,
  g: 0,
  alpha: 1,
};

let increment = wave.frequency;

function animateWave() {
  requestAnimationFrame(animateWave);
  canvasContext.fillStyle = `rgba(${backgroundColors.r},${backgroundColors.b},${backgroundColors.g},${backgroundColors.alpha})`;
  canvasContext.fillRect(0, 0, canvasScreen.width, canvasScreen.height);

  canvasContext.beginPath();
  canvasContext.moveTo(0, canvasScreen.height / 2);

  for (let index = 0; index < canvasScreen.width; index++) {
    canvasContext.lineTo(
      index,
      wave.y + Math.sin(index * wave.length + increment) * wave.amplitude * Math.sin(increment),
    );
  }

  canvasContext.strokeStyle = `hsl(${Math.abs(strokeColors.h * Math.sin(increment))}, ${
    strokeColors.s
  }%, ${strokeColors.l}%)`;
  canvasContext.lineWidth = 1.4
  canvasContext.stroke();

  increment += wave.frequency;
}
animateWave();
