import runScript from '../index.js';

import getRandomNum from '../tools/random-gen.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const makeGcdTask = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const answer = String(getGcd(num1, num2));
  const task = `${num1} ${num2}`;
  return [task, answer];
};

export default async () => {
  await runScript(makeGcdTask, rule);
};
