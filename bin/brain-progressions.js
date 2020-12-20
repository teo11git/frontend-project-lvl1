#!/usr/bin/env node

import game from '../src/games/brainProgressions.js';

(async function() {
  await game();
  process.exit(0);
})();
