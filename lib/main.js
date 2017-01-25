import Play from './play';
import 'createjs-easeljs';

document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  var stage = new createjs.Stage("canvas");
  canvas.style.background = 'cornflowerblue';
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  Play(canvas, ctx);
});
