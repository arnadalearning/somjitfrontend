import React, {useState, useEffect} from "react";
import { Flex, Layout, Row, Col } from 'antd';
import { Link } from "react-router-dom";

const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#000',
  height: 65,
  paddingInline: 55,
  lineHeight: '65px',
  backgroundColor: '#e6f7ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 655,
  lineHeight: '90px',
  color: '#0958d9',
  backgroundColor: '#fff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#0958d9',
  backgroundColor: '#e6f7ff',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100% - 8px)',
  maxWidth: 'calc(100% - 8px)',
};

export default function Home() {
    return(
        <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>
            <Row>
                <Col span={3}>
                    <Link to='/'>Home</Link>
                </Col>
                <Col span={3}>
                    <Link to='/product'>Products</Link>
                </Col>
                <Col span={3}>
                    <Link to='/contact'>Contact us</Link>
                </Col>
                <Col span={3}>
                    <Link to='/admin'>Admin</Link>
                </Col>
            </Row>
          </Header>
          <Content style={contentStyle}>
          ร้านสมจิตรแอสเตอร์ เปิดมาเป็นระยะเวลากว่า 40 ปี 
          โดยคุณไพบูลย์ และคุณสมจิตร พาณิชย์กิจพีระ 
          </Content>
          <Footer style={footerStyle}>Facebook - Line - IG</Footer>
        </Layout>
        </Flex>
    )
}