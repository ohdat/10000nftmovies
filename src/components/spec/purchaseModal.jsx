import React, { useState } from 'react';
import { Modal, Input, Button, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import PurchaseSuccessModal from './purchaseSuccessModal';
import { Spin } from 'antd';
import { connect } from 'umi';
import Web3 from '../../hooks/web3';

import './purchaseModal.less';
import Decimal from 'decimal.js-light';

const purchaseState = {
  callMetamask: 'Confirming...',
  blockConfirming: 'Waiting for blockchain confirmation...',
};

const antIcon = (
  <LoadingOutlined style={{ fontSize: 48, color: '#000' }} spin />
);

const PurchaseModal = (props) => {
  const [purchaseLoading, setPurchaseLoading] = useState(false);
  const { visible, handleClose, cost, remain, whiteList } = props;
  const [purchaseNumber, setPurchaseNumber] = useState(1);
  const { currentAccount, purchase } = Web3.useContainer();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
      setPurchaseNumber(1);
    }
  };

  const handlePurchase = () => {
    if (currentAccount) {
      if (whiteList.indexOf(currentAccount.toLowerCase()) === -1) {
        message.error(
          'You are not on the whitelist. Please contact us in our discord channel. Or you can join our general entry queue later.',
        );
        return;
      }
      setPurchaseLoading('callMetamask');
      document.addEventListener(
        'transaction',
        (ev) => {
          setPurchaseLoading('blockConfirming');
        },
        false,
      );
      purchase(purchaseNumber)
        .then((res) => {
          if (res.success) {
            setPurchaseLoading(false);
            setShowSuccessModal(true);
            message.success('Purchase succcessufully');
            props.dispatch({
              type: 'blindbox/getBlindboxInfo',
            });
          }
        })
        .catch((err) => {
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

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    handleClose();
  };
  const _purchaseNumber = parseInt(purchaseNumber);
  return (
    <>
      <Modal
        title=""
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        maskStyle={{ background: 'rgba(255, 255, 255, 0.85)' }}
        width={'80%'}
      >
        <Spin
          spinning={purchaseLoading}
          indicator={antIcon}
          wrapperClassName="loading-box"
          tip={purchaseState[purchaseLoading]}
        >
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
                      <img
                        src={require('../../assets/images/plus.png')}
                        alt=""
                      />
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
                    disabled={
                      _purchaseNumber < 1 || _purchaseNumber > parseInt(remain)
                    }
                  >
                    MINT
                  </Button>
                </div>
              </div>
            ) : (
              <div className="sell-out">
                <p>Sold out</p>
              </div>
            )}
          </div>
        </Spin>
      </Modal>
      <PurchaseSuccessModal
        visible={showSuccessModal}
        handleClose={() => handleCloseSuccessModal()}
        amount={purchaseNumber}
      />
    </>
  );
};

export default connect(({ blindbox }) => ({
  cost: blindbox.costAmount,
  remain: blindbox.remainAmount,
  whiteList: blindbox.whiteList,
}))(PurchaseModal);
