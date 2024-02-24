import path from 'path';
import sdf from '@jswork/simple-date-format';
import es8date from '@jswork/east8date';

export default (inPkg: Record<string, any>): string[] => {
  const cwd = process.cwd();
  const pkg = inPkg || require(path.join(cwd, './package.json'));
  const version = pkg.gtcVersion || pkg.version;
  const pairs = [
    { key: 'name' },
    { key: 'description' },
    { key: 'homepage' },
    { key: 'version', value: version },
    { key: 'date', value: sdf('datetime', es8date()) },
    { key: 'license' },
  ];

  return pairs
    .map((item) => {
      const value = item.value || pkg[item.key];
      return value ? `${item.key}: ${value}` : '';
    })
    .filter(Boolean);
};
