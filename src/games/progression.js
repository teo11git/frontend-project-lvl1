import runScript from '../index.js';

import getRandomNum from '../tools/random-gen.js';

const rule = 'What number is missing in the progression?';
const makeProgression = (firstNum, term, progressionLength) => {
  const progression = [];
  let currentLength = 0;
  let currentNum = firstNum;
  while (currentLength < progressionLength) {
    progression.push(currentNum);
    currentNum = currentNum + term;
    currentLength += 1;
  }
  return progression;
};

const makeRoundData = () => {
  const progLength = getRandomNum(5, 10);
  const startNum = getRandomNum(0, 100);
  const hiddenElementIndex = getRandomNum(0, progLength - 1);
  const term = getRandomNum(1, 50);
  const progression = makeProgression(startNum, term, progLength);
  const answer = String(progression[hiddenElementIndex]);
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  runScript(makeRoundData, rule);
};
