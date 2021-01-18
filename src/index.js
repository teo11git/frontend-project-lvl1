import askUser from './cli/ask-user.js';

const { log } = console;

export default async (makeRoundData, rules) => {
  log('Welcome to the Brain Games!');
  const name = await askUser();
  log(rules);
  let roundCount = 3;

  while (roundCount !== 0) {
    const [question, rightAnswer] = makeRoundData();
    log(`Question: ${question}`);
    const userAnswer = await askUser('Your answer: ');
    if (userAnswer !== rightAnswer) {
      log(`'${userAnswer}' is wrong answer ;( Correct answer was '${rightAnswer}'.`);
      log(`Let's try again, ${name}!`);
      return;
    }
    log('Correct!');
    roundCount -= 1;
  }
  log(`Congratulations, ${name}!`);
  return;
};
