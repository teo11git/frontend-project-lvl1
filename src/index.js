import askUser from './cli/ask-user.js';

const roundCount = 3;

const errorMessage = ' is wrong answer ;( Correct answer was ';
const endMessage = 'Let\'s try again, ';
const winnerMessage = 'Congratulations, ';

const { log } = console;

export default async (gameFn, rules) => {
  log('Welcome to the Brain Games!');
  const name = await askUser();
  log(rules);
  let i = 0;
  do {
    const [quest, rightAnswer] = gameFn();
    log(`Question: ${quest}`);
    const userAnswer = await askUser('Your answer: ');
    if (userAnswer === String(rightAnswer)) {
      log('Correct!');
    } else {
      log(`${userAnswer}${errorMessage}${rightAnswer}.`);
      log(`${endMessage}${name}!`);
      return;
    }
    i ++;
  } while (i < roundCount)
  log(`${winnerMessage}${name}`);
};
