#!/usr/bin/env node

import startGame from '../src/games/even-number.js';

(async () => {
  await startGame();
  process.exit(0);
})();
