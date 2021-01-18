import runScript from '../index.js';

import getRandomNum from '../tools/random-gen.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const makeRoundData = () => {
  const question = getRandomNum(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default async () => {
  await runScript(makeRoundData, rule);
};
