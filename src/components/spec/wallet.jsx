import React, { useState, useEffect } from 'react';
import Web3 from '../../hooks/web3';
import ConnectWalletModal from './connectWalletModal';

export default function HeaderWallet() {
  const [connectModalsible, showConnectModal] = useState(false);
  const { currentAccount, disconnect } = Web3.useContainer();

  let connectContent;
  if (currentAccount) {
    connectContent = (
      <div>
        当前地址：{currentAccount}，
        <button onClick={disconnect}>取消链接</button>
      </div>
    );
  } else {
    connectContent = (
      <div>
        <button onClick={() => showConnectModal(true)}>链接钱包</button>
      </div>
    );
  }

  return (
    <>
      <div className="header-wallet">{connectContent}</div>
      <ConnectWalletModal
        visible={connectModalsible}
        onClose={() => showConnectModal(false)}
        onSuccess={() => showConnectModal(false)}
      />
    </>
  );
}
