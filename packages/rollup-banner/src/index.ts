import bannerDefs from '@jswork/banner-defaults';
import '@jswork/next-nice-comments';

type BannerType = 'html'|'css' | 'js';
type RollupBannerOptions = {
  type?: BannerType
  pkg: object
};

const defaults = { type: 'js' };

const rollupBanner = (inOptions: RollupBannerOptions): string => {
  const { pkg, type } = { ...defaults, ...inOptions };
  return nx.niceComments(bannerDefs(pkg), type)
};

export default rollupBanner;
