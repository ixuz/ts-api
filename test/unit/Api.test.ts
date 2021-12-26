import { Api } from '../../src/Api';
import { IServer } from '../../src/server/IServer';

describe('Api', () => {
  let server: IServer;

  beforeAll(() => {
    server = {
      start: jest.fn(),
      stop: jest.fn(),
      getPort: jest.fn(),
    };
  });

  it('starts.', async () => {
    const api = new Api('TestApi', server);
    await api.start();
    expect(api.getServer()).toBe(server);
    await api.stop();
  });
});
