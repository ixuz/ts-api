#!/usr/bin/env node
const { AppRunner } = require('..');

const main = async () => {
  const appInstance = await new AppRunner().run();
  // appInstance.start();
  console.log('api.toString():', appInstance.toString());
};

main();
