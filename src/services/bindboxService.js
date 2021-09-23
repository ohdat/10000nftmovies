import { request } from 'umi';

export async function getBlindboxInfo() {
  return request('https://goods.dev.xxjio.com/v2/goods/detail?id=3', {
    method: 'GET',
  });
}
