#!/usr/bin/env node

import startGame from '../src/games/progression.js';

(async () => {
  await startGame();
  process.exit(0);
})();
