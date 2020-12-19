#!/usr/bin/env node

import game from '../src/games/brainGCD.js';

(async function() {
  await game();
  process.exit(0);
})();
