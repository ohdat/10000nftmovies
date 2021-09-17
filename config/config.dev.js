import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  base: '/',
  publicPath: '',
  define: {
    BASE_URL: 'https://item.dev.xxjio.com/v2/nft_movie/',
  },
  hash: true,
  history: {
    type: 'browser',
  },
  dva: {
    hmr: true,
  },
  routes,
});
