/* eslint-disable no-console */
import { ConsoleLogger } from '../../../src/logger/ConsoleLogger';

describe('ConsoleLogger', () => {
  let logger: ConsoleLogger;

  beforeAll(() => {
    logger = new ConsoleLogger();
    jest.spyOn(global.console, 'debug');
    jest.spyOn(global.console, 'info');
    jest.spyOn(global.console, 'warn');
    jest.spyOn(global.console, 'error');
  });

  it('calls the console functions.', () => {
    logger.debug('Debug message');
    expect(console.debug).toHaveBeenCalledTimes(1);
    logger.info('Info message');
    expect(console.info).toHaveBeenCalledTimes(1);
    logger.warn('Warning message');
    expect(console.warn).toHaveBeenCalledTimes(1);
    logger.error('Error message');
    expect(console.error).toHaveBeenCalledTimes(1);
  });
});
