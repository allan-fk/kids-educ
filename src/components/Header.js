import React, { Component } from 'react'
import { Layout } from 'antd';
import styled from 'styled-components'
import * as palette from '../Variables'

const { Header } = Layout;

/*const SideBar = styled(Sider)`
  background-color: white;
  width: 250px !important;
  max-width: unset !important;
  position: absolute; 
  top: 0px;
  border-radius: 20px;
  padding: 20px 0;
`
*/
const SideBarContainer = styled.div`
  width: fit-content;
  margin: auto;
`

export default class SideBarLeft extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: 'red', paddingLeft: '270px' }}>Header</Header>
    )
  }
}
