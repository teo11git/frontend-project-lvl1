import runScript from '../index.js';

import getRandomNum from '../tools/random-gen.js';

const rule = 'What is the result of the expression?';

const mathFunctions = [
  (a, b) => [a + b, `${a} + ${b}`],
  (a, b) => [a - b, `${a} - ${b}`],
  (a, b) => [a * b, `${a} * ${b}`],
];

const makeRoundData = () => {
  const currentFnIndex = getRandomNum(0, mathFunctions.length - 1);
  const num1 = getRandomNum(0, 25);
  const num2 = getRandomNum(0, 25);
  const [answer, question] = mathFunctions[currentFnIndex](num1, num2);
  return [question, String(answer)];
};

export default async () => {
  await runScript(makeRoundData, rule);
};
