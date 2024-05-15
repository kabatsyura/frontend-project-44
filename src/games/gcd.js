import playGame from '../index.js';

const introGCD = 'Find the greatest common divisor of given numbers.';

const resultInNumber = true;

const game = () => {
  const firstNum = Math.floor(Math.random() * 100);
  const secondNum = Math.floor(Math.random() * 60);
  const isMin = firstNum < secondNum ? firstNum : secondNum;
  let resOfGCD = 0;
  const arrOfGame = [];

  for (let i = isMin; i > 0; i -= 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      resOfGCD = i;
      break;
    }
  }
  arrOfGame.push(`Question: ${firstNum} ${secondNum}`);
  arrOfGame.push(resOfGCD);

  return arrOfGame;
};

export default () => playGame(game, introGCD, resultInNumber);
