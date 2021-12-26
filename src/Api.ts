import { IModule } from './IModule';

export class Api {
  private readonly module: IModule;

  constructor(module: IModule) {
    this.module = module;
  }

  sum(a: number, b: number) {
    return this.module.getId() + a + b;
  }

  toString(): string {
    return `Saying ${this.module.getId()}`;
  }
}
