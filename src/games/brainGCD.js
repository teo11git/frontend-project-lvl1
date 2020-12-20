import script from '../index.js';

import randomNum from '../tools/randomGen.js';

const findGCD = (x, y) => {
  const lowerValue = x < y ? x : y;

  const recursiveFinder = (a, b, i) => {
    if (i === 1) {
      return i;
    }
    if (a % i === 0 && b % i === 0) {
      return i;
    }
    return recursiveFinder(a, b, i - 1);
  };
  const result = recursiveFinder(x, y, lowerValue);
  console.log(result);
  return result;
};

const gcdTask = () => {
  const num1 = randomNum({ min: 1, max: 100 });
  const num2 = randomNum({ min: 1, max: 100 });
  const answer = findGCD(num1, num2);
  const task = `${num1} ${num2}`;
  const result = [task, String(answer)];
  console.log(result);
  return result;
};

export default async () => {
  await script(gcdTask);
}
