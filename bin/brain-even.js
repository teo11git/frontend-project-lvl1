#!/usr/bin/env node

import gameScript from '../src/index.js';

(async function() {
  await gameScript('brainEven');
  process.exit(0);
})();
