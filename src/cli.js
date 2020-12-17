// import prompt from 'prompt';
import readline from 'readline';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const parse = () => {
  return new Promise((resolve, reject) => {
    let data = [];

   rl.on('line', (line) => {
      data.push(line);
      rl.close();
    });

    rl.on('close', () => {
      resolve(data);
    });
  });
};

const greetings = 'May i have your name?';

async function askQuestion(query, isNeedExit = true) {

  rl.prompt(false);
  console.log(`${query} `);
  const value = await parse();

  if (query === greetings) {
    console.log(`Hello, ${value}!`);
  }

  if (isNeedExit) {
    process.exit(0);
  }

  return new Promise ((resolve, reject) => {
    resolve(value);
  });

};

askQuestion(greetings);

export { askQuestion };
