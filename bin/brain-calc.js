#!/usr/bin/env node

import startGame from '../src/games/calc.js';

(async () => {
  await startGame();
  process.exit(0);
})();
