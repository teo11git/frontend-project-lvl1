import runScript from '../index.js';

import getRandomNum from '../tools/random-gen.js';

const rule = 'What number is missing in the progression?';

const makeProgressionTask = () => {
  const progLength = getRandomNum(5, 10);
  const startNum = getRandomNum(0, 100);
  const hiddenElement = getRandomNum(0, progLength - 1);
  const startProgGen = (num, term, index) => {
    if (index === 0) {
      return [];
    }
    // progression.push(num);
    return [num, ...startProgGen(num + term, term, index - 1)];
  };

  const progression = startProgGen(startNum, getRandomNum(1, 50), progLength);
  const answer = String(progression[hiddenElement]);
  progression[hiddenElement] = '..';
  const task = progression.join(' ');
  return [task, answer];
};

export default async () => {
  await runScript(makeProgressionTask, rule);
};
