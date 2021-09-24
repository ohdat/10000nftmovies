import React, { useState } from 'react';
import { Modal, Input, Button, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { connect } from 'umi';
import Web3 from '../../hooks/web3';

import './purchaseModal.less';
import Decimal from 'decimal.js-light';

const antIcon = (
  <LoadingOutlined style={{ fontSize: 48, color: '#000' }} spin />
);

const PurchaseModal = (props) => {
  const [purchaseLoading, setPurchaseLoading] = useState(false);
  const { visible, handleClose, cost, remain } = props;
  const [purchaseNumber, setPurchaseNumber] = useState(1);
  const { currentAccount, purchase } = Web3.useContainer();

  const handleCancel = () => {
    handleClose();
  };

  const onChangePurchaseNumber = (e) => {
    const { value } = e.target;
    const reg = /^\d*(\.\d*)?$/;
    if (!isNaN(value) && reg.test(value) && value !== '') {
      if (parseInt(value) <= 100) {
        setPurchaseNumber(parseInt(value));
      } else if (parseInt(value) > 100) {
        setPurchaseNumber(parseInt(100));
      }
    } else {
      setPurchaseNumber(0);
    }
  };

  const handlePurchase = () => {
    if (currentAccount) {
      setPurchaseLoading(true);
      purchase(purchaseNumber)
        .then((res) => {
          if (res.success) {
            setPurchaseLoading(false);
            message.success('Purchase succcessufully');
          }
        })
        .catch((err) => {
          console.log('err', err);
          if (err.message.match(/insufficient funds/)) {
            setPurchaseLoading(false);
            message.error('Not enough ETH');
          }
          if (err.code === 4001) {
            message.info('Minting Cancelled');
            setPurchaseLoading(false);
            handleClose();
          }
        });
    } else {
      message.error('Please connect your ETH wallet');
    }
  };

  const handleCalcu = (sign) => {
    const reg = /^-?\d*(\.\d*)?$/;
    if (!isNaN(purchaseNumber) && reg.test(purchaseNumber)) {
      const res = parseInt(purchaseNumber);
      if (res <= 1 && sign === 'minus') return;
      if (res >= 100 && sign === 'plus') return;
      if (sign === 'minus') {
        setPurchaseNumber(res - 1);
      }
      if (sign === 'plus') {
        setPurchaseNumber(res + 1);
      }
    }
  };

  const handleCalcuCost = () => {
    const reg = /^-?\d*(\.\d*)?$/;
    if (!isNaN(purchaseNumber) && reg.test(purchaseNumber)) {
      const res = new Decimal(purchaseNumber).mul(cost).toFixed(2);
      return res;
    }
    return cost;
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
      <Spin spinning={purchaseLoading} indicator={antIcon}>
        <div className="purchase-box">
          <div className="purchase-img">
            <img src={require('../../assets/images/purchase.jpeg')} />
          </div>
          <div className="remain-amount purchase-txt">{remain} Remains</div>
          {remain > 0 ? (
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
                    placeholder="Amount of purchase"
                    maxLength={25}
                  />
                  <div
                    className="minus-icon calcu-btn"
                    onClick={() => handleCalcu('minus')}
                  >
                    <img
                      src={require('../../assets/images/minus.png')}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="cost-amount purchase-txt">
                Cost: {handleCalcuCost()}&nbsp;ETH
              </div>
              <div className="btn-box">
                <Button
                  className="purchase-btn"
                  onClick={() => handlePurchase()}
                >
                  MINT
                </Button>
              </div>
            </div>
          ) : (
            <div className="sell-out">
              <p>
                Sold out today！
                <br />
                Come back and try tomorrow！
              </p>
            </div>
          )}
        </div>
      </Spin>
    </Modal>
  );
};

export default connect(({ blindbox }) => ({
  cost: blindbox.costAmount,
  remain: blindbox.remainAmount,
}))(PurchaseModal);
