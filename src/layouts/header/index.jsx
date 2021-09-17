import { NavLink } from 'umi';
import React, { useState } from 'react';
import $ from 'jquery';
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
  const [showMobileMenu, setShowMobileMenu] = useState(false);
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
  const handleScroll = (id) => {
    setShowMobileMenu(false);
    $.scrollTo(`.${id}-wrapper`, { offset: { top: -100 }, duration: 800 });
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
        {relateWebData.map((item) => (
          <div className="relateWeb-item" key={item.key}>
            <a href={item.link} target="_blank">
              <img src={item.imgUrl} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
