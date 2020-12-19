#!/usr/bin/env node

import gameScript from '../src/index.js';

(async function() {
  await gameScript('brainCalc');
  process.exit(0);
})();
