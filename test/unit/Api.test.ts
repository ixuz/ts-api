import Api from '../../src/Api';

describe('Api', () => {
  it('stringifies.', () => {
    const api = new Api();
    expect(api.toString()).toBe('Saying 123');
  });

  it('sums.', () => {
    const api = new Api();
    expect(api.sum(1, 2)).toBe(126);
  });
});
