import { inject, injectable } from 'tsyringe';
import { IModule } from './Module/IModule';

@injectable()
export default class Api {
  private readonly module: IModule;

  constructor(@inject('Module') module: IModule) {
    this.module = module;
  }

  toString(): string {
    return `Api using module: ${this.module.getId()}`;
  }
}
