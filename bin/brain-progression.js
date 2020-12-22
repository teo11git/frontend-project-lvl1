#!/usr/bin/env node

import game from '../src/games/progression.js';

(async () => {
  await game();
  process.exit(0);
})();
