import React from 'react';
import { Modal, Input, Button, message } from 'antd';
import './purchaseSuccess.less';

const PurchaseSuccessModal = (props) => {
  const { visible, handleClose, amount } = props;
  return (
    <Modal
      title=""
      visible={visible}
      closable={false}
      footer={null}
      maskStyle={{ background: 'rgba(255, 255, 255, 0.85)' }}
      width={'70%'}
    >
      <div className="success-box">
        <div className="success-img">
          <img src={require('../../assets/images/right.png')} alt="" />
        </div>
        <div className="success-desc">
          <h1>Your transaction succeeded!</h1>
          <p>You already buy {amount} nft</p>
        </div>
        <div className="success-btn-box">
          <Button className="btn" onClick={() => handleClose()}>
            I KNOW
          </Button>
          <a
            className="link"
            href="https://opensea.io/collection/10000moviesaboutsam"
          >
            GO OPENSEA
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default PurchaseSuccessModal;
