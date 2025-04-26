import fn from '../src';

describe('Normal test cases', () => {
  test('should generate js style comments', () => {
    const lines = ['name: nice-comments', 'version: 1.0.0'];
    const res = fn(lines, 'js');
    expect(res).toBe('/*!\n * name: nice-comments\n * version: 1.0.0\n */\n\n');
  });

  test('should generate css style comments', () => {
    const lines = ['name: nice-comments', 'version: 1.0.0'];
    const res = fn(lines, 'css');
    expect(res).toBe('/*!\n * name: nice-comments\n * version: 1.0.0\n */\n\n');
  });

  test('should generate html style comments', () => {
    const lines = ['name: nice-comments', 'version: 1.0.0'];
    const res = fn(lines, 'html');
    expect(res).toBe('<!--\n * name: nice-comments\n * version: 1.0.0\n-->\n\n');
  });

  test('should generate raw style comments', () => {
    const lines = ['name: nice-comments', 'version: 1.0.0'];
    const res = fn(lines, 'raw');
    expect(res).toBe(' name: nice-comments\n version: 1.0.0');
  });

  test('should work with custom format', () => {
    const lines = ['name: nice-comments', 'version: 1.0.0'];
    const customFormat = {
      start: '/**\n',
      lineWith: ' > ',
      end: '\n*/\n'
    };
    const res = fn(lines, customFormat);
    expect(res).toBe('/**\n > name: nice-comments\n > version: 1.0.0\n*/\n');
  });
});
