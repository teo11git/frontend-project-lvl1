#!/usr/bin/env node

import game from '../src/games/brainEven.js';

(async function() {
  await game();
  process.exit(0);
})();
