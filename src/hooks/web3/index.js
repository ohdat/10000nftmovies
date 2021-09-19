import React from 'react';
import Web3, { Web3ReactProvider, getLibrary } from './web3';

export default Web3;

export function Web3Provider({ children }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3.Provider>{children}</Web3.Provider>
    </Web3ReactProvider>
  );
}
