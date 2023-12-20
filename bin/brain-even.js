#!/usr/bin/env node

import readlineSync from 'readline-sync';

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let isAnswerCorrect = true;
  let countOfPlays = 0;
  let numForCheck = 0;

  while (isAnswerCorrect) {
    numForCheck = Math.floor(Math.random() * 20);
    console.log(`Question: ${numForCheck}`);
    const clientAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = numForCheck % 2 === 0 ? 'yes' : 'no';

    if ((numForCheck % 2 === 0 && clientAnswer === correctAnswer) || (numForCheck % 2 !== 0 && clientAnswer === 'no')) {
      console.log('Correct!');
      countOfPlays += 1;
    } else {
      console.log(`'${clientAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}`);
      isAnswerCorrect = false;
    }

    if (countOfPlays >= 3) {
      console.log(`Congratulations, ${name}!`);
      isAnswerCorrect = false;
    }
  }
};
