import fn from '../src';

describe('api.basic', () => {
  test('no provide pkg will get correct infomation', () => {
    const res = fn();

    expect(res[0]).toBe('name: @jswork/banner-defaults');
    expect(res[3].includes('version: ')).toBeTruthy();
  });

  test('provide pkg should get info from provider',()=>{
    const pkg = {
      name: '@jswork/banner-defaults-by-mock',
      version: 'mock version'
    };

    const res = fn(pkg);
    expect(res[0]).toBe('name: @jswork/banner-defaults-by-mock');
    expect(res[3]).toBe('version: mock version');
  })
});
