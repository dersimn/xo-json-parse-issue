#!/usr/bin/env node

import fs from 'fs';
const pkg = JSON.parse(await fs.promises.readFile(new URL('./package.json', import.meta.url)));

console.log('Package name is:', pkg.name);