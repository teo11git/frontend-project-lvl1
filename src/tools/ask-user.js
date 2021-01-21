import readline from 'readline-sync';

export default (query) => {
  return readline.question(query);
};
