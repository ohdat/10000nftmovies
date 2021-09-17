import './styles.less';

const ContarctComponent = () => {
  return (
    <div className="contract-wrapper" id="contact">
      <div className="contract-box">
        <div className="box-content">
          <div className="contract-content">
            <a
              className="contract-btn"
              href="https://discord.gg/x9T2ydMQ6Z"
              target="_blank"
            >
              Join our Discord
            </a>
            <div className="contract-txt">
              <a href="https://etherscan.io/address/0xF53244C6F4C5eA713948d27FdF640f989966B9fF">
                Smart Contract{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContarctComponent;
