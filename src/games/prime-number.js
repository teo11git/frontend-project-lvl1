import runScript from '../index.js';

import getRandomNum from '../tools/random-gen.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (num, i = 2) => {
  if (num === 1) {
    return false;
  }
  if (i > Math.ceil(num / 2)) {
    return true;
  }
  if (num % i === 0) {
    return false;
  }
  return checkPrime(num, i + 1);
};

const makePrimeTask = () => {
  const numbersForTasks = [1, 2, 13, 21, 41, 56, 67, 77, 79, 85,
    97, 111, 127, 132, 149, 152, 163, 164, 173, 199];
  const currentIndex = getRandomNum(0, numbersForTasks.length - 1);
  const currentNumber = numbersForTasks[currentIndex];
  const answer = checkPrime(currentNumber) ? 'yes' : 'no';
  const task = currentNumber;
  return [task, answer];
};

export default async () => {
  await runScript(makePrimeTask, rule);
};
