import React, { Component } from 'react'
import { Layout, Input, Button, Row, Col } from 'antd';
import { SearchOutlined, PlusCircleFilled, CalendarOutlined } from '@ant-design/icons';
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
      <Header style={{
        backgroundColor: '#f0f4fb',
        paddingLeft: '270px',
        height: '400px',
      }}>
        <Row>
          <Col>
            <Input
              size="large"
              placeholder="Rechercher"
              prefix={<SearchOutlined />}
              style={{ width: '300px', margin: '0 10px' }}
            />
            <Button type="primary">
              <PlusCircleFilled />
          Activite
        </Button>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              backgroundColor: 'white',
              width: '100vh',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <Row
              style={{
                height: '140px'
              }}
            >
              <Col
                style={{
                  padding: '20px 0px 0px 50px',
                  // width: 'fit-content'
                }}
                span={12}
              >
                <h4
                  style={{
                    color: '#04c795',
                    lineHeight: 'normal'
                  }}
                >
                  Bienvenue sur votre dashboard
                  <br />
                  d'activites quotidiennes
              </h4>
                <p> <CalendarOutlined /> jeudi 3 Mars 2020</p>
              </Col>
              <Col span={12}>
                <span
                  style={{
                    height: '400px',
                    width: '400px',
                    backgroundColor: 'rgb(39, 23, 164)',
                    borderRadius: '50%',
                    display: 'inline-block',
                    right: '-100px',
                    position: 'absolute',
                    top: '-130px',
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    )
  }
}
