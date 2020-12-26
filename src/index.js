import askUser from './cli/ask-user.js';

const errorMessage = ' is wrong answer ;( Correct answer was ';
const endMessage = 'Let\'s try again, ';
const winnerMessage = 'Congratulations, ';

const roundCount = 3;

const { log } = console;

export default async (makeQuestion, rules) => {
  log('Welcome to the Brain Games!');
  const name = await askUser();
  log(`${rules}`);
  const startGame = async (counter) => {
    if (counter === 0) {
      log(`${winnerMessage}${name}`);
      return;
    }
    const [quest, rightAnswer] = makeQuestion();
    log(`Question: ${quest}`);
    const userAnswer = await askUser('Your answer: ');
    if (userAnswer === String(rightAnswer)) {
      log('Correct!');
      await startGame(counter - 1);
    } else {
      log(`${userAnswer}${errorMessage}${rightAnswer}.`);
      log(`${endMessage}${name}!`);
    }
  };
  await startGame(roundCount);
};
