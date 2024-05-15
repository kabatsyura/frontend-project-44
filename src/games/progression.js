import playGame from '../index.js';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const introProgression = 'What number is missing in the progression?';

const resultInNumber = true;

const game = () => {
  const rangeOfArr = randomInt(6, 10);
  const firstNum = randomInt(1, 10);
  const stepOfProgression = randomInt(1, 10);
  const hiddenNum = randomInt(0, rangeOfArr - 1);
  let previousNum = 0;
  const arrOfNums = [];
  const hiddenArr = [];
  const arrOfGame = [];

  for (let i = 0; i < rangeOfArr; i += 1) {
    if (i === 0) {
      arrOfNums.push(firstNum);
      if (hiddenNum === 0) hiddenArr.push('..');
    } else {
      previousNum = arrOfNums[i - 1] + stepOfProgression;
      arrOfNums.push(previousNum);
      if (i === (hiddenNum)) hiddenArr.push('..');
      else hiddenArr.push(arrOfNums[i]);
    }
  }

  arrOfGame.push(`Question: ${hiddenArr.join(' ')}`);
  arrOfGame.push(arrOfNums[hiddenNum]);

  return arrOfGame;
};

export default () => playGame(game, introProgression, resultInNumber);
