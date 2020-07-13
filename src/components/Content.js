import React, { Component } from 'react'
import { 
  Layout,
  Input, 
  Button, 
  Row, 
  Col, 
  Dropdown, 
  Menu, 
  message, 
  Steps, 
  Popover } from 'antd';
import {
  UserOutlined,
  DownOutlined,
  ScheduleOutlined,
  EyeOutlined,
  StarOutlined
} from '@ant-design/icons';
import styled from 'styled-components'
import * as palette from '../Variables'

const { Step } = Steps;

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}


const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd item
    </Menu.Item>
  </Menu>
);

const MainMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0;
  
  li {
    margin-right: 10px;
  }
`

export default class Content extends Component {
  render() {
    return (
      <Layout.Content style={{
        paddingLeft: '270px',
        paddingRight: '50px',
        position: 'relative',
      }}>
        <Row>
          <MainMenu style={{
          }}>
            <li>Bricolage</li>
            <li>Coloriage</li>
            <li>Recette</li>
            <li>Jeux</li>
            <li>Culture</li>
            <li>
              <Button type="primary">Apprendre</Button>
            </li>
          </MainMenu>
        </Row>
        <Row
          style={{
            marginBottom: '20px',
          }}
        >
          <Col span={6}
            style={{
              paddingRight: '10px',
            }}
          >
            <div
              style={{
                backgroundColor: '#00c793',
                height: '200px',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
              }}>
              <span
                style={{
                  height: '100px',
                  width: '100px',
                  backgroundColor: 'rgb(39, 23, 164)',
                  borderRadius: '50%',
                  display: 'inline-block',
                  right: '95px',
                  top: '-25px',
                  position: 'absolute',
                  zIndex: '0',
                }}
              />
              <span
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#fb3d4e',
                  borderRadius: '50%',
                  display: 'inline-block',
                  right: '-25px',
                  top: '80px',
                  position: 'absolute'
                }}
              />
              <div
                style={{
                  margin: '25px'
                }}
              >
                <h5
                  style={{
                    zIndex: '99',
                    position: 'relative',
                    color: 'white',
                  }}
                >Nos ressources pedagogiques</h5>
                <Dropdown overlay={menu}>
                  <Button
                    style={{
                      width: '80%',
                      bottom: '20px',
                      position: 'absolute'
                    }}
                    ghost
                  >
                    Decouvrir <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            </div>
          </Col>
          <Col span={6}
            style={{
              paddingRight: '10px',
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                height: '200px',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
              }}>
              <div
                style={{
                  margin: '25px'
                }}
              >
                <ScheduleOutlined
                  style={{
                    color: '#37d3aa',
                    fontSize: '25px',
                    backgroundColor: '#d9f7ef',
                    padding: '5px',
                    borderRadius: '5px',
                    transform: 'translateX(-50%)',
                    left: '50%',
                    position: 'relative',
                    marginBottom: '20px',
                  }}
                />
                <h5
                  style={{
                    zIndex: '99',
                    position: 'relative',
                    color: '#271f63',
                    textAlign: 'center',
                  }}
                >Nouvelles activites</h5>
                <Dropdown overlay={menu}>
                  <Button
                    style={{
                      width: '80%',
                      color: '#261f63',
                      bottom: '20px',
                      position: 'absolute'
                    }}
                    type='link'
                  >
                    Parcourir <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            </div>
          </Col>
          <Col span={6}
            style={{
              paddingRight: '10px',
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                height: '200px',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
              }}>
              <div
                style={{
                  margin: '25px'
                }}
              >
                <EyeOutlined
                  style={{
                    color: '#37d3aa',
                    fontSize: '25px',
                    backgroundColor: '#d9f7ef',
                    padding: '5px',
                    borderRadius: '5px',
                    transform: 'translateX(-50%)',
                    left: '50%',
                    position: 'relative',
                    marginBottom: '20px',
                  }}
                />
                <h5
                  style={{
                    zIndex: '99',
                    position: 'relative',
                    color: '#271f63',
                    textAlign: 'center',
                  }}
                >Activites les plus consultees</h5>
                <Dropdown overlay={menu}>
                  <Button
                    style={{
                      width: '80%',
                      color: '#261f63',
                      bottom: '20px',
                      position: 'absolute'
                    }}
                    type='link'
                  >
                    Parcourir <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            </div>
          </Col>
          <Col span={6}
            style={{
              paddingRight: '10px',
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                height: '200px',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
              }}>
              <div
                style={{
                  margin: '25px'
                }}
              >
                <StarOutlined
                  style={{
                    color: '#37d3aa',
                    fontSize: '25px',
                    backgroundColor: '#d9f7ef',
                    padding: '5px',
                    borderRadius: '5px',
                    transform: 'translateX(-50%)',
                    left: '50%',
                    position: 'relative',
                    marginBottom: '20px',
                  }}
                />
                <h5
                  style={{
                    zIndex: '99',
                    position: 'relative',
                    color: '#271f63',
                    textAlign: 'center',
                  }}
                >Activites les mieux notees</h5>
                <Dropdown overlay={menu}>
                  <Button
                    style={{
                      width: '80%',
                      color: '#261f63',
                      bottom: '20px',
                      position: 'absolute'
                    }}
                    type='link'
                  >
                    Parcourir <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            style={{
              height: '300px',
              backgroundColor: 'white',
              borderRadius: '20px',
            }}
          >
            <Row>
              <Col
                span={8}
                style={{
                  height: '200px',
                  backgroundColor: 'red',
                }}
              >
                <h5>Ages</h5>
                <Steps 
                current={1}
                progressDot={customDot}
                size={'small'}
                >
                  <Step title="3 ans" />
                  <Step title="5 ans" />
                </Steps>
              </Col>
              <Col
                span={18}
                style={{
                  height: '200px',
                  backgroundColor: 'green',
                }}
              >
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout.Content>
    )
  }
}
