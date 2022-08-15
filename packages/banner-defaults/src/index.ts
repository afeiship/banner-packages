import path from 'path';
import dateformat from 'dateformat';

const DEFAULT_FORMAT = 'yyyy-mm-dd HH:MM:ss';

export default (inPkg?): string[] => {
  const pkg = inPkg || require(path.join(process.cwd(), './package.json'));
  const pairs = [
    { key: 'name' },
    { key: 'description' },
    { key: 'homepage' },
    { key: 'version' },
    { key: 'date', value: dateformat(null, DEFAULT_FORMAT) },
    { key: 'license' },
  ];

  return pairs
    .map((item) => {
      const value = item.value || pkg[item.key];
      return value ? `${item.key}: ${value}` : '';
    })
    .filter(Boolean);
};
