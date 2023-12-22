/* eslint-disable import/no-cycle */

import hello from './cli.js';
import brainEven from './games/isEven.js';
import brainCalc from './games/calc.js';
import brainGCD from './games/gcd.js';
import brainProgression from './games/progression.js';
import isPrime from './games/isPrime.js';

export default (typeOfGame) => {
  console.log('Welcome to the Brain Games!');
  const name = hello();
  console.log(`Hello, ${name}!`);
  const limitOfPlays = 3;

  switch (typeOfGame) {
    case 'brain-games':
      break;
    case 'brain-even':
      brainEven(name, limitOfPlays);
      break;
    case 'brain-calc':
      brainCalc(name, limitOfPlays);
      break;
    case 'brain-gcd':
      brainGCD(name, limitOfPlays);
      break;
    case 'brain-progression':
      brainProgression(name, limitOfPlays);
      break;
    case 'brain-prime':
      isPrime(name, limitOfPlays);
      break;
    default:
      break;
  }
};
