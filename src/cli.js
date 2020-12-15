import readlineSync from 'readline-sync';

function greetingsByName() {
		const name = readlineSync.question('May I have your name? ');
		console.log(`Hello, {name}!`);
}
greetingsByName();

//export { greetingsByName };
