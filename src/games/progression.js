import script from '../index.js';

import randomNum from '../tools/random-gen.js';

const rule = 'What number is missing in the progression?';

const progressionsTask = () => {
  const term = randomNum({ min: 1, max: 50 });
  const progLength = randomNum({ min: 5, max: 10 });
  const startNum = randomNum({ min: 0, max: 100 });
  const hiddenElement = randomNum({ min: 0, max: progLength - 1 });
  const progGen = (num, index, acc) => {
    if (index === 0) {
      return acc;
    }
    return progGen(num + term, index - 1, [...acc, num]);
  };

  const progression = progGen(startNum, progLength, []);
  const answer = String(progression[hiddenElement]);
  progression[hiddenElement] = '..';
  const task = (progression).join(' ');
  // console.log(`task = ${task}, answer = ${answer}`); // !!!
  return [task, answer];
};

export default async () => {
  await script(progressionsTask, rule);
};
