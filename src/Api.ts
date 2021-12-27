import { ILogger, IServer } from '@iotakingdoms/core';

export class Api {
  private readonly logger: ILogger;
  private readonly name: string;
  private readonly server: IServer;

  constructor(logger: ILogger, name: string, server: IServer) {
    this.logger = logger;
    this.name = name;
    this.server = server;
  }

  public async start(): Promise<void> {
    await this.server.start();
    this.onStarted(this);
  }

  public async stop(): Promise<void> {
    await this.server.stop();
    this.onStopped(this);
  }

  public onStarted(api: Api): void {
    this.logger.info(`Api[${api.getName()}] started!`);
  }

  public onStopped(api: Api): void {
    this.logger.info(`Api[${api.getName()}] stopped!`);
  }

  public getName(): string {
    return this.name;
  }

  public getServer(): IServer {
    return this.server;
  }
}
