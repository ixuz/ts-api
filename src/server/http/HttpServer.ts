import {
  Server,
  createServer,
  IncomingMessage,
  ServerResponse,
  STATUS_CODES,
} from 'http';
import { IServer } from '../IServer';

export class HttpServer implements IServer {
  private readonly server: Server;

  private readonly port: number;

  constructor(port: number) {
    this.server = createServer(HttpServer.handle);
    this.port = port;
    this.server.on('listening', () => HttpServer.onListening(this));
    this.server.on('close', () => HttpServer.onClose(this));
    this.server.on('error', (err: Error) => HttpServer.onError(this, err));
  }

  public async start(): Promise<void> {
    return new Promise((resolve) => {
      this.server.listen(this.port, () => {
        HttpServer.onStarted(this);
        resolve();
      });
    });
  }

  public async stop(): Promise<void> {
    return new Promise((resolve) => {
      this.server.close(() => {
        HttpServer.onStopped(this);
        resolve();
      });
    });
  }

  public getServer(): Server {
    return this.server;
  }

  public getPort(): number {
    return this.port;
  }

  public static handle(req: IncomingMessage, res: ServerResponse): void {
    res.setHeader('Server', 'ts-api');
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ error: STATUS_CODES[404] }));
  }

  public static onStarted(server: IServer): void {
    console.log(`HttpServer[port:${server.getPort()}] started!`);
  }

  public static onStopped(server: IServer): void {
    console.log(`HttpServer[port:${server.getPort()}] stopped!`);
  }

  public static onListening(server: IServer): void {
    console.log(`Server listening on port ${server.getPort()}`);
  }

  public static onClose(server: IServer): void {
    console.log(`Server stopped listening on port ${server.getPort()}`);
  }

  public static onError(server: IServer, err: Error): void {
    console.log(`Server error ${err}`);
  }
}
