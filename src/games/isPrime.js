import playGame from '../index.js';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number !== 1;
};

const introPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const resultInNumber = false;

const game = () => {
  const numForCheck = randomInt(1, 100);
  const correctAnswer = isPrime(numForCheck) ? 'yes' : 'no';
  const arrOfGame = [];

  arrOfGame.push(`Question: ${numForCheck}`);
  arrOfGame.push(correctAnswer);

  return arrOfGame;
};

export default () => playGame(game, introPrime, resultInNumber);
