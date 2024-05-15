import playGame from '../index.js';

const introEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const resultInNumber = false;

const game = () => {
  const numForCheck = Math.floor(Math.random() * 20);
  const arrOfGame = [];
  arrOfGame.push(`Question: ${numForCheck}`);
  const correctAnswer = numForCheck % 2 === 0 ? 'yes' : 'no';
  arrOfGame.push(correctAnswer);

  return arrOfGame;
};

export default () => playGame(game, introEven, resultInNumber);
