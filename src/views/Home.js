import React, { Component } from 'react'
import { Layout } from 'antd';
import  SideBar  from '../components/SideBar';
import  Header  from '../components/Header';

const { Footer, Content } = Layout;

export default class Home extends Component {
  render() {
    return (
      <Layout style={{ height: '800px' }}>
        <Header />
        <Layout style={{ backgroundColor: 'blue'}}>
          <SideBar />
          <Content style={{ left: '270px', position: 'relative' }}>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}
