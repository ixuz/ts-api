import { IModule } from './IModule';

export class ModuleB implements IModule {
  private readonly id: number;

  public constructor() {
    this.id = 456;
  }

  public getId() {
    return this.id;
  }
}
