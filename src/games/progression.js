import readlineSync from 'readline-sync';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export default (name, limitOfPlays) => {
  console.log('What number is missing in the progression?');
  let isAnswerCorrect = true;
  let countOfPlays = 0;

  while (isAnswerCorrect) {
    const rangeOfArr = randomInt(5, 10);
    const firstNum = randomInt(1, 10);
    const stepOfProgression = randomInt(1, 10);
    const hiddenNum = randomInt(0, rangeOfArr - 1);
    let previousNum = 0;
    const arrOfNums = [];
    const hiddenArr = [];

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

    console.log(`Question: ${hiddenArr.join(' ')}`);
    const clientAnswer = Number(readlineSync.question('Your answer: '));

    if (arrOfNums[hiddenNum] === clientAnswer) {
      console.log('Correct!');
      countOfPlays += 1;
    } else {
      console.log(`'${clientAnswer}' is wrong answer ;(. Correct answer was '${arrOfNums[hiddenNum]}'.`);
      console.log(`Let's try again, ${name}`);
      isAnswerCorrect = false;
    }

    if (countOfPlays >= limitOfPlays) {
      console.log(`Congratulations, ${name}!`);
      isAnswerCorrect = false;
    }
  }
};
