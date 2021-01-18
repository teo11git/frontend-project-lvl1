import runScript from '../index.js';

import getRandomNum from '../tools/random-gen.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const numbersForTasks = [1, 2, 13, 21, 41, 56, 67, 77, 79, 85,
  97, 111, 127, 132, 149, 152, 163, 164, 173, 199];
const checkPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < Math.ceil(num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const makeRoundData = () => {
  const currentIndex = getRandomNum(0, numbersForTasks.length - 1);
  const currentNumber = numbersForTasks[currentIndex];
  const answer = checkPrime(currentNumber) ? 'yes' : 'no';
  const question = currentNumber;
  return [question, answer];
};

export default () => {
  runScript(makeRoundData, rule);
};
