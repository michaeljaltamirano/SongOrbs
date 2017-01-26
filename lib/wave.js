export const createWave = function(x,y) {
  let wave = {};
  wave.x = x;
  wave.y = y;
  wave.radius = 0;
  wave.alpha = 1;
  wave.color = 'black';
  wave.lineWidth = 5;
  wave.draw = (ctx) => {
    ctx.globalAlpha = wave.alpha;
    ctx.beginPath();
    ctx.arc(wave.x, wave.y, wave.radius, 0, 2 * Math.PI);
    ctx.lineWidth = wave.lineWidth;
    ctx.strokeStyle = wave.color;
    ctx.stroke();
  };
  return wave;
};
