import path from 'path';
import dateformat from 'dateformat';
const DEFAULT_FORMAT = 'yyyy-mm-dd HH:MM:ss';

export default (inPkg?): string[] => {
  const pkg = inPkg || require(path.join(process.cwd(), './package.json'));
  return [
    `name: ${pkg.name}`,
    `description: ${pkg.description}`,
    `homepage: ${pkg.homepage}`,
    `version: ${pkg.version}`,
    `date: ` + dateformat(null, DEFAULT_FORMAT),
    `license: ${pkg.license}`,
  ];
};
