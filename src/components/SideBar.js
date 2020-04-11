import React, { Component } from 'react'
import { Layout, Typography, Row } from 'antd';
import styled from 'styled-components'

const { Sider } = Layout;
const { Title } = Typography;

const SideBar = styled(Sider)`
  background-color: white;
  width: 250px !important;
  max-width: unset !important;
  position: absolute; 
  top: 0px;
  border-radius: 20px;
  padding: 20px 0;
`
const SideBarContainer = styled.div`
  width: fit-content;
  margin: auto;
`
const SideBarLogoContainer = styled.div`
  width: fit-content;
  margin: auto;
  display: flex;
  align-items: center;
`

const SideBarLogo = styled.img`
  height: 35px;
  margin-right: 10px;
`
const SideBarMenu = styled.div`
  margin: 20px 0;
  p {
    margin-bottom: 5px;
  }
  ul {
    list-style-type: none;
    padding: unset;
    li {
      margin: 15px 0;
    }
  }
`


export default class SideBarLeft extends Component {
  render() {
    return (
      <SideBar>
        <SideBarContainer>
          <SideBarLogoContainer>
            <SideBarLogo src={'https://image.flaticon.com/icons/svg/2784/2784596.svg'} alt="Logo"/>
            <Title level={2}>KidsEduc'</Title>
          </SideBarLogoContainer>
          <SideBarMenu>
              <p>
                Principal
              </p>
            <ul>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
            </ul>
          </SideBarMenu>
          <SideBarMenu>
              <p>
                Principal
              </p>
            <ul>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
            </ul>
          </SideBarMenu>
        </SideBarContainer>
      </SideBar>
    )
  }
}
