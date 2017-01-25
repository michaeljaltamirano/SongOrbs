import Sounds from './sounds';
import MusicKeys from './music_keys';
import Howler from 'howler';
import easeljs from 'createjs-easeljs';

const play = (function(canvas, ctx) {
  
  const resetCanvas = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resetCanvas, false);

  document.addEventListener('keydown', function(e) {
    if (MusicKeys.indexOf(e.keyCode) > 0 ) {
      new Howl({ src: Sounds[e.keyCode] }).play();
      fallingOrbs();
    }
  });

  const fallingOrbs = function() {
    var stage = new createjs.Stage("canvas");
    var circle = new createjs.Shape();
    let minimum = 0;
    let maximumWidth = canvas.width - 600;
    let maximumHeight = canvas.height - 400;
    let randomX = Math.floor(Math.random() * (maximumWidth - minimum + 1)) + minimum;
    let randomY = Math.floor(Math.random() * (maximumHeight - minimum + 1)) + minimum;
    circle.graphics.beginFill("red").drawCircle(randomX, randomY, 50);
    let anotherRandomX = Math.floor(Math.random() * (maximumWidth - minimum + 1)) + minimum;
    let anotherRandomY = Math.floor(Math.random() * (maximumHeight - minimum + 1)) + minimum;
    circle.x = anotherRandomX;
    circle.y = anotherRandomY;
    stage.addChild(circle);
    stage.update();
  };
});

module.exports = play;
