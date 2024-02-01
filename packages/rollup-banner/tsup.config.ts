import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/*.ts'],
  format: ['cjs', 'esm' /*'iife' */],
  splitting: true,
  cjsInterop: true,
  // globalName: 'i18nHelper',
  external: ['@jswork/next', '@jswork/banner-defaults', '@jswork/next-nice-comments'],
  clean: true,
  dts: true,
  sourcemap: true,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  }
});
