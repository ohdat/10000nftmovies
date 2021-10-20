import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  base: './',
  publicPath: './',
  hash: true,
  history: {
    type: 'browser',
  },
  dva: {
    hmr: true,
  },
  favicon: 'favicon.ico',
  routes,
  title: '10000 Movies about Sam. | 10,000 MOVIES ABOUT SAM. literally.',
});
