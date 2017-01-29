# SongOrbs

## Background

[SongOrbs][SongOrbs] is a music generation interface.

[SongOrbs]: https://mjaltamirano.github.io/SongOrbs/

In SongOrbs the user may choose to play along with a preloaded sequence, or just play with the page as a soundboard. In the preloaded sequence, orbs at the top of the screen move to the center, representing keyboard keys that should be hit at the time the lettered orb enters the center. Each key is associated with a specific slice of song, and has its own associated animation.

The preloaded song orbs represent a degree of gamification, but the page is meant to facilitate experimentation rather than have rules, so there are no points, and the game never ends.

![view](docs/SongOrbsDemo.gif)

## Instructions

Select either the preloaded sequence to play along with a song I put together, or select the soundboard to experiment with the sounds.

## Features & Implementations

SongOrbs is written in JavaScript, made up primarily of Anime.js animations with HTML5, Howler.js and jQuery.

Each of the different letter keyboard strokes comprises a different animation configuration:

```JavaScript

o: {
  numOrbs: 500,
  duration: [9500, 10000],
  color: ['#9DE0AD', '#45ADA8', '#59BAA5', '#6DC7A3'],
  radius: [45, 50],
  animeRadius: 0
},

```

"numOrbs" represents the number of orbs to be generated on the screen at the time of keypress. The Anime.js library provides some useful methods, including "anime.random([array])", which will select a random number between two given numbers, which is used in SongOrbs to randomize the color and size of an orb, as well as how long it is present on the page.

The preloaded song sequence setup comprises a series of anime.js effects to move the orbs at the top of the screen to the center, implemented through setTimeouts.

```JavaScript

let fAnimation = anime({
  targets: '.orb-f',
  translateX: ((window.innerWidth / 2 ) * 0.585),
  translateY: (window.innerHeight / 2) - 15,
  direction: 'alternate',
  autoplay: false,
  duration: 2000,
  elasticity: -1500,
});

...

setTimeout(function(){
  fAnimation.play();
  $(".orb-f").removeClass("golden").addClass("ambient");
  $(".orb-g").removeClass("ambient").addClass("golden");
}, 1000);

```

The jQuery methods are used to indicate to the user which orbs they should expect next in the preloaded state sequence by altering the class, which controls the color of the orb.

All music is sampled from the song "Yume" by Helios and implmented using Howler.js, executed on keypress:

```JavaScript

document.addEventListener('keydown', function(e) {
  if (MUSIC_KEYS.indexOf(e.keyCode) > -1 ) {
    new Howl({ src: SOUNDS[e.keyCode] }).play();
    generateOrb(orbEffects[e.key]);
  }
});

```

## Future Implementations

I would like to further enhance the amount of structure the page provides by including additional preloaded songs. I would also like to improve the visuals, as one of my primary interests in developing SongOrbs was to provide an aesthetically pleasing experience. This would include a more robust background, as well as a high degree of wave differentiation between the different keystokes (similar to the degree in which each keystroke generates different orb animations). Additionally, the code would benefit from refactoring how the preloaded song is currently set up--right now it is hard-coded in, and allowing the user to create their own preloaded song would increase the value of the page's experimentation. Long-term, I would like to develop a page that procedurally generates music and visuals.
