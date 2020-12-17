// import prompt from 'prompt';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const asyncQuestion = (data) => new Promise((resolve) => rl.question(data, resolve));

const greetings = 'May i have your name? ';

export default async function (query = greetings, isNeedExit = true) {
  const value = await asyncQuestion(query);

  if (query === greetings) {
    console.log(`Hello, ${value}!`);
  }
  if (isNeedExit) {
    process.exit(0);
  }
  return new Promise((resolve) => resolve(value));
}
