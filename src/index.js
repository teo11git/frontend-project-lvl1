import askUser from './cli/ask-user.js';

const { log } = console;

export default async (makeQuestion, rules) => {
  log('Welcome to the Brain Games!');
  const name = await askUser();
  log(`${rules}`);
  const startGame = async (roundCount = 3) => {
    if (roundCount === 0) {
      log(`Congratulations, ${name}!`);
      return;
    }
    const [quest, rightAnswer] = makeQuestion();
    log(`Question: ${quest}`);
    const userAnswer = await askUser('Your answer: ');
    if (userAnswer === String(rightAnswer)) {
      log('Correct!');
      await startGame(roundCount - 1);
    } else {
      log(`'${userAnswer}' is wrong answer ;( Correct answer was '${rightAnswer}'.`);
      log(`Let\'s try again, ${name}!`);
    }
  };
  await startGame();
};
