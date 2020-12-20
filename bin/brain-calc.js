#!/usr/bin/env node

import game from '../src/games/brainCalc.js';

(async function () {
  await game();
  process.exit(0);
})();
