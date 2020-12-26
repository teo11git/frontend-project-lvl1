#!/usr/bin/env node

import startGame from '../src/games/prime-number.js';

(async () => {
  await startGame();
  process.exit(0);
})();
