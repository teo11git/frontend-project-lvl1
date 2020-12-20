import askUser from './cli/askUser.js';
import round from './cli/round.js';

const roundCount = 3;

export default async function(gameFn) {
  console.log('Welcome to the Brain Games!');
  const name = await askUser();
  await round(name, gameFn, roundCount);
}
