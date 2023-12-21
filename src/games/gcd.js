import readlineSync from 'readline-sync';

export default (name, limitOfPlays) => {
  console.log('Find the greatest common divisor of given numbers.');
  let isAnswerCorrect = true;
  let countOfPlays = 0;

  while (isAnswerCorrect) {
    const firstNum = Math.floor(Math.random() * 100);
    const secondNum = Math.floor(Math.random() * 60);
    const isMin = firstNum < secondNum ? firstNum : secondNum;
    let resOfGCD = 0;

    for (let i = isMin; i > 0; i -= 1) {
      if (firstNum % i === 0 && secondNum % i === 0) {
        resOfGCD = i;
        break;
      }
    }

    console.log(`Question: ${firstNum} ${secondNum}`);
    const clientAnswer = Number(readlineSync.question('Your answer: '));

    if (resOfGCD === clientAnswer) {
      console.log('Correct!');
      countOfPlays += 1;
    } else {
      console.log(`'${clientAnswer}' is wrong answer ;(. Correct answer was '${resOfGCD}'.`);
      console.log(`Let's try again, ${name}`);
      isAnswerCorrect = false;
    }

    if (countOfPlays >= limitOfPlays) {
      console.log(`Congratulations, ${name}!`);
      isAnswerCorrect = false;
    }
  }
};
