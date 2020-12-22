import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const asyncQuestion = (data) => new Promise((resolve) => rl.question(data, resolve));

const greetings = 'May I have your name? ';

export default async (query = greetings) => {
  const value = await asyncQuestion(query);
  if (query === greetings) {
    console.log(`Hello, ${value}!`);
  }
  return new Promise((resolve) => resolve(value));
};
