const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number !== 1;
};

export const introPrime = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const game = () => {
  const numForCheck = randomInt(1, 100);
  const correctAnswer = isPrime(numForCheck) ? 'yes' : 'no';
  const arrOfGame = [];

  arrOfGame.push(`Question: ${numForCheck}`);
  arrOfGame.push(correctAnswer);

  return arrOfGame;
};
