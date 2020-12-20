import script from '../index.js';

import randomNum from '../tools/randomGen.js';

const evenTask = () => {
  const task = randomNum({ min: 0, max: 100 });
  const answer = task % 2 === 0 ? 'yes' : 'no';
  return [task, answer];
};

evenTask();

export default async function() {
  await script(evenTask);
}
