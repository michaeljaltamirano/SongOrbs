import { play } from './play';
import { song } from './song';

document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.background = 'cornflowerblue';
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  document.addEventListener('keypress', function(e) {
    let key = e.keyCode;
    if (key === 13) {
      play(canvas, ctx);
      song(window);
      $("#splash").removeClass("modal");
      $("#splash").addClass("hide");
      $("#background").removeClass("background");
    } else if (key === 32) {
      play(canvas, ctx);
      $("#splash").removeClass("modal");
      $("#splash").addClass("hide");
      $("#background").removeClass("background");
      $(".orbs").addClass("hide");
      $(".circle-orb-parent").addClass("hide");
    }
  });
});
