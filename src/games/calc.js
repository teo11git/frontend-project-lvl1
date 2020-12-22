import { cons, car, cdr } from '@hexlet/pairs';

import script from '../index.js';

import randomNum from '../tools/random-gen.js';

const rule = 'What is the result of the expression?';

const calcTask = () => {
  const mathFunctions = [
    (a, b) => cons(a + b, `${a} + ${b}`),
    (a, b) => cons(a - b, `${a} - ${b}`),
    (a, b) => cons(a * b, `${a} * ${b}`),
  ];

  const currentFnIndex = randomNum({ min: 0, max: 2 });
  const num1 = randomNum({ min: 0, max: 25 });
  const num2 = randomNum({ min: 0, max: 25 });
  const task = cdr(mathFunctions[currentFnIndex](num1, num2));
  const answer = String(car(mathFunctions[currentFnIndex](num1, num2)));
  return [task, answer];
};

export default async () => {
  await script(calcTask, rule);
};
