import script from '../index.js';

import randomNum from '../tools/randomGen.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenTask = () => {
  const task = randomNum({ min: 0, max: 100 });
  const answer = task % 2 === 0 ? 'yes' : 'no';
  return [task, answer];
};

evenTask();

export default async () => {
  await script(evenTask, rule);
}
