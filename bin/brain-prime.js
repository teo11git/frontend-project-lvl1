#!/usr/bin/env node

import game from '../src/games/brainPrime.js';

(async () => {
  await game();
  process.exit(0);
})();
