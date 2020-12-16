// import prompt from 'prompt';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askName() {
  rl.question('May I have your name? ', function(name) {
    console.log(`Hello, ${name}!`);
    rl.close();
  });

  rl.on('close', function () {
    process.exit(0);
  })
};

export { askName };
