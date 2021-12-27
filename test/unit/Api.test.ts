import { Api } from '../../src/Api';
import { ILogger } from '../../src/logger/ILogger';
import { IServer } from '../../src/server/IServer';

describe('Api', () => {
  let logger: ILogger;
  let server: IServer;

  beforeAll(() => {
    logger = {
      debug: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
    };

    server = {
      start: jest.fn(),
      stop: jest.fn(),
      getPort: jest.fn(),
    };
  });

  it('starts.', async () => {
    const api = new Api(logger, 'TestApi', server);
    await api.start();
    expect(api.getServer()).toBe(server);
    await api.stop();
  });
});
