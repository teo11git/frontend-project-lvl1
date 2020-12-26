import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const asyncQuestion = (data) => new Promise((resolve) => rl.question(data, resolve));

export default async (query = 'May I have your name? ') => {
  const value = await asyncQuestion(query);
  return value;
};
