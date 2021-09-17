import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from './header';
import './styles.less';

const { Header, Footer, Content } = Layout;

const LayoutComponent = ({ children }) => (
  <Layout>
    <Header>
      <HeaderComponent />
    </Header>
    <Content>
      <div className="content-container">{children}</div>
    </Content>
  </Layout>
);

export default LayoutComponent;
