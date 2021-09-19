import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from './header';
import { Web3Provider } from '../hooks/web3';
import './styles.less';

const { Header, Footer, Content } = Layout;

const LayoutComponent = ({ children }) => (
  <Layout>
    <Web3Provider>
      <Header>
        <HeaderComponent />
      </Header>
      <Content>
        <div className="content-container">{children}</div>
      </Content>
    </Web3Provider>
  </Layout>
);

export default LayoutComponent;
