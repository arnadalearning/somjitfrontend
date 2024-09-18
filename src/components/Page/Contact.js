import React from "react";
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

export default function Contact() {
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
            <Col display='flex'>
              <Row>
                For Product
                สำหรับซื้อสินค้า
                Phone:
                Line:
              </Row>
              <Row>
                For Service
                สำหรับงานจัดต่างๆ
                Phone:
                Line:
              </Row>
            </Col>
          </Content>
          <Footer style={footerStyle}>Facebook - Line - IG</Footer>
        </Layout>
        </Flex>
    )
}