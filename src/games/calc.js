export const introCalc = () => 'What is the result of the expression?';

export const game = () => {
  const arrOperators = ['+', '-', '*'];
  const firstNum = Math.floor(Math.random() * 20);
  const secondNum = Math.floor(Math.random() * 20);
  const operator = arrOperators[Math.floor(Math.random() * arrOperators.length)];
  let resOfCalc = 0;
  const arrOfGame = [];

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

  arrOfGame.push(`Question: ${firstNum} ${operator} ${secondNum}`);
  arrOfGame.push(resOfCalc);

  return arrOfGame;
};
