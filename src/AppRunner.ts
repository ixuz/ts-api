import { ComponentsManager } from 'componentsjs';
import * as Path from 'path';

export class AppRunner {
  // eslint-disable-next-line class-methods-use-this
  public async run(): Promise<unknown> {
    const componentsManager = await ComponentsManager.build({
      mainModulePath: Path.join(__dirname, '/..'), // Path to your npm package's root
    });

    await componentsManager.configRegistry.register('config/config.jsonld');

    const api = 'urn:ts-api:Api';
    const apiInstance = await componentsManager.instantiate(api);

    return apiInstance;
  }
}
