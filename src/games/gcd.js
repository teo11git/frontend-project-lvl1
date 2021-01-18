import runScript from '../index.js';

import getRandomNum from '../tools/random-gen.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return getGcd(b, a % b);
};
const makeRoundData = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const answer = String(getGcd(num1, num2));
  const question = `${num1} ${num2}`;
  return [question, answer];
};

export default () => {
  runScript(makeRoundData, rule);
};
