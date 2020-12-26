import makeScript from '../index.js';

import getRandomNum from '../tools/random-gen.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeEvenTask = () => {
  const task = getRandomNum(0, 100);
  const answer = task % 2 === 0 ? 'yes' : 'no';
  return [task, answer];
};

export default async () => {
  await makeScript(makeEvenTask, rule);
};
