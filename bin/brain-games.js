#!/usr/bin/env node

import hello from '../src/cli.js';
import brainEven from './brain-even.js';

console.log('Welcome to the Brain Games!');
const name = hello();
console.log(`Hello, ${name}!`);
brainEven(name);

// eslint-disable-next-line import/prefer-default-export
export { name };
