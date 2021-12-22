import 'reflect-metadata';
import { container } from 'tsyringe';
import ModuleA from './Module/ModuleA';
// import ModuleB from './ModuleB';
import Api from './Api';

container.register('Module', { useClass: ModuleA });
// container.register('Module', { useClass: ModuleB });
container.register('Api', { useClass: Api });

const api = container.resolve(Api);
console.log('api.toString():', api.toString());
