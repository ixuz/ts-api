import { IServer } from './server/IServer';

export class Api {
  private readonly name: string;

  private readonly server: IServer;

  constructor(name: string, server: IServer) {
    this.name = name;
    this.server = server;
  }

  public async start(): Promise<void> {
    await this.server.start();
    Api.onStarted(this);
  }

  public async stop(): Promise<void> {
    await this.server.stop();
    Api.onStopped(this);
  }

  public static onStarted(api: Api): void {
    console.log(`Api[${api.getName()}] started!`);
  }

  public static onStopped(api: Api): void {
    console.log(`Api[${api.getName()}] stopped!`);
  }

  public getName(): string {
    return this.name;
  }

  public getServer(): IServer {
    return this.server;
  }
}
