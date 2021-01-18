import readline from 'readline-sync';

export default (query = 'May I have your name? ') => {
  const value = readline.question(query);
  return value;
};
