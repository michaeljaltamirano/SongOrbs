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

  let aAnimation2 = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let aAnimation3 = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let aAnimation4 = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let aAnimation5 = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let aAnimation6 = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let aAnimation7 = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let aAnimation8 = anime({
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

  let bNormal = anime({
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

  let cNormal = anime({
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

  let dNormal = anime({
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

  let eNormal = anime({
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

  let fNormal = anime({
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

  let gNormal = anime({
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

  let hNormal = anime({
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

  let iAnimation2 = anime({
    targets: '.orb-i',
    translateX: ((window.innerWidth / 2 ) * 0.351),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let iNormal = anime({
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

  let jNormal = anime({
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

  let kNormal = anime({
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

  let kNormal2 = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let kReverse2 = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let kNormal3 = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let kReverse3 = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let kNormal4 = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let kReverse4 = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let kNormal5 = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let kReverse5 = anime({
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

  let lNormal = anime({
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

  let mNormal = anime({
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

  let nNormal = anime({
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

  let nNormal2 = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let nReverse2 = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let nNormal3 = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let nReverse3 = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let nNormal4 = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let nReverse4 = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let nNormal5 = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let nReverse5 = anime({
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

  let oNormal = anime({
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

  let pNormal = anime({
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

  let rAnimation2 = anime({
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

  let sNormal2 = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let sReverse2 = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let sNormal3 = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let sReverse3 = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let sNormal4 = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let sReverse4 = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let sNormal5 = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let sReverse5 = anime({
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

  let tNormal2 = anime({
    targets: '.orb-t',
    translateX: -((window.innerWidth / 2 ) * 0.505),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let tReverse2 = anime({
    targets: '.orb-t',
    translateX: -((window.innerWidth / 2 ) * 0.505),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let tNormal3 = anime({
    targets: '.orb-t',
    translateX: -((window.innerWidth / 2 ) * 0.505),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let tReverse3 = anime({
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

  let wAnimation2 = anime({
    targets: '.orb-w',
    translateX: -((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let wAnimation3 = anime({
    targets: '.orb-w',
    translateX: -((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let wAnimation4 = anime({
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

  let yAnimation2 = anime({
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

  let zAnimation2 = anime({
    targets: '.orb-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let zAnimation3 = anime({
    targets: '.orb-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let zAnimation4 = anime({
    targets: '.orb-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let zAnimation5 = anime({
    targets: '.orb-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
    easings: 'linear'
  });

  let zAnimation6 = anime({
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
  setTimeout(function(){ fNormal.play(); }, 7000);
  setTimeout(function(){ fReverse.play(); }, 9000);
  setTimeout(function(){ gNormal.play(); }, 10000);
  setTimeout(function(){ gReverse.play(); }, 12000);

  // Phase in

  setTimeout(function(){ tAnimation.play(); }, 13000);
  setTimeout(function(){ nAnimation.play(); }, 13000);
  setTimeout(function(){ nNormal.play(); }, 16000);
  setTimeout(function(){ nReverse.play(); }, 17500);
  setTimeout(function(){ nNormal2.play(); }, 19000);
  setTimeout(function(){ nReverse2.play(); }, 20500);
  //
  setTimeout(function(){ tNormal.play(); }, 22000);
  setTimeout(function(){ tReverse.play(); }, 23500);
  setTimeout(function(){ nNormal3.play(); }, 22000);
  setTimeout(function(){ nReverse3.play(); }, 23500);
  setTimeout(function(){ nNormal4.play(); }, 25000);
  setTimeout(function(){ nReverse4.play(); }, 26500);
  setTimeout(function(){ nNormal5.play(); }, 28000);
  setTimeout(function(){ nReverse5.play(); }, 29500);

  setTimeout(function(){ kAnimation.play(); }, 31000);
  setTimeout(function(){ sAnimation.play(); }, 31000);
  setTimeout(function(){ tNormal2.play(); }, 31000);
  setTimeout(function(){ tReverse2.play(); }, 33000);
  setTimeout(function(){ kNormal.play(); }, 34000);
  setTimeout(function(){ kReverse.play(); }, 35500);
  setTimeout(function(){ kNormal2.play(); }, 37000);
  setTimeout(function(){ kReverse2.play(); }, 38500);
  setTimeout(function(){ sNormal.play(); }, 34000);
  setTimeout(function(){ sReverse.play(); }, 35500);
  setTimeout(function(){ sNormal2.play(); }, 37000);
  setTimeout(function(){ sReverse2.play(); }, 38500);

  setTimeout(function(){ tNormal3.play(); }, 40000);
  setTimeout(function(){ tReverse3.play(); }, 41500);
  setTimeout(function(){ kNormal3.play(); }, 40000);
  setTimeout(function(){ kReverse3.play(); }, 41500);
  setTimeout(function(){ sNormal3.play(); }, 40000);
  setTimeout(function(){ sReverse3.play(); }, 41500);
  setTimeout(function(){ kNormal4.play(); }, 43000);
  setTimeout(function(){ kReverse4.play(); }, 44500);
  setTimeout(function(){ sNormal4.play(); }, 43000);
  setTimeout(function(){ sReverse4.play(); }, 44500);
  setTimeout(function(){ kNormal5.play(); }, 46000);
  setTimeout(function(){ kReverse5.play(); }, 47500);
  setTimeout(function(){ sNormal5.play(); }, 46000);
  setTimeout(function(){ sReverse5.play(); }, 47500);

  setTimeout(function(){ yAnimation.play(); }, 49000);
  setTimeout(function(){ aAnimation.play(); }, 49000);
  setTimeout(function(){ aAnimation2.play(); }, 52000);
  setTimeout(function(){ aAnimation3.play(); }, 55000);
  setTimeout(function(){ aAnimation4.play(); }, 58000);
  setTimeout(function(){ yAnimation2.play(); }, 61000);
  setTimeout(function(){ aAnimation5.play(); }, 61000);
  setTimeout(function(){ aAnimation6.play(); }, 64000);
  setTimeout(function(){ aAnimation7.play(); }, 67000);
  setTimeout(function(){ aAnimation8.play(); }, 70000);

  setTimeout(function(){ rAnimation.play(); }, 73000);
  setTimeout(function(){ zAnimation.play(); }, 73000);
  setTimeout(function(){ zAnimation2.play(); }, 76000);
  setTimeout(function(){ zAnimation3.play(); }, 79000);
  setTimeout(function(){ rAnimation2.play(); }, 82000);
  setTimeout(function(){ zAnimation4.play(); }, 82000);
  setTimeout(function(){ zAnimation5.play(); }, 85000);
  setTimeout(function(){ zAnimation6.play(); }, 88000);

  setTimeout(function(){ qAnimation.play(); }, 91000);
  setTimeout(function(){ wAnimation.play(); }, 103000);
  setTimeout(function(){ wAnimation2.play(); }, 109000);
  setTimeout(function(){ wAnimation3.play(); }, 115000);
  setTimeout(function(){ uAnimation.play(); }, 115000);
  setTimeout(function(){ wAnimation4.play(); }, 121000);
  setTimeout(function(){ lAnimation.play(); }, 127000);
  setTimeout(function(){ iAnimation.play(); }, 134000);
};
