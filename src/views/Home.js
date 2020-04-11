import React, { Component } from 'react'
import { Layout } from 'antd';
import  SideBar  from '../components/SideBar';

const { Header, Footer, Content } = Layout;

export default class Home extends Component {
  render() {
    return (
      <Layout style={{ height: '800px' }}>
        <Header style={{ backgroundColor: 'red', paddingLeft: '270px' }}>Header</Header>
        <Layout style={{ backgroundColor: 'blue'}}>
          <SideBar />
          <Content style={{ left: '270px', position: 'relative' }}>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}
