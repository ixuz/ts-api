import 'reflect-metadata';
import ModuleMock from '../../src/Module/ModuleMock';
import Api from '../../src/Api';

describe('Api', () => {
  let module: ModuleMock;

  beforeEach(() => {
    module = new ModuleMock();
  });

  it('stringifies.', () => {
    const api = new Api(module);
    expect(api.toString()).toBe('Api using module: 100');
  });
});
