import { play } from './play';
import fallingOrbs from './falling_orbs';

document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.background = 'cornflowerblue';
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  play(canvas, ctx);
  fallingOrbs(canvas, ctx);
});
