import script from '../index.js';

import randomNum from '../tools/random-gen.js';

const rule = 'What number is missing in the progression?';

const progressionsTask = () => {
  const term = randomNum(1, 50);
  const progLength = randomNum(5, 10);
  const startNum = randomNum(0, 100);
  const hiddenElement = randomNum(0, progLength - 1);
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
  return [task, answer];
};

export default async () => {
  await script(progressionsTask, rule);
};
