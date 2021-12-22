import { injectable } from 'tsyringe';
import type { IModule } from 'Module/IModule';

@injectable()
export default class ModuleB implements IModule {
  private readonly id: number;

  public constructor() {
    this.id = 456;
  }

  public getId() {
    return this.id;
  }
}
