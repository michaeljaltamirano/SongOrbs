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
  });

  let aAnimation2 = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let aAnimation3 = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let aAnimation4 = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let aAnimation5 = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let aAnimation6 = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let aAnimation7 = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let aAnimation8 = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let linearA = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let reverseA = anime({
    targets: '.orb-a',
    translateX: ((window.innerWidth / 2 ) * 0.974),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let bAnimation = anime({
    targets: '.orb-b',
    translateX: ((window.innerWidth / 2 ) * 0.895),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let bNormal = anime({
    targets: '.orb-b',
    translateX: ((window.innerWidth / 2 ) * 0.895),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let bReverse = anime({
    targets: '.orb-b',
    translateX: ((window.innerWidth / 2 ) * 0.895),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let cAnimation = anime({
    targets: '.orb-c',
    translateX: ((window.innerWidth / 2 ) * 0.818),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let cNormal = anime({
    targets: '.orb-c',
    translateX: ((window.innerWidth / 2 ) * 0.818),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let cReverse = anime({
    targets: '.orb-c',
    translateX: ((window.innerWidth / 2 ) * 0.818),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let dAnimation = anime({
    targets: '.orb-d',
    translateX: ((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let dNormal = anime({
    targets: '.orb-d',
    translateX: ((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let dReverse = anime({
    targets: '.orb-d',
    translateX: ((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let eAnimation = anime({
    targets: '.orb-e',
    translateX: ((window.innerWidth / 2 ) * 0.663),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let eNormal = anime({
    targets: '.orb-e',
    translateX: ((window.innerWidth / 2 ) * 0.663),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let eReverse = anime({
    targets: '.orb-e',
    translateX: ((window.innerWidth / 2 ) * 0.663),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let fAnimation = anime({
    targets: '.orb-f',
    translateX: ((window.innerWidth / 2 ) * 0.585),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let fNormal = anime({
    targets: '.orb-f',
    translateX: ((window.innerWidth / 2 ) * 0.585),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let fReverse = anime({
    targets: '.orb-f',
    translateX: ((window.innerWidth / 2 ) * 0.585),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let gAnimation = anime({
    targets: '.orb-g',
    translateX: ((window.innerWidth / 2 ) * 0.507),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let gNormal = anime({
    targets: '.orb-g',
    translateX: ((window.innerWidth / 2 ) * 0.507),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let gReverse = anime({
    targets: '.orb-g',
    translateX: ((window.innerWidth / 2 ) * 0.507),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let hAnimation = anime({
    targets: '.orb-h',
    translateX: ((window.innerWidth / 2 ) * 0.429),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let hNormal = anime({
    targets: '.orb-h',
    translateX: ((window.innerWidth / 2 ) * 0.429),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let hReverse = anime({
    targets: '.orb-h',
    translateX: ((window.innerWidth / 2 ) * 0.429),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let iAnimation = anime({
    targets: '.orb-i',
    translateX: ((window.innerWidth / 2 ) * 0.351),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let iAnimation2 = anime({
    targets: '.orb-i',
    translateX: ((window.innerWidth / 2 ) * 0.351),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let iNormal = anime({
    targets: '.orb-i',
    translateX: ((window.innerWidth / 2 ) * 0.351),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let iReverse = anime({
    targets: '.orb-i',
    translateX: ((window.innerWidth / 2 ) * 0.351),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let jAnimation = anime({
    targets: '.orb-j',
    translateX: ((window.innerWidth / 2 ) * 0.273),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let jNormal = anime({
    targets: '.orb-j',
    translateX: ((window.innerWidth / 2 ) * 0.273),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let jReverse = anime({
    targets: '.orb-j',
    translateX: ((window.innerWidth / 2 ) * 0.273),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let kAnimation = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let kNormal = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let kReverse = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let kNormal2 = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let kReverse2 = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let kNormal3 = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let kReverse3 = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let kNormal4 = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let kReverse4 = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let kNormal5 = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let kReverse5 = anime({
    targets: '.orb-k',
    translateX: ((window.innerWidth / 2 ) * 0.196),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let lAnimation = anime({
    targets: '.orb-l',
    translateX: ((window.innerWidth / 2 ) * 0.118),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let lNormal = anime({
    targets: '.orb-l',
    translateX: ((window.innerWidth / 2 ) * 0.118),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let lReverse = anime({
    targets: '.orb-l',
    translateX: ((window.innerWidth / 2 ) * 0.118),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let mAnimation = anime({
    targets: '.orb-m',
    translateX: ((window.innerWidth / 2 ) * 0.039),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let mNormal = anime({
    targets: '.orb-m',
    translateX: ((window.innerWidth / 2 ) * 0.039),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let mReverse = anime({
    targets: '.orb-m',
    translateX: ((window.innerWidth / 2 ) * 0.039),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let nAnimation = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let nNormal = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let nReverse = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let nNormal2 = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let nReverse2 = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let nNormal3 = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let nReverse3 = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let nNormal4 = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let nReverse4 = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let nNormal5 = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let nReverse5 = anime({
    targets: '.orb-n',
    translateX: -((window.innerWidth / 2 ) * 0.037),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let oAnimation = anime({
    targets: '.orb-o',
    translateX: -((window.innerWidth / 2 ) * 0.116),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let oNormal = anime({
    targets: '.orb-o',
    translateX: -((window.innerWidth / 2 ) * 0.116),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let oReverse = anime({
    targets: '.orb-o',
    translateX: -((window.innerWidth / 2 ) * 0.116),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let pAnimation = anime({
    targets: '.orb-p',
    translateX: -((window.innerWidth / 2 ) * 0.194),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let pNormal = anime({
    targets: '.orb-p',
    translateX: -((window.innerWidth / 2 ) * 0.194),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let pReverse = anime({
    targets: '.orb-p',
    translateX: -((window.innerWidth / 2 ) * 0.194),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let qAnimation = anime({
    targets: '.orb-q',
    translateX: -((window.innerWidth / 2 ) * 0.272),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let qNormal = anime({
    targets: '.orb-q',
    translateX: -((window.innerWidth / 2 ) * 0.272),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let qReverse = anime({
    targets: '.orb-q',
    translateX: -((window.innerWidth / 2 ) * 0.272),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let rAnimation = anime({
    targets: '.orb-r',
    translateX: -((window.innerWidth / 2 ) * 0.348),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let rAnimation2 = anime({
    targets: '.orb-r',
    translateX: -((window.innerWidth / 2 ) * 0.348),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let rNormal = anime({
    targets: '.orb-r',
    translateX: -((window.innerWidth / 2 ) * 0.348),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let rReverse = anime({
    targets: '.orb-r',
    translateX: -((window.innerWidth / 2 ) * 0.348),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let sAnimation = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let sNormal = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let sReverse = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let sNormal2 = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let sReverse2 = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let sNormal3 = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let sReverse3 = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let sNormal4 = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let sReverse4 = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let sNormal5 = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let sReverse5 = anime({
    targets: '.orb-s',
    translateX: -((window.innerWidth / 2 ) * 0.428),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let tAnimation = anime({
    targets: '.orb-t',
    translateX: -((window.innerWidth / 2 ) * 0.505),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let tNormal = anime({
    targets: '.orb-t',
    translateX: -((window.innerWidth / 2 ) * 0.505),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let tReverse = anime({
    targets: '.orb-t',
    translateX: -((window.innerWidth / 2 ) * 0.505),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let tNormal2 = anime({
    targets: '.orb-t',
    translateX: -((window.innerWidth / 2 ) * 0.505),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let tReverse2 = anime({
    targets: '.orb-t',
    translateX: -((window.innerWidth / 2 ) * 0.505),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let tNormal3 = anime({
    targets: '.orb-t',
    translateX: -((window.innerWidth / 2 ) * 0.505),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let tReverse3 = anime({
    targets: '.orb-t',
    translateX: -((window.innerWidth / 2 ) * 0.505),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let uAnimation = anime({
    targets: '.orb-u',
    translateX: -((window.innerWidth / 2 ) * 0.583),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let uNormal = anime({
    targets: '.orb-u',
    translateX: -((window.innerWidth / 2 ) * 0.583),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let uReverse = anime({
    targets: '.orb-u',
    translateX: -((window.innerWidth / 2 ) * 0.583),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let vAnimation = anime({
    targets: '.orb-v',
    translateX: -((window.innerWidth / 2 ) * 0.660),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let vNormal = anime({
    targets: '.orb-v',
    translateX: -((window.innerWidth / 2 ) * 0.660),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let vReverse = anime({
    targets: '.orb-v',
    translateX: -((window.innerWidth / 2 ) * 0.660),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let wAnimation = anime({
    targets: '.orb-w',
    translateX: -((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let wAnimation2 = anime({
    targets: '.orb-w',
    translateX: -((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let wAnimation3 = anime({
    targets: '.orb-w',
    translateX: -((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let wAnimation4 = anime({
    targets: '.orb-w',
    translateX: -((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let wNormal = anime({
    targets: '.orb-w',
    translateX: -((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let wReverse = anime({
    targets: '.orb-w',
    translateX: -((window.innerWidth / 2 ) * 0.740),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let xAnimation = anime({
    targets: '.orb-x',
    translateX: -((window.innerWidth / 2 ) * 0.820),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let xNormal = anime({
    targets: '.orb-x',
    translateX: -((window.innerWidth / 2 ) * 0.820),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let xReverse = anime({
    targets: '.orb-x',
    translateX: -((window.innerWidth / 2 ) * 0.820),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let yAnimation = anime({
    targets: '.orb-y',
    translateX: -((window.innerWidth / 2 ) * 0.895),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let yAnimation2 = anime({
    targets: '.orb-y',
    translateX: -((window.innerWidth / 2 ) * 0.895),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let yNormal = anime({
    targets: '.orb-y',
    translateX: -((window.innerWidth / 2 ) * 0.895),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let yReverse = anime({
    targets: '.orb-y',
    translateX: -((window.innerWidth / 2 ) * 0.895),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let zAnimation = anime({
    targets: '.orb-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let zAnimation2 = anime({
    targets: '.orb-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let zAnimation3 = anime({
    targets: '.orb-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let zAnimation4 = anime({
    targets: '.orb-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let zAnimation5 = anime({
    targets: '.orb-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let zAnimation6 = anime({
    targets: '.orb-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'alternate',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let zNormal = anime({
    targets: '.orb-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'normal',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  let zReverse = anime({
    targets: '.orb-z',
    translateX: -((window.innerWidth / 2 ) * 0.975),
    translateY: (window.innerHeight / 2) - 15,
    direction: 'Reverse',
    autoplay: false,
    duration: 2000,
    elasticity: -1500,
  });

  // Intro/Warmup

  $("#orb-f").removeClass("ambient").addClass("golden");
  setTimeout(function(){
    fAnimation.play();
    $(".orb-f").removeClass("golden").addClass("ambient");
    $(".orb-g").removeClass("ambient").addClass("golden");
  }, 1000);
  setTimeout(function(){
    gAnimation.play();
    $(".orb-g").removeClass("golden").addClass("ambient");
    $(".orb-f").removeClass("ambient").addClass("golden");
  }, 4000);
  setTimeout(function(){
    fNormal.play();
    $(".orb-f").removeClass("golden").addClass("ambient");
    $(".orb-g").removeClass("ambient").addClass("golden");
  }, 7000);
  setTimeout(function(){
    fReverse.play();
  }, 9000);
  setTimeout(function(){
    gNormal.play();
    $(".orb-g").removeClass("golden").addClass("ambient");
    $(".orb-t").removeClass("flourish").addClass("golden");
    $(".orb-n").removeClass("drums").addClass("golden");
  }, 10000);
  setTimeout(function(){
    gReverse.play();
  }, 12000);

  // Phase in

  setTimeout(function(){
    tAnimation.play();
    nAnimation.play();
    $(".orb-n").removeClass("golden").addClass("drums");
    $(".orb-t").removeClass("golden").addClass("flourish");
  }, 13000);
  setTimeout(function(){
    $(".orb-n").removeClass("drums").addClass("golden");
  }, 14500);
  setTimeout(function(){
    nNormal.play();
    $(".orb-n").removeClass("golden").addClass("drums");
  }, 16000);
  setTimeout(function(){
    nReverse.play();
    $(".orb-n").removeClass("drums").addClass("golden");
  }, 17500);
  setTimeout(function(){
    nNormal2.play();
    $(".orb-n").removeClass("golden").addClass("drums");
  }, 19000);
  setTimeout(function(){
    nReverse2.play();
    $(".orb-n").removeClass("drums").addClass("golden");
    $(".orb-t").removeClass("flourish").addClass("golden");
  }, 20500);
  //
  setTimeout(function(){
    tNormal.play();
    nNormal3.play();
    $(".orb-t").removeClass("golden").addClass("flourish");
    $(".orb-n").removeClass("golden").addClass("drums");
  }, 22000);
  setTimeout(function(){
    tReverse.play();
    nReverse3.play();
    $(".orb-n").removeClass("drums").addClass("golden");
  }, 23500);
  setTimeout(function(){
    nNormal4.play();
    $(".orb-n").removeClass("golden").addClass("drums");
  }, 25000);
  setTimeout(function(){
    nReverse4.play();
    $(".orb-n").removeClass("drums").addClass("golden");
  }, 26500);
  setTimeout(function(){
    nNormal5.play();
    $(".orb-n").removeClass("golden").addClass("drums");
  }, 28000);
  setTimeout(function(){
    nReverse5.play();
    $(".orb-t").removeClass("flourish").addClass("golden");
    $(".orb-k").removeClass("ambient").addClass("golden");
    $(".orb-s").removeClass("drums").addClass("golden");
  }, 29500);

  setTimeout(function(){
    tNormal2.play();
    kAnimation.play();
    sAnimation.play();
    $(".orb-t").removeClass("golden").addClass("flourish");
    $(".orb-k").removeClass("golden").addClass("ambient");
    $(".orb-s").removeClass("golden").addClass("drums");
  }, 31000);
  setTimeout(function(){
    tReverse2.play();
    $(".orb-k").removeClass("ambient").addClass("golden");
    $(".orb-s").removeClass("drums").addClass("golden");
  }, 33000);
  setTimeout(function(){
    kNormal.play();
    sNormal.play();
    $(".orb-k").removeClass("golden").addClass("ambient");
    $(".orb-s").removeClass("golden").addClass("drums");
  }, 34000);
  setTimeout(function(){
    kReverse.play();
    sReverse.play();
    $(".orb-k").removeClass("ambient").addClass("golden");
    $(".orb-s").removeClass("drums").addClass("golden");
  }, 35500);
  setTimeout(function(){
    kNormal2.play();
    sNormal2.play();
    $(".orb-k").removeClass("golden").addClass("ambient");
    $(".orb-s").removeClass("golden").addClass("drums");
  }, 37000);
  setTimeout(function(){
    kReverse2.play();
    sReverse2.play();
    $(".orb-k").removeClass("ambient").addClass("golden");
    $(".orb-s").removeClass("drums").addClass("golden");
    $(".orb-t").removeClass("flourish").addClass("golden");
  }, 38500);

  setTimeout(function(){
    tNormal3.play();
    kNormal3.play();
    sNormal3.play();
    $(".orb-t").removeClass("golden").addClass("flourish");
    $(".orb-k").removeClass("golden").addClass("ambient");
    $(".orb-s").removeClass("golden").addClass("drums");
  }, 40000);
  setTimeout(function(){
    tReverse3.play();
    kReverse3.play();
    sReverse3.play();
    $(".orb-k").removeClass("ambient").addClass("golden");
    $(".orb-s").removeClass("drums").addClass("golden");
  }, 41500);
  setTimeout(function(){
    kNormal4.play();
    sNormal4.play();
    $(".orb-k").removeClass("golden").addClass("ambient");
    $(".orb-s").removeClass("golden").addClass("drums");
  }, 43000);
  setTimeout(function(){
    kReverse4.play();
    sReverse4.play();
    $(".orb-k").removeClass("ambient").addClass("golden");
    $(".orb-s").removeClass("drums").addClass("golden");
  }, 44500);
  setTimeout(function(){
    kNormal5.play();
    sNormal5.play();
    $(".orb-k").removeClass("golden").addClass("ambient");
    $(".orb-s").removeClass("golden").addClass("drums");
  }, 46000);
  setTimeout(function(){
    kReverse5.play();
    sReverse5.play();
    $(".orb-y").removeClass("flourish").addClass("golden");
    $(".orb-a").removeClass("drums").addClass("golden");
  }, 47500);

  setTimeout(function(){
    yAnimation.play();
    aAnimation.play();
    $(".orb-y").removeClass("golden").addClass("flourish");
    $(".orb-a").removeClass("golden").addClass("drums");
  }, 49000);
  setTimeout(function(){
    $(".orb-a").removeClass("drums").addClass("golden");
  }, 50500);
  setTimeout(function(){
    aAnimation2.play();
    $(".orb-a").removeClass("golden").addClass("drums");
  }, 52000);
  setTimeout(function(){
    $(".orb-a").removeClass("drums").addClass("golden");
  }, 53500);
  setTimeout(function(){
    aAnimation3.play();
    $(".orb-a").removeClass("golden").addClass("drums");
  }, 55000);
  setTimeout(function(){
    $(".orb-a").removeClass("drums").addClass("golden");
  }, 56500);
  setTimeout(function(){
    aAnimation4.play();
    $(".orb-a").removeClass("golden").addClass("drums");
  }, 58000);
  setTimeout(function(){
    $(".orb-a").removeClass("drums").addClass("golden");
    $(".orb-y").removeClass("flourish").addClass("golden");
  }, 59500);
  setTimeout(function(){
    yAnimation2.play();
    aAnimation5.play();
    $(".orb-y").removeClass("golden").addClass("flourish");
    $(".orb-a").removeClass("golden").addClass("drums");
  }, 61000);
  setTimeout(function(){
    $(".orb-a").removeClass("drums").addClass("golden");
  }, 62500);
  setTimeout(function(){
    aAnimation6.play();
    $(".orb-a").removeClass("golden").addClass("drums");
  }, 64000);
  setTimeout(function(){
    $(".orb-a").removeClass("drums").addClass("golden");
  }, 65500);
  setTimeout(function(){
    aAnimation7.play();
    $(".orb-a").removeClass("golden").addClass("drums");
  }, 67000);
  setTimeout(function(){
    $(".orb-a").removeClass("drums").addClass("golden");
  }, 68500);
  setTimeout(function(){
    aAnimation8.play();
    $(".orb-a").removeClass("golden").addClass("drums");
  }, 70000);
  setTimeout(function(){
    $(".orb-r").removeClass("flourish").addClass("golden");
    $(".orb-z").removeClass("drums").addClass("golden");
  }, 71500);

  setTimeout(function(){
    rAnimation.play();
    zAnimation.play();
    $(".orb-r").removeClass("golden").addClass("flourish");
    $(".orb-z").removeClass("golden").addClass("drums");
  }, 73000);
  setTimeout(function(){
    $(".orb-z").removeClass("drums").addClass("golden");
  }, 74500);
  setTimeout(function(){
    zAnimation2.play();
    $(".orb-z").removeClass("golden").addClass("drums");
  }, 76000);
  setTimeout(function(){
    $(".orb-z").removeClass("drums").addClass("golden");
  }, 77500);
  setTimeout(function(){
    zAnimation3.play();
    $(".orb-z").removeClass("golden").addClass("drums");
  }, 79000);
  setTimeout(function(){
    $(".orb-r").removeClass("flourish").addClass("golden");
    $(".orb-z").removeClass("drums").addClass("golden");
  }, 80500);
  setTimeout(function(){
    rAnimation2.play();
    zAnimation4.play();
    $(".orb-r").removeClass("golden").addClass("flourish");
    $(".orb-z").removeClass("golden").addClass("drums");
  }, 82000);
  setTimeout(function(){
    $(".orb-z").removeClass("drums").addClass("golden");
  }, 83500);
  setTimeout(function(){
    zAnimation5.play();
    $(".orb-z").removeClass("golden").addClass("drums");
  }, 85000);
  setTimeout(function(){
    $(".orb-z").removeClass("drums").addClass("golden");
  }, 86500);
  setTimeout(function(){
    zAnimation6.play();
    $(".orb-z").removeClass("golden").addClass("drums");
  }, 88000);
  setTimeout(function(){
    $(".orb-q").removeClass("florish").addClass("golden");
  }, 89500);

  setTimeout(function(){
    qAnimation.play();
    $(".orb-q").removeClass("golden").addClass("flourish");
  }, 91000);
  setTimeout(function(){
    $(".orb-w").removeClass("flourish").addClass("golden");
  }, 101500);
  setTimeout(function(){
    wAnimation.play();
    $(".orb-w").removeClass("golden").addClass("flourish");
  }, 103000);
  setTimeout(function(){
    $(".orb-w").removeClass("flourish").addClass("golden");
  }, 107500);
  setTimeout(function(){
    wAnimation2.play();
    $(".orb-w").removeClass("golden").addClass("flourish");
  }, 109000);
  setTimeout(function(){
    $(".orb-w").removeClass("flourish").addClass("golden");
    $(".orb-u").removeClass("flourish").addClass("golden");
  }, 113500);
  setTimeout(function(){
    wAnimation3.play();
    uAnimation.play();
    $(".orb-w").removeClass("golden").addClass("flourish");
    $(".orb-u").removeClass("golden").addClass("flourish");
  }, 115000);
  setTimeout(function(){
    $(".orb-w").removeClass("flourish").addClass("golden");
  }, 119500);
  setTimeout(function(){
    wAnimation4.play();
    $(".orb-w").removeClass("golden").addClass("flourish");
  }, 121000);
  setTimeout(function(){
    $(".orb-l").removeClass("flourish").addClass("golden");
  }, 125500);
  setTimeout(function(){
    lAnimation.play();
    $(".orb-l").removeClass("golden").addClass("flourish");
  }, 127000);
  setTimeout(function(){
    $(".orb-i").removeClass("flourish").addClass("golden");
  }, 132600);
  setTimeout(function(){
    iAnimation.play();
    $(".orb-i").removeClass("golden").addClass("flourish");
  }, 134100);
  setTimeout(function(){
    $("#song-over").removeClass("hide");
  }, 139100);
  setTimeout(function(){
    $("#song-over").addClass("hide");
  }, 149100);
};
