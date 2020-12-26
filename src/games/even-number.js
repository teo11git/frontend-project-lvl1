import makeScript from '../index.js';

import randomNum from '../tools/random-gen.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenTask = () => {
  const task = randomNum(0, 100);
  const answer = task % 2 === 0 ? 'yes' : 'no';
  return [task, answer];
};

evenTask();

export default async () => {
  await makeScript(evenTask, rule);
};
