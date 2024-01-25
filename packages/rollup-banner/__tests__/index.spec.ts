import rollupBanner from '../src';

describe('api.basic', () => {
  test('01/rollup-html comments', () => {
    const pkg = require('../package.json');
    const res = rollupBanner({ pkg, type: 'html' });
    expect(typeof res).toBe('string');
    expect(res.includes('<!--')).toBeTruthy();
  });

  test('02/rollup-css comments', () => {
    const pkg = require('../package.json');
    const res = rollupBanner({ pkg, type: 'css' });
    expect(typeof res).toBe('string');
    expect(res.includes('/*')).toBeTruthy();
  })

  test('03/rollup-js comments', () => {
    const pkg = require('../package.json');
    const res = rollupBanner({ pkg, type: 'js' });
    expect(typeof res).toBe('string');
    expect(res.includes('/*')).toBeTruthy();
  });

  // pkg: false
  test('04/rollup-js comments pkg/false', () => {
    const res = rollupBanner({ type: 'js' });
    expect(typeof res).toBe('string');
    expect(res.includes('/*')).toBeTruthy();
  })
});
