## SongOrbs

### Background

SongOrbs is a version of the "object consumes object to grow bigger" game. My primary focus for differentiation will be a novel/enjoyable sensory experience, with respect to sound (hence, SongOrbs). The current plan is to implement a game with a set song, where each orb on the game board contributes to an element of that song. As orbs are consumed, the song begins to break down into its constituent parts until all the orbs have been absorbed and there is no more sound.

### Functionality & MVP  

SongOrbs will allow a user to:

- [ ] Start, pause, reset the game board, and mute sound (though I intend to implement sound in such a way that it will not upset the user into muting it!)
- [ ] Control a single orb around the screen, which consumes other orbs.
- [ ] Only consume orbs smaller in size, such that the player loses when making contact with a larger orb.

In addition, this project will include:

- [ ] An "About" modal describing the background and rules of the game
- [ ] A production Readme

### Wireframes

The game will consist of a single splash page with instructions (both gameplay and control), followed by the game board. Also present on the page will be links to my Github and LinkedIn pages. I am hoping to keep everything minimal: my interest is in creating a pleasant experience.

![SplashPage][splashpage]

[splashpage]: ./wireframes/Splash.png "SongOrbs Splash"

![GamePage][gamepage]

[gamepage]: ./wireframes/Game.png "SongOrbs Game"

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- `howler.js` for audio.
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be two primary scripts involved in this project:

`board.js`: this script will handle the logic for creating and updating the necessary `Easel.js` elements and rendering them to the DOM.

`orb.js`: this script will house the constructor and update functions for the `Orb` objects. It will likely serve as a base class for the `player_orb.js` object (the player-controlled Orb) and the `song_orbs.js` objects (all the other orbs).

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 scripts outlined above.  Learn the basics of `Easel.js`.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Easel.js` to render an object to the `Canvas` element

**Day 2**: Dedicate this day to learning the `Easel.js` API.  First, build out the `Orb` object to connect to the `Board` object.  Then, use `board.js` to create and render at least the board. Goals for the day:

- Complete the `orb.js` module (constructor, update functions)
- Render the board to the `Canvas` using `Easel.js`
- Render the player orb and at least one SongOrb. Achieve some form of interaction with the two.

**Day 3**: Complete building the orb interaction logic, and incorporate it into the `Board.js` rendering.  Goals for the day:

- Orbs properly absorb smaller orbs. Game over if player orb comes into contact with larger SongOrb.
- Have a functional board on the `Canvas` frontend that correctly handles moving from a Game Over (or Game Won) to a New Game.

**Day 4**: Finish refining gameplay. Style the frontend, making it polished and professional.  Goals for the day:

- Complete any remaining gameplay features.
- Style board, orbs, and sounds. Style links to Github/LinkedIn.
- If time: work on bonus features.


### Bonus features

Time permitting, I would like to add the following features:

- [ ] Allow the user to change the dynamics of the sounds produced (frequency, tone, bass, etc.).
- [ ] Multiple levels, all with different songs.
- [ ] Allow the user to upload their own song for gameplay!
