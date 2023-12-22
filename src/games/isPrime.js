import readlineSync from 'readline-sync';

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number !== 1;
};

export default (name, limitOfPlays) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let isAnswerCorrect = true;
  let countOfPlays = 0;

  while (isAnswerCorrect) {
    const numForCheck = randomInt(1, 100);
    const correctAnswer = isPrime(numForCheck) ? 'yes' : 'no';

    console.log(`Question: ${numForCheck}`);
    const clientAnswer = String(readlineSync.question('Your answer: '));

    if (correctAnswer === clientAnswer) {
      console.log('Correct!');
      countOfPlays += 1;
    } else {
      console.log(`'${clientAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}`);
      isAnswerCorrect = false;
    }

    if (countOfPlays >= limitOfPlays) {
      console.log(`Congratulations, ${name}!`);
      isAnswerCorrect = false;
    }
  }
};
