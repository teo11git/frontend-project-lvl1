import askUser from './cli/askUser.js';
import round from './cli/round.js';

const roundCount = 3;

export default async (gameFn, rules) => {
  console.log('Welcome to the Brain Games!');
  const name = await askUser();
  console.log(rules);
  await round(name, gameFn, roundCount);
}
