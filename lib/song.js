import anime from 'animejs';
import Sounds from './sounds';
import { MusicKeys } from './music_keys';
import Howler from 'howler';
import { orbEffects } from './orb_effects';

export const song = function(window) {
  var aAnimation = anime({
    targets: '.ball-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var bAnimation = anime({
    targets: '.ball-b',
    translateX: ((window.innerWidth / 2 ) * 0.895),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var cAnimation = anime({
    targets: '.ball-c',
    translateX: ((window.innerWidth / 2 ) * 0.818),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var dAnimation = anime({
    targets: '.ball-d',
    translateX: ((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var eAnimation = anime({
    targets: '.ball-e',
    translateX: ((window.innerWidth / 2 ) * 0.663),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var fAnimation = anime({
    targets: '.ball-f',
    translateX: ((window.innerWidth / 2 ) * 0.585),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var gAnimation = anime({
    targets: '.ball-g',
    translateX: ((window.innerWidth / 2 ) * 0.507),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var hAnimation = anime({
    targets: '.ball-h',
    translateX: ((window.innerWidth / 2 ) * 0.429),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var iAnimation = anime({
    targets: '.ball-i',
    translateX: ((window.innerWidth / 2 ) * 0.351),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var jAnimation = anime({
    targets: '.ball-j',
    translateX: ((window.innerWidth / 2 ) * 0.273),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var kAnimation = anime({
    targets: '.ball-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var lAnimation = anime({
    targets: '.ball-l',
    translateX: ((window.innerWidth / 2 ) * 0.118),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var mAnimation = anime({
    targets: '.ball-m',
    translateX: ((window.innerWidth / 2 ) * 0.039),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var nAnimation = anime({
    targets: '.ball-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var oAnimation = anime({
    targets: '.ball-o',
    translateX: -((window.innerWidth / 2 ) * 0.116),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var pAnimation = anime({
    targets: '.ball-p',
    translateX: -((window.innerWidth / 2 ) * 0.194),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var qAnimation = anime({
    targets: '.ball-q',
    translateX: -((window.innerWidth / 2 ) * 0.272),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var rAnimation = anime({
    targets: '.ball-r',
    translateX: -((window.innerWidth / 2 ) * 0.348),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var sAnimation = anime({
    targets: '.ball-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var tAnimation = anime({
    targets: '.ball-t',
    translateX: -((window.innerWidth / 2 ) * 0.505),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var uAnimation = anime({
    targets: '.ball-u',
    translateX: -((window.innerWidth / 2 ) * 0.583),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var vAnimation = anime({
    targets: '.ball-v',
    translateX: -((window.innerWidth / 2 ) * 0.660),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var wAnimation = anime({
    targets: '.ball-w',
    translateX: -((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var xAnimation = anime({
    targets: '.ball-x',
    translateX: -((window.innerWidth / 2 ) * 0.820),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var yAnimation = anime({
    targets: '.ball-y',
    translateX: -((window.innerWidth / 2 ) * 0.895),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var zAnimation = anime({
    targets: '.ball-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  var zzAnimation = anime({
    targets: '.ball-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    delay: 1000,
    elasticity: -1500,
    easings: 'linear'
  });
};
