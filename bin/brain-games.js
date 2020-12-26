#!/usr/bin/env node

import askName from '../src/cli/ask-user.js';

(async () => {
  console.log('Welcome to Brain Games!');
  const name = await askName();
  console.log(`Hello, ${name}!`);
  process.exit(0);
})();
