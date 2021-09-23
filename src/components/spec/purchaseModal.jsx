import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';
import { ConnectorNames } from '../../hooks/web3/connectors';
import Web3 from '../../hooks/web3';

import './purchaseModal.less';

console.log('ConnectorNames', ConnectorNames);

const PurchaseModal = (props) => {
  const { visible, handleClose } = props;
  const [purchaseNumber, setPurchaseNumber] = useState(1);
  const { currentAccount, disconnect, connect, purchase } = Web3.useContainer();
  const handleCancel = () => {
    handleClose();
  };

  const handleOk = () => console.log('ok');

  const onChangePurchaseNumber = (e) => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      setPurchaseNumber(value);
    }
  };

  const handleConnect = (connectorName) => {
    if (currentAccount) {
      console.log('currentAccount', currentAccount);
    } else {
      connect(connectorName);
    }
  };

  return (
    <Modal
      title=""
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      maskStyle={{ background: 'rgba(255, 255, 255, 0.85)' }}
      width={'80%'}
    >
      <div className="purchase-box">
        <div className="purchase-img">
          <img src={require('../../assets/images/purchase.jpeg')} />
        </div>
        <div className="purchase-input">
          <Input
            value={purchaseNumber}
            onChange={(e) => onChangePurchaseNumber(e)}
            placeholder="请输入购买数量"
            maxLength={25}
          />
        </div>
        <Button
          className="purchase-btn"
          onClick={() => handleConnect(ConnectorNames.Injected)}
        >
          MINT
        </Button>
      </div>
    </Modal>
  );
};

export default PurchaseModal;
