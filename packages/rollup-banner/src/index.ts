import fs from 'fs';
import bannerDefs from '@jswork/banner-defaults';
import nx from '@jswork/next';
import '@jswork/next-nice-comments';

type BannerType = 'html' | 'css' | 'js';
type JSONType = Record<string, any>;
type RollupBannerOptions = {
  type?: BannerType
  pkg?: JSONType;
};

const defaults = { type: 'js' };

const rollupBanner = (inOptions?: RollupBannerOptions): string => {
  let { pkg, type } = { ...defaults, ...inOptions };
  if (!pkg) pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8')) as JSONType;
  return nx.niceComments(bannerDefs(pkg), type);
};

export default rollupBanner;
