#!/usr/bin/env node

import startGame from '../src/games/gcd.js';

(async () => {
  await startGame();
  process.exit(0);
})();
