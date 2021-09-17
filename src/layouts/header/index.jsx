import { NavLink } from 'umi';
import { connect } from 'umi';
import React, { useState } from 'react';

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
    test: '/#gallery',
    key: 'gallery',
  },
];

const Header = (props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  const handleScroll = (id) => {
    setShowMobileMenu(false);
    const { dispatch } = props;
    dispatch({
      type: 'scroll/toggleNode',
      payload: {
        id,
      },
    });
  };
  return (
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
              <li
                key={item.key}
                className="nav-item"
                onClick={() => handleScroll(item.key)}
              >
                <a href={item.test}>{item.navkey}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mobile-icon" onClick={() => handleShowMobileMenu()}>
          Sam.
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
        <div className="relateWeb-item">
          <a href="https://twitter.com/moviesaboutsam">
            <img src={require('../../assets/images/Vector.png')} alt="" />
          </a>
        </div>
        <div className="relateWeb-item">
          <a href="https://discord.gg/x9T2ydMQ6Z">
            <img src={require('../../assets/images/DiscordLogo.png')} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(({ scroll }) => ({ scroll }))(Header);
