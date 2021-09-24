export const chainId = 1;
// TODO: 正式环境
// export const chainId = 1;
export const rpcUrls = [
  'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
];

export default {
  chainId: '0x' + chainId.toString(16),
  chainName: 'Ethereum Mainnet',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'eth',
    decimals: 18,
  },
  rpcUrls,
  blockExplorerUrls: ['https://etherscan.io'],
};
