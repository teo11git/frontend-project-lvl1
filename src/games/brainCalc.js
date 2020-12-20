import script from '../index.js';

import randomNum from '../tools/randomGen.js';

const calcTask = () => {
  const mathFunctions = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b
  ];

  const currentFnIndex = randomNum({ min: 0, max: 2});
  const num1 = randomNum({ min: 0, max: 25 });
  const num2 = randomNum({ min: 0, max: 25 });
  let task;
  let answer;
  switch (currentFnIndex) {
    case 0:
      task = `${num1} + ${num2}`;
      answer = mathFunctions[currentFnIndex](num1, num2);
      break;
    case 1:
      task = `${num1} - ${num2}`;
      answer = mathFunctions[currentFnIndex](num1, num2);
      break;
    case 2:
      task = `${num1} * ${num2}`;
      answer = mathFunctions[currentFnIndex](num1, num2);
      break;
  }
  const result = [task, answer];
  console.log(result);
  return result;
};

export default async function() {
  await script(calcTask);
}
