#!/usr/bin/env node

import askName from '../src/cli/ask-user.js';

console.log('Welcome to Brain Games!');
const name = askName();
console.log(`Hello, ${name}!`);
