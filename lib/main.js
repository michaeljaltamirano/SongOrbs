import { play } from './play';

document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.background = 'cornflowerblue';
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  play(canvas, ctx);
});
