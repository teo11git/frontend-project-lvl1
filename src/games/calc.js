import runScript from '../index.js';

import getRandomNum from '../tools/random-gen.js';

const rule = 'What is the result of the expression?';

const makeCalcTask = () => {
  const mathFunctions = [
    (a, b) => [a + b, `${a} + ${b}`],
    (a, b) => [a - b, `${a} - ${b}`],
    (a, b) => [a * b, `${a} * ${b}`],
  ];

  const currentFnIndex = getRandomNum(0, 2);
  const num1 = getRandomNum(0, 25);
  const num2 = getRandomNum(0, 25);
  const task = mathFunctions[currentFnIndex](num1, num2)[1];
  const answer = String(mathFunctions[currentFnIndex](num1, num2)[0]);
  return [task, answer];
};

export default async () => {
  await runScript(makeCalcTask, rule);
};
