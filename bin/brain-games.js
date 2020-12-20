#!/usr/bin/env node

import askName from '../src/cli/askUser.js';

(async () => {
  console.log('Welcome to Brain Games!');
  await askName();
  process.exit(0);
})();
