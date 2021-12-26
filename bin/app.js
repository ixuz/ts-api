#!/usr/bin/env node
const { AppRunner } = require('..');

async function main() {
  const apiInstance = await new AppRunner().run();

  async function shutDown() {
    await apiInstance.stop();
  }

  process.on('SIGTERM', shutDown);
  process.on('SIGINT', shutDown);

  await apiInstance.start();
}

main();
