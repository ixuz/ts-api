import { Api } from '../../src/Api';
import { IModule } from '../../src/IModule';

describe('Api', () => {
  let module: IModule;

  beforeAll(() => {
    module = {
      getId: jest.fn(() => (100)),
    };
  });

  it('stringifies.', () => {
    const api = new Api(module);
    expect(api.toString()).toBe('Saying 100');
  });

  it('sums.', () => {
    const api = new Api(module);
    expect(api.sum(1, 2)).toBe(103);
  });
});
