#!/usr/bin/env node

import game from '../src/games/brainGCD.js';

(async () => {
  await game();
  process.exit(0);
})();
