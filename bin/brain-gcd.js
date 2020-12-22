#!/usr/bin/env node

import game from '../src/games/gcd.js';

(async () => {
  await game();
  process.exit(0);
})();
