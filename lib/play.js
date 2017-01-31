import anime from 'animejs';
import Howler from 'howler';
import { SOUNDS } from './sounds';
import { MUSIC_KEYS } from './music_keys';
import { orbEffects } from './orb_effects';
import { createWave } from './wave';
import { createOrbs } from './orb';
import _ from 'lodash';

export const play = (canvas, ctx) => {
  let orbs = [];

  const resetCanvas = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resetCanvas, false);

  document.addEventListener('keydown', function(e) {
    if (MUSIC_KEYS.indexOf(e.keyCode) > -1 ) {
      new Howl({ src: SOUNDS[e.keyCode] }).play();
      generateOrb(orbEffects[e.key]);
    }
  });

  const removeAnimation = function(songAnimation) {
    const index = orbs.indexOf(songAnimation);
    if (index > -1) {
      orbs.splice(index, 1);
    }
  };

  const generateOrb = function(orbEffect) {
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const songOrbs = createOrbs(x, y, orbEffect);
    const wave = createWave(x, y);
    const width = canvas.width / 2;
    const songOrbsAnimation = anime({
      targets: songOrbs,
      x: function(orb) { return orb.x + anime.random(-width, width); },
      y: function(orb) { return orb.y + anime.random(-width/1.50, width/1.50); },
      duration: function () { return anime.random(...orbEffect.duration); },
      radius: orbEffect.animeRadius,
      easing: 'easeOutCirc',
      complete: removeAnimation
    });
    const waveAnimation = anime({
      targets: wave,
      duration: 4000,
      radius: canvas.width * 1.5,
      easing: 'easeOutCirc',
      complete: removeAnimation
    });
    orbs.push(songOrbsAnimation);
    orbs.push(waveAnimation);
  };

  const loop = anime({
    duration: Infinity,
    update: function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      orbs.forEach(function(songAnimation) {
        songAnimation.animatables.forEach(function(animatable) {
          animatable.target.draw(ctx);
        });
      });
    },
  });
};
