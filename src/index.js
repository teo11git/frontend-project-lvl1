import askUser from './cli/askUser.js';
import round from './cli/round.js';

import EvenGame from './taskGenerators/isEvenTask.js';
import calcGame from './taskGenerators/calcTask.js';
import gcdGame from './taskGenerators/gcdTask.js';
import progressionsGame from './taskGenerators/progressionsTask.js';

import randomNum from './tools/randomGen.js';

const roundCount = 3;

export default async function(gameName) {
const map = {
  brainEven: EvenGame,
  brainCalc: calcGame,
  brainGCD: gcdGame,
  brainProgressions: progressionsGame,
};
  console.log('Welcome to the Brain Games!')
  const name = await askUser();
  await round(name, map[gameName], roundCount);
}
