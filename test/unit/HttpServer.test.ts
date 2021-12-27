import { ILogger } from '../../src/logger/ILogger';
import { HttpServer } from '../../src/server/http/HttpServer';

describe('HttpServer', () => {
  let logger: ILogger;
  let server: HttpServer;
  let request: any;
  let response: any;

  beforeAll(async () => {
    logger = {
      debug: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
    };
    server = new HttpServer(logger, 3000, []);
    request = {};
    response = {
      setHeader: jest.fn(),
      end: jest.fn(),
    };

    await server.start();
  });

  afterAll(async () => {
    await server.stop();
  });

  it('handles requests.', async () => {
    server.handle(request, response);
    expect(server.getPort()).toBe(3000);
    expect(server.getServer()).not.toBeUndefined();
    expect(response.statusCode).toBe(404);
    expect(response.end).toHaveBeenCalledWith('{"error":"Not Found"}');
  });

  it('handles errors.', async () => {
    const error = new Error('Expected error message');
    const errorListener = jest.fn();
    server.getServer().once('error', errorListener);
    server.getServer().emit('error', error);
    expect(errorListener).toHaveBeenCalled();
    expect(errorListener).toHaveBeenCalledWith(error);
  });
});
