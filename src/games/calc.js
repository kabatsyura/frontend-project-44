import readlineSync from 'readline-sync';

export default (name, limitOfPlays) => {
  console.log('What is the result of the expression?');
  let isAnswerCorrect = true;
  let countOfPlays = 0;
  const arrOperators = ['+', '-', '*'];

  while (isAnswerCorrect) {
    const firstNum = Math.floor(Math.random() * 20);
    const secondNum = Math.floor(Math.random() * 20);
    const operator = arrOperators[Math.floor(Math.random() * arrOperators.length)];
    let resOfCalc = 0;
    switch (operator) {
      case '+':
        resOfCalc = firstNum + secondNum;
        break;
      case '-':
        resOfCalc = firstNum - secondNum;
        break;
      case '*':
        resOfCalc = firstNum * secondNum;
        break;
      default:
        break;
    }

    console.log(`Question: ${firstNum} ${operator} ${secondNum}`);
    const clientAnswer = Number(readlineSync.question('Your answer: '));

    if (resOfCalc === clientAnswer) {
      console.log('Correct!');
      countOfPlays += 1;
    } else {
      console.log(`'${clientAnswer}' is wrong answer ;(. Correct answer was '${resOfCalc}'.`);
      console.log(`Let's try again, ${name}`);
      isAnswerCorrect = false;
    }

    if (countOfPlays >= limitOfPlays) {
      console.log(`Congratulations, ${name}!`);
      isAnswerCorrect = false;
    }
  }
};
