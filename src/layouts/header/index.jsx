import { NavLink } from 'umi';
import React, { useState } from 'react';
import { Button, message } from 'antd';
import $ from 'jquery';
import { ConnectorNames } from '../../hooks/web3/connectors';
import Web3 from '../../hooks/web3';
import DownloadModal from './downloadModal';
import 'jquery.scrollto';
import './styles.less';

const navArray = [
  {
    navkey: 'Spec',
    test: '/#spec',
    key: 'spec',
  },
  // {
  //   navkey: 'Feature',
  //   test: '/#feature',
  //   key: 'feature',
  // },
  {
    navkey: 'RoadMap',
    test: '/#roadmap',
    key: 'roadmap',
  },
  // {
  //   navkey: 'Team',
  //   test: '/#team',
  //   key: 'team',
  // },
  {
    navkey: 'Initiators',
    test: '/#initiators',
    key: 'initiators',
  },
  {
    navkey: 'FAQ',
    test: '/#faq',
    key: 'faq',
  },
  // {
  //   navkey: 'Resources',
  //   test: '/resources',
  //   key: 'reources',
  // },
  {
    navkey: 'Gallery',
    test: '/gallery',
    key: 'gallery',
  },
];

const relateWebData = [
  {
    link: 'https://twitter.com/moviesaboutsam',
    imgUrl: require('../../assets/images/Vector.png'),
    key: 'twitter',
  },
  {
    link: 'https://opensea.io/collection/10000moviesaboutsam',
    imgUrl: require('../../assets/images/Opensea.png'),
    key: 'opeanSea',
  },
  {
    link: 'https://discord.gg/x9T2ydMQ6Z',
    imgUrl: require('../../assets/images/DiscordLogo.png'),
    key: 'discord',
  },
];

const Header = () => {
  const { currentAccount, disconnect, connect } = Web3.useContainer();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDownLoad, setShowDownLoad] = useState(false);
  const handleShowMobileMenu = (e) => {
    setShowMobileMenu(!showMobileMenu);
    if (!showMobileMenu) {
      e.stopPropagation();
      document.addEventListener('click', () => setShowMobileMenu(false), false);
      document.addEventListener('tap', () => setShowMobileMenu(false), false);
      document.addEventListener(
        'mousewheel',
        () => setShowMobileMenu(false),
        false,
      );
    }
  };
  const handleScroll = (e, id) => {
    setShowMobileMenu(false);
    if (location.pathname == '/' && id !== 'gallery') {
      // e.preventDefault();
      $.scrollTo(`.${id}-wrapper`, { offset: { top: -52 }, duration: 800 });
    }
  };
  const handleConnect = (connectorName) => {
    if (currentAccount) {
      disconnect(connectorName, () =>
        message.success('Disconnected Successfully'),
      );
    } else {
      connect(
        connectorName,
        () => message.success('Connected Successfully'),
        (err) => {
          if (err == 'ProviderError') {
            setShowDownLoad(true);
            message.error('Connect failed');
          }
        },
      );
    }
  };

  const handleCloseDownloadModal = () => setShowDownLoad(false);

  return (
    <>
      <div className="header-wrapper flex-box">
        <div className="header-left">
          <NavLink to="/">
            <img
              className="logo"
              src={require('../../assets/images/logo.svg')}
              alt=""
            />
          </NavLink>
          <div className="nav-wrapper">
            <ul className="nav-box">
              {navArray.map((item) => (
                <li key={item.key} className="nav-item">
                  <a
                    href={item.test}
                    key={item.key}
                    onClick={(e) => handleScroll(e, item.key)}
                  >
                    {item.navkey}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {showMobileMenu && (
          <div className="mobile-list">
            {navArray.map((item) => (
              <div
                key={item.key}
                className="mobile-item"
                onClick={() => handleScroll(item.key)}
              >
                <a href={item.test}>{item.navkey}</a>
              </div>
            ))}
          </div>
        )}
        <div className="header-right account-box">
          {relateWebData.map((item) => (
            <div className="relateWeb-item" key={item.key}>
              <a href={item.link} target="_blank">
                <img src={item.imgUrl} alt="" />
              </a>
            </div>
          ))}
          <Button
            className="connect-btn"
            onClick={() => handleConnect(ConnectorNames.Injected)}
          >
            <span
              className="connect-sign"
              style={
                currentAccount ? { background: 'green' } : { background: 'red' }
              }
            />
            Wallet
          </Button>
          <div className="mobile-icon" onClick={(e) => handleShowMobileMenu(e)}>
            {!showMobileMenu ? (
              <img src={require('../../assets/images/union.svg')} alt="" />
            ) : (
              <img src={require('../../assets/images/close.svg')} alt="" />
            )}
          </div>
        </div>
      </div>
      <DownloadModal
        visible={showDownLoad}
        handleClose={() => handleCloseDownloadModal()}
      />
    </>
  );
};

export default Header;
