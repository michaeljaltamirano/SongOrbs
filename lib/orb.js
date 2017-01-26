import anime from 'animejs';
import _ from 'lodash';

const createOrb = function(x, y, orbEffects) {
  let orb = {};
  orb.x = x;
  orb.y = y;
  orb.color = _.sample(orbEffects.color);
  orb.radius = anime.random(...orbEffects.radius);
  orb.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(orb.x, orb.y, orb.radius, 0, 2 * Math.PI);
    ctx.fillStyle = orb.color;
    ctx.fill();
  };
  return orb;
};

export const createOrbs = function(x, y, orbEffects) {
  const orbs = [];
  for (let i = 0; i < orbEffects.numOrbs; i++) {
    orbs.push(createOrb(x, y, orbEffects));
  }
  return orbs;
};
