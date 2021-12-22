import { IModule } from './IModule';

export class ModuleA implements IModule {
  private readonly id: number;

  public constructor() {
    this.id = 123;
  }

  public getId() {
    return this.id;
  }
}
