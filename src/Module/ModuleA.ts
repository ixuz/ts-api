import { injectable } from 'tsyringe';
import type { IModule } from 'Module/IModule';

@injectable()
export default class ModuleA implements IModule {
  private readonly id: number;

  public constructor() {
    this.id = 123;
  }

  public getId() {
    return this.id;
  }
}
