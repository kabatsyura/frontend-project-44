/* eslint-disable import/no-cycle */
import readlineSync from 'readline-sync';
import hello from './cli.js';

export default (typeOfGame, introGame, resultInNumber) => {
  const limitOfPlays = 3;
  let isAnswerCorrect = true;
  let countOfPlays = 0;

  const name = hello();

  console.log(introGame);

  // arrOfGame shows the result of each function from the folder "games"
  // arrOfGame[1] - the question with examples
  // arrOfGame[2] - the result of the game
  let arrOfGame = [];
  while (isAnswerCorrect) {
    arrOfGame = typeOfGame();

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
      console.log(`Let's try again, ${name}!`);
      isAnswerCorrect = false;
    }

    if (countOfPlays >= limitOfPlays) {
      console.log(`Congratulations, ${name}!`);
      isAnswerCorrect = false;
    }
  }
};
