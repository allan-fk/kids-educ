import React, { Component } from 'react'
import { Layout } from 'antd';
import styled from 'styled-components'
import * as palette from '../Variables'

const { Sider } = Layout;

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
  
  img {
    height: 35px;
    margin-right: 10px;
    filter: ${palette.colors.svgPurple};
  }

  h3 {
    color: ${palette.colors.purple};
  }
`

const SideBarMenu = styled.div`
  margin: 20px 0;

  h4 {
    margin-bottom: 5px;
    color: ${palette.colors.green};
  }

  ul {
    list-style-type: none;
    padding: unset;

    li {
      margin: 15px 0;
      display: flex;

      img {
        height: 15px;
        margin: 5px;
      }

      a {
        color: ${palette.colors.purple};
      }
    }

    li.main {
      a {
        font-weight: 600;
      }

      img {
        filter: ${palette.colors.svgGreen};
      }

      div {
        background-color: #06c1842e;
        width: fit-content;
        margin-right: 5px;
        border-radius: 5px;
      }
    }
  }

  ul.team li{
    a {
      font-weight: 600;
    }

    img {
      // filter: ${palette.colors.svgGreen};
      height: 40px;
      width: 40px;
      border-radius: 100px;
    }

    div {
      width: fit-content;
      margin-right: 5px;
      border-radius: 5px;
    }
  }
`

export default class SideBarLeft extends Component {
  render() {
    return (
      <SideBar>
        <SideBarContainer>
          <SideBarLogoContainer>
            <img src={'https://image.flaticon.com/icons/svg/2784/2784596.svg'} alt="Logo" />
            <h3>KidsEduc'</h3>
          </SideBarLogoContainer>
          <SideBarMenu>
            <h4>
              Principal
            </h4>
            <ul>
              <li className='main'>
                <div>
                  <img src={'https://image.flaticon.com/icons/svg/2313/2313110.svg'} alt="Logo" />
                </div>
                <a>Dashboard</a>
              </li>
              <li>
                <div>
                  <img src={'https://image.flaticon.com/icons/svg/1380/1380338.svg'} alt="Logo" />
                </div>
                <a>Messages</a>
              </li>
              <li>
                <div>
                  <img src={'https://image.flaticon.com/icons/svg/709/709564.svg'} alt="Logo" />
                </div>
                <a>Journal</a>
              </li>
              <li>
                <div>
                  <img src={'https://image.flaticon.com/icons/svg/709/709870.svg'} alt="Logo" />
                </div>
                <a>Fichiers</a>
              </li>
              <li>
                <div>
                  <img src={'https://image.flaticon.com/icons/svg/470/470799.svg'} alt="Logo" />
                </div>
                <a>Parcours</a>
              </li>
            </ul>
          </SideBarMenu>
          <SideBarMenu>
            <h4>
              Equipe
            </h4>
            <ul className='team'>
              <li>
                <div>
                  <img src={'https://picsum.photos/200/300'} alt="Logo" />
                </div>
                <a>Dashboard</a>
              </li>
              <li>
                <div>
                  <img src={'https://picsum.photos/200/300'} alt="Logo" />
                </div>
                <a>Messages</a>
              </li>
              <li>
                <div>
                  <img src={'https://picsum.photos/200/300'} alt="Logo" />
                </div>
                <a>Journal</a>
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
