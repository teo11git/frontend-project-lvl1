#!/usr/bin/env node

import game from '../src/games/calc.js';

(async () => {
  await game();
  process.exit(0);
})();
