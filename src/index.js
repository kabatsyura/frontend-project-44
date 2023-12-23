/* eslint-disable import/no-cycle */

import readlineSync from 'readline-sync';
import hello from './cli.js';
import { introEven, game as brainEven } from './games/isEven.js';
import { introCalc, game as brainCalc } from './games/calc.js';
import { introGCD, game as brainGCD } from './games/gcd.js';
import { introProgression, game as brainProgression } from './games/progression.js';
import { introPrime, game as isPrime } from './games/isPrime.js';

const chooseGame = (nameOfGame) => {
  let selectedGame = '';

  switch (nameOfGame) {
    case 'brain-games':
      break;
    case 'brain-even':
      selectedGame = introEven();
      break;
    case 'brain-calc':
      selectedGame = introCalc();
      break;
    case 'brain-gcd':
      selectedGame = introGCD();
      break;
    case 'brain-progression':
      selectedGame = introProgression();
      break;
    case 'brain-prime':
      selectedGame = introPrime();
      break;
    default:
      break;
  }

  return selectedGame;
};

export default (typeOfGame) => {
  const limitOfPlays = 3;
  const showFirstQuestion = chooseGame(typeOfGame);
  let isAnswerCorrect = true;
  let countOfPlays = 0;

  console.log('Welcome to the Brain Games!');
  const name = hello();
  console.log(`Hello, ${name}!`);
  console.log(showFirstQuestion);

  // arrOfGame shows the result of each function from the folder "games"
  // arrOfGame[1] - the question with examples
  // arrOfGame[2] - the result of the game
  let arrOfGame = [];
  while (isAnswerCorrect) {
    let resultInNumber = false;
    switch (typeOfGame) {
      case 'brain-games':
        isAnswerCorrect = false;
        break;
      case 'brain-even':
        arrOfGame = brainEven();
        break;
      case 'brain-calc':
        arrOfGame = brainCalc();
        resultInNumber = true;
        break;
      case 'brain-gcd':
        arrOfGame = brainGCD();
        resultInNumber = true;
        break;
      case 'brain-progression':
        arrOfGame = brainProgression();
        resultInNumber = true;
        break;
      case 'brain-prime':
        arrOfGame = isPrime();
        break;
      default:
        break;
    }

    if (isAnswerCorrect === false) break;

    const showQuestion = arrOfGame[0];
    const correctAnswer = arrOfGame[1];
    console.log(showQuestion);
    const clientAnswer = resultInNumber ? Number(readlineSync.question('Your answer: ')) : readlineSync.question('Your answer: ');

    if (correctAnswer === clientAnswer) {
      console.log('Correct!');
      countOfPlays += 1;
    } else {
      console.log(`'${clientAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}`);
      isAnswerCorrect = false;
    }

    if (countOfPlays >= limitOfPlays) {
      console.log(`Congratulations, ${name}!`);
      isAnswerCorrect = false;
    }
  }
};
