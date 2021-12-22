import { injectable } from 'tsyringe';
import type { IModule } from 'Module/IModule';

@injectable()
export default class ModuleMock implements IModule {
  private readonly id: number;

  constructor() {
    this.id = 100;
  }

  getId() {
    return this.id;
  }
}
