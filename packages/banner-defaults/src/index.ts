import sdf from '@jswork/simple-date-format';
import es8date from '@jswork/east8date';
import readPkg from '@jswork/read-pkg-json';

export default (inPkg?: Record<string, any>): string[] => {
  const pkg = inPkg || readPkg();
  const version = pkg.gtcVersion || pkg.version;
  const _version = version === '0.0.0' ? undefined : version;
  const pairs = [
    { key: 'name' },
    { key: 'description' },
    { key: 'homepage' },
    { key: 'version', value: _version },
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
