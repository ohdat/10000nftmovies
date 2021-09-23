import React, { useState } from 'react';
import { Modal, Input, Button, message } from 'antd';
import { ConnectorNames } from '../../hooks/web3/connectors';
import { connect } from 'umi';
import Web3 from '../../hooks/web3';

import './purchaseModal.less';

console.log('ConnectorNames', ConnectorNames);

const PurchaseModal = (props) => {
  const { visible, handleClose, cost, remain } = props;
  const [purchaseNumber, setPurchaseNumber] = useState(1);
  const { currentAccount, purchase } = Web3.useContainer();

  const handleCancel = () => {
    handleClose();
  };

  const onChangePurchaseNumber = (e) => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      setPurchaseNumber(parseInt(value));
    }
  };

  const handlePurchase = () => {
    if (currentAccount) {
      purchase(purchaseNumber)
        .then((res) => {})
        .catch((err) => {
          if (err.message.match(/insufficient funds/)) {
            message.error('ETH余额不足');
          }
        });
    } else {
      message.error('请先连接钱包');
    }
  };

  const handleCalcu = (sign) => {
    const reg = /^-?\d*(\.\d*)?$/;
    if (!isNaN(purchaseNumber) && reg.test(purchaseNumber)) {
      const res = parseInt(purchaseNumber);
      if (res <= 1) return;
      if (res >= 100) return;
      if (sign === 'minus') {
        setPurchaseNumber(res - 1);
      }
      if (sign === 'plus') {
        setPurchaseNumber(res + 1);
      }
    }
  };

  return (
    <Modal
      title=""
      visible={visible}
      onCancel={handleCancel}
      footer={null}
      maskStyle={{ background: 'rgba(255, 255, 255, 0.85)' }}
      width={'80%'}
    >
      <div className="purchase-box">
        <div className="purchase-img">
          <img src={require('../../assets/images/purchase.jpeg')} />
        </div>
        <div className="remain-amount purchase-txt">{remain} Remains</div>
        <div className="purchase-wrapper">
          <div className="purchase-input">
            <div className="input-wrapper">
              <div
                className="plus-icon calcu-btn"
                onClick={() => handleCalcu('plus')}
              >
                <img src={require('../../assets/images/plus.png')} alt="" />
              </div>
              <Input
                className="calcu-input"
                value={purchaseNumber}
                onChange={(e) => onChangePurchaseNumber(e)}
                placeholder="请输入购买数量"
                maxLength={25}
              />
              <div
                className="minus-icon calcu-btn"
                onClick={() => handleCalcu('minus')}
              >
                <img src={require('../../assets/images/minus.png')} alt="" />
              </div>
            </div>
          </div>
          <div className="cost-amount purchase-txt">Cost: {cost}&nbsp;ETH</div>
          <div className="btn-box">
            <Button className="purchase-btn" onClick={() => handlePurchase()}>
              MINT
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default connect(({ blindbox }) => ({
  cost: blindbox.costAmount,
  remain: blindbox.remainAmount,
}))(PurchaseModal);
