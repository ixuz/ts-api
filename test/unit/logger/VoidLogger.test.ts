import { VoidLogger } from '../../../src/logger/VoidLogger';

describe('VoidLogger', () => {
  let logger: VoidLogger;

  beforeAll(() => {
    logger = new VoidLogger();
  });

  it('does not crash', () => {
    logger.debug('Debug message');
    logger.info('Info message');
    logger.warn('Warning message');
    logger.error('Error message');
  });
});
