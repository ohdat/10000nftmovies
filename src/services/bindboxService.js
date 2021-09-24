import { request } from 'umi';

export async function getBlindboxInfo() {
  return request('https://goods.dev.xxjio.com/v2/goods/detail?id=3', {
    method: 'GET',
  });
}

export async function getWhiteList() {
  return request('https://item.dev.xxjio.com/v2/nft_movie/white_list', {
    method: 'GET',
  });
}
