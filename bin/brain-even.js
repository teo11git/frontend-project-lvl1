#!/usr/bin/env node

import game from '../src/games/even-number.js';

(async () => {
  await game();
  process.exit(0);
})();
