import script from '../index.js';

import randomNum from '../tools/randomGen.js';

const isPrime = (num, i) => {
  if (num === 1) {
    return false;
  }
  if (i > Math.ceil(num / 2)) {
    return true;
  }
  if (num % i === 0) {
    return false;
  }
  return isPrime(num, i + 1);
};

const primeTask = () => {
  const numbers = [1, 2, 13, 21, 41, 56, 67, 77, 79, 85,
    97, 111, 127, 132, 149, 152, 163, 164, 173, 199];
  const currentIndex = randomNum({ min: 0, max: numbers.length - 1 });
  const currentNumber = numbers[currentIndex];
  const answer = isPrime(currentNumber, 2) ? 'yes' : 'no';
  const task = String(currentNumber);
  console.log(`task=${task}, answer=${answer}`);
  return [task, answer];
};

export default async () => {
  await script(primeTask);
}
