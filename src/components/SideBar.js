import React, { Component } from 'react'
import { Layout, Typography, Button } from 'antd';
import styled from 'styled-components'

const { Sider } = Layout;
const { Title } = Typography;

const SideBarIcon = styled.div`
  display:flex;
  width: fit-content;
  margin: auto;
`

const SideBar = styled(Sider)`
  background-color: white;
  height: 300px;
  width: 250px !important;
  max-width: unset !important;
  position: absolute; 
  top: 0px;
  border-radius: 20px;
  padding: 20px 0;
`

export default class SideBarLeft extends Component {
  render() {
    return (
      <SideBar>
        <SideBarIcon>
          <img src={'https://image.flaticon.com/icons/svg/2795/2795545.svg'} alt="Logo" style={{ height: '30px' }} />
          <Title level={4}>KidsEduc'</Title>
        </SideBarIcon>
      </SideBar>
    )
  }
}
