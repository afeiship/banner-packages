import fs from 'fs';
import bfd from '@jswork/banner-defaults';
import niceComments from '@jswork/nice-comments';

type BannerType = 'html' | 'css' | 'js';
type JSONType = Record<string, any>;
type RollupBannerOptions = {
  type?: BannerType;
  pkg?: JSONType;
};

const defaults = { type: 'js' };

const tsupBanner = (inOptions?: RollupBannerOptions): string => {
  let { pkg, type } = { ...defaults, ...inOptions };
  if (!pkg) pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8')) as JSONType;
  return niceComments(bfd(pkg), type);
};

export default tsupBanner;
