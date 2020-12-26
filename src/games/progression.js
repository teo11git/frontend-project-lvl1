import runScript from '../index.js';

import getRandomNum from '../tools/random-gen.js';

const rule = 'What number is missing in the progression?';

const makeProgressionTask = () => {
  const term = getRandomNum(1, 50);
  const progLength = getRandomNum(5, 10);
  const startNum = getRandomNum(0, 100);
  const hiddenElement = getRandomNum(0, progLength - 1);
  const progression = [];
  const startProgGen = (num, index, acc) => {
    if (index === 0) {
      return acc;
    }
    progression.push(num);
    return startProgGen(num + term, index - 1);
  };

  startProgGen(startNum, progLength);
  const answer = String(progression[hiddenElement]);
  progression[hiddenElement] = '..';
  const task = (progression).join(' ');
  return [task, answer];
};

export default async () => {
  await runScript(makeProgressionTask, rule);
};
