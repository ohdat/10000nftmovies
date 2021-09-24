import { request } from 'umi';

export async function getBlindboxInfo() {
  return request('https://goods.ohdat.io/v2/goods/detail?id=3', {
    method: 'GET',
  });
}

export async function getWhiteList() {
  return request('https://item.ohdat.io/v2/nft_movie/white_list', {
    method: 'GET',
  });
}
