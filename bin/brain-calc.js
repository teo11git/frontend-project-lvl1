#!/usr/bin/env node

import game from '../src/games/brainCalc.js';

(async () => {
  await game();
  process.exit(0);
})();
