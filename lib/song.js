import anime from 'animejs';
import Sounds from './sounds';
import { MusicKeys } from './music_keys';
import Howler from 'howler';
import { orbEffects } from './orb_effects';

export const song = function(window) {
  let aAnimation = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let linearA = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let reverseA = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let bAnimation = anime({
    targets: '.orb-b',
    translateX: ((window.innerWidth / 2 ) * 0.895),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let bLinear = anime({
    targets: '.orb-b',
    translateX: ((window.innerWidth / 2 ) * 0.895),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let bReverse = anime({
    targets: '.orb-b',
    translateX: ((window.innerWidth / 2 ) * 0.895),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let cAnimation = anime({
    targets: '.orb-c',
    translateX: ((window.innerWidth / 2 ) * 0.818),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let cLinear = anime({
    targets: '.orb-c',
    translateX: ((window.innerWidth / 2 ) * 0.818),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let cReverse = anime({
    targets: '.orb-c',
    translateX: ((window.innerWidth / 2 ) * 0.818),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let dAnimation = anime({
    targets: '.orb-d',
    translateX: ((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let dLinear = anime({
    targets: '.orb-d',
    translateX: ((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let dReverse = anime({
    targets: '.orb-d',
    translateX: ((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let eAnimation = anime({
    targets: '.orb-e',
    translateX: ((window.innerWidth / 2 ) * 0.663),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let eLinear = anime({
    targets: '.orb-e',
    translateX: ((window.innerWidth / 2 ) * 0.663),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let eReverse = anime({
    targets: '.orb-e',
    translateX: ((window.innerWidth / 2 ) * 0.663),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let fAnimation = anime({
    targets: '.orb-f',
    translateX: ((window.innerWidth / 2 ) * 0.585),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let fLinear = anime({
    targets: '.orb-f',
    translateX: ((window.innerWidth / 2 ) * 0.585),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let fReverse = anime({
    targets: '.orb-f',
    translateX: ((window.innerWidth / 2 ) * 0.585),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let gAnimation = anime({
    targets: '.orb-g',
    translateX: ((window.innerWidth / 2 ) * 0.507),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let gLinear = anime({
    targets: '.orb-g',
    translateX: ((window.innerWidth / 2 ) * 0.507),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let gReverse = anime({
    targets: '.orb-g',
    translateX: ((window.innerWidth / 2 ) * 0.507),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let hAnimation = anime({
    targets: '.orb-h',
    translateX: ((window.innerWidth / 2 ) * 0.429),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let hLinear = anime({
    targets: '.orb-h',
    translateX: ((window.innerWidth / 2 ) * 0.429),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let hReverse = anime({
    targets: '.orb-h',
    translateX: ((window.innerWidth / 2 ) * 0.429),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let iAnimation = anime({
    targets: '.orb-i',
    translateX: ((window.innerWidth / 2 ) * 0.351),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let iLinear = anime({
    targets: '.orb-i',
    translateX: ((window.innerWidth / 2 ) * 0.351),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let iReverse = anime({
    targets: '.orb-i',
    translateX: ((window.innerWidth / 2 ) * 0.351),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let jAnimation = anime({
    targets: '.orb-j',
    translateX: ((window.innerWidth / 2 ) * 0.273),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let jLinear = anime({
    targets: '.orb-j',
    translateX: ((window.innerWidth / 2 ) * 0.273),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let jReverse = anime({
    targets: '.orb-j',
    translateX: ((window.innerWidth / 2 ) * 0.273),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let kAnimation = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let kLinear = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let kReverse = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let lAnimation = anime({
    targets: '.orb-l',
    translateX: ((window.innerWidth / 2 ) * 0.118),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let lLinear = anime({
    targets: '.orb-l',
    translateX: ((window.innerWidth / 2 ) * 0.118),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let lReverse = anime({
    targets: '.orb-l',
    translateX: ((window.innerWidth / 2 ) * 0.118),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let mAnimation = anime({
    targets: '.orb-m',
    translateX: ((window.innerWidth / 2 ) * 0.039),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let mLinear = anime({
    targets: '.orb-m',
    translateX: ((window.innerWidth / 2 ) * 0.039),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let mReverse = anime({
    targets: '.orb-m',
    translateX: ((window.innerWidth / 2 ) * 0.039),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let nAnimation = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let nLinear = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let nReverse = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let oAnimation = anime({
    targets: '.orb-o',
    translateX: -((window.innerWidth / 2 ) * 0.116),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let oLinear = anime({
    targets: '.orb-o',
    translateX: -((window.innerWidth / 2 ) * 0.116),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let oReverse = anime({
    targets: '.orb-o',
    translateX: -((window.innerWidth / 2 ) * 0.116),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let pAnimation = anime({
    targets: '.orb-p',
    translateX: -((window.innerWidth / 2 ) * 0.194),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let pLinear = anime({
    targets: '.orb-p',
    translateX: -((window.innerWidth / 2 ) * 0.194),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let pReverse = anime({
    targets: '.orb-p',
    translateX: -((window.innerWidth / 2 ) * 0.194),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let qAnimation = anime({
    targets: '.orb-q',
    translateX: -((window.innerWidth / 2 ) * 0.272),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let qNormal = anime({
    targets: '.orb-q',
    translateX: -((window.innerWidth / 2 ) * 0.272),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let qReverse = anime({
    targets: '.orb-q',
    translateX: -((window.innerWidth / 2 ) * 0.272),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let rAnimation = anime({
    targets: '.orb-r',
    translateX: -((window.innerWidth / 2 ) * 0.348),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let rNormal = anime({
    targets: '.orb-r',
    translateX: -((window.innerWidth / 2 ) * 0.348),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let rReverse = anime({
    targets: '.orb-r',
    translateX: -((window.innerWidth / 2 ) * 0.348),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let sAnimation = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let sNormal = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let sReverse = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let tAnimation = anime({
    targets: '.orb-t',
    translateX: -((window.innerWidth / 2 ) * 0.505),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let tNormal = anime({
    targets: '.orb-t',
    translateX: -((window.innerWidth / 2 ) * 0.505),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let tReverse = anime({
    targets: '.orb-t',
    translateX: -((window.innerWidth / 2 ) * 0.505),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let uAnimation = anime({
    targets: '.orb-u',
    translateX: -((window.innerWidth / 2 ) * 0.583),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let uNormal = anime({
    targets: '.orb-u',
    translateX: -((window.innerWidth / 2 ) * 0.583),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let uReverse = anime({
    targets: '.orb-u',
    translateX: -((window.innerWidth / 2 ) * 0.583),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let vAnimation = anime({
    targets: '.orb-v',
    translateX: -((window.innerWidth / 2 ) * 0.660),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let vNormal = anime({
    targets: '.orb-v',
    translateX: -((window.innerWidth / 2 ) * 0.660),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let vReverse = anime({
    targets: '.orb-v',
    translateX: -((window.innerWidth / 2 ) * 0.660),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let wAnimation = anime({
    targets: '.orb-w',
    translateX: -((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let wNormal = anime({
    targets: '.orb-w',
    translateX: -((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let wReverse = anime({
    targets: '.orb-w',
    translateX: -((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let xAnimation = anime({
    targets: '.orb-x',
    translateX: -((window.innerWidth / 2 ) * 0.820),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let xNormal = anime({
    targets: '.orb-x',
    translateX: -((window.innerWidth / 2 ) * 0.820),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let xReverse = anime({
    targets: '.orb-x',
    translateX: -((window.innerWidth / 2 ) * 0.820),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let yAnimation = anime({
    targets: '.orb-y',
    translateX: -((window.innerWidth / 2 ) * 0.895),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let yNormal = anime({
    targets: '.orb-y',
    translateX: -((window.innerWidth / 2 ) * 0.895),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let yReverse = anime({
    targets: '.orb-y',
    translateX: -((window.innerWidth / 2 ) * 0.895),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let zAnimation = anime({
    targets: '.orb-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let zNormal = anime({
    targets: '.orb-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let zReverse = anime({
    targets: '.orb-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'Reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  // Intro/Warmup

  setTimeout(function(){ fAnimation.play(); }, 1000);
  setTimeout(function(){ gAnimation.play(); }, 4000);
  setTimeout(function(){ fLinear.play(); }, 7000);
  setTimeout(function(){ fReverse.play(); }, 9000);
  setTimeout(function(){ gLinear.play(); }, 10000);
  setTimeout(function(){ gReverse.play(); }, 12000);

  // Phase in Drums

  setTimeout(function(){ fLinear.play(); }, 13000);
  //
  // setTimeout(function(){ fAnimation.play(); }, 1000);
  // setTimeout(function(){ gAnimation.play(); }, 4000);
  // setTimeout(function(){ fLinear.play(); }, 7000);
  // setTimeout(function(){ fReverse.play(); }, 9000);
  // setTimeout(function(){ gLinear.play(); }, 10000);
  // setTimeout(function(){ gReverse.play(); }, 12000);
  // setTimeout(function(){ fLinear.play(); }, 13000);
  //
  // setTimeout(function(){ fAnimation.play(); }, 1000);
  // setTimeout(function(){ gAnimation.play(); }, 4000);
  // setTimeout(function(){ fLinear.play(); }, 7000);
  // setTimeout(function(){ fReverse.play(); }, 9000);
  // setTimeout(function(){ gLinear.play(); }, 10000);
  // setTimeout(function(){ gReverse.play(); }, 12000);
  // setTimeout(function(){ fLinear.play(); }, 13000);
  //
  // setTimeout(function(){ fAnimation.play(); }, 1000);
  // setTimeout(function(){ gAnimation.play(); }, 4000);
  // setTimeout(function(){ fLinear.play(); }, 7000);
  // setTimeout(function(){ fReverse.play(); }, 9000);
  // setTimeout(function(){ gLinear.play(); }, 10000);
  // setTimeout(function(){ gReverse.play(); }, 12000);
  // setTimeout(function(){ fLinear.play(); }, 13000);

};
