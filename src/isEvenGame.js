import askUser from './cli.js';

const { log } = console;
const intervalForGenerator = {
  min: 0,
  max: 100,
};
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const rightAnswerCount = 3;
const errorMessage = ' is wrong answer ;( Correct answer was '.
const endMessage= 'Let\'s try again, ';
const winnerMessage = 'Congratulations, ';

const numGen = () => {
  let { min, max } = intervalForGenerator;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isEven = (num) => num % 2 === 0;

const game = async (name, num, counter) => {
  const rightAnswer = isEven(num) ? 'yes' : 'no';
  
  if (counter === 0) {
    log(`${winnerMessage}${name}!`);
    return;
  }

  log(`Question: ${num}`);
  const userAnswer = await askUser('Your answer: ', false);
  if (userAnswer === rightAnswer) {
    await game(name, numGen(), counter - 1);
  } else {
    log(`${userAnswer}${errorMessage}${rightAnswer}.`);
    log(`${looserMessage}${name}!`);
  }
};

export default async function isEvenGame() {
  const name = await askUser(undefined, false);
  const number = numGen();
  log(rules);
  await game(name, number, rightAnswerCount);  
}

isEvenGame();
//process.exit(0);
