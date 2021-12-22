import 'reflect-metadata';
import { container } from 'tsyringe';
import Module from './Module/ModuleA';
// import Module from './Module/ModuleB';
import Api from './Api';

container.register('Module', { useClass: Module });
container.register('Api', { useClass: Api });

const api = container.resolve(Api);
console.log('api.toString():', api.toString());
