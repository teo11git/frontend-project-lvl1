import askUser from './cli/askUser.js';
import round from './cli/round.js';

import EvenGame from './taskGenerators/isEvenTask.js';

import randomNum from './tools/randomGen.js';

const roundCount = 3;

export default async function(gameName) {
const map = {
  brainEven: EvenGame,
};
  console.log('Welcome to the Brain Games!')
  const name = await askUser();
  await round(name, map[gameName], roundCount);
}
