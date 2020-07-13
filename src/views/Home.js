import React, { Component } from 'react'
import { Layout } from 'antd';
import  SideBar  from '../components/SideBar';
import  Header  from '../components/Header';
import  Content  from '../components/Content';

const { Footer } = Layout;

export default class Home extends Component {
  render() {
    return (
      <Layout style={{ height: '800px' }}>
        <Header />
        <Layout style={{ backgroundColor: '#f0f4fb'}}>
          <SideBar />
          <Content/>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}
