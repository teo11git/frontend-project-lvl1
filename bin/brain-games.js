#!/usr/bin/env node

import askUser from '../src/tools/ask-user.js';

console.log('Welcome to Brain Games!');
const name = askUser('May I have your name? ');
console.log(`Hello, ${name}!`);
