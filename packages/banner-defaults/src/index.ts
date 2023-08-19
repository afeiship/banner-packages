import path from 'path';
import dateformat from 'dateformat';

const DEFAULT_FORMAT = 'yyyy-mm-dd HH:MM:ss';
const getEast8Date = () => {
  const timezoneOffset = new Date().getTimezoneOffset();
  const east8Offset = 8 * 60;
  const offset = timezoneOffset + east8Offset;
  const east8Date = new Date(Date.now() + offset * 60 * 1000);
  return east8Date;
};

export default (inPkg?): string[] => {
  const pkg = inPkg || require(path.join(process.cwd(), './package.json'));
  const pairs = [
    { key: 'name' },
    { key: 'description' },
    { key: 'homepage' },
    { key: 'version' },
    { key: 'date', value: dateformat(getEast8Date(), DEFAULT_FORMAT) },
    { key: 'license' },
  ];

  return pairs
    .map((item) => {
      const value = item.value || pkg[item.key];
      return value ? `${item.key}: ${value}` : '';
    })
    .filter(Boolean);
};
