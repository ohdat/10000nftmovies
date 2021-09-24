import React from 'react';
import { Modal, Input, Button, message } from 'antd';
import './download.less';

const DownloadModal = (props) => {
  const { visible, handleClose } = props;
  return (
    <Modal
      title=""
      visible={visible}
      onCancel={() => handleClose()}
      footer={null}
      maskStyle={{ background: 'rgba(255, 255, 255, 0.85)' }}
      width={'80%'}
    >
      <div className="download-box">
        <div className="download-tips">
          <p>You need to download a MetaMask</p>
        </div>
        <div className="metamask-img">
          <img src={require('../../assets/images/mmlogo.png')} alt="" />
        </div>
        <div className="link-box">
          <a className="download-link" href="https://metamask.io/">
            Download
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default DownloadModal;
