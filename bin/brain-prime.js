#!/usr/bin/env node

import game from '../src/games/prime-number.js';

(async () => {
  await game();
  process.exit(0);
})();
