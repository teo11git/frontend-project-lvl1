import askUser from './cli.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const rightAnswerCount = 3;
const errorMessage = ' is wrong answer ;( Correct answer was '.
const endMessage= 'Let\'s try again, ';
const winnerMessage = 'Congratulations, ';


export default async function(name, gameGen, counter) => {
  const [ quest, rightAnswer ] = gameGen();
  
  if (counter === 0) {
    log(`${winnerMessage}${name}!`);
    return;
  }

  log(`Question: ${quest}`);
  const userAnswer = await askUser('Your answer: ');
  if (userAnswer === rightAnswer) {
    await game(name, gameGen()[0], counter - 1);
  } else {
    log(`${userAnswer}${errorMessage}${rightAnswer}.`);
    log(`${looserMessage}${name}!`);
  }
};


