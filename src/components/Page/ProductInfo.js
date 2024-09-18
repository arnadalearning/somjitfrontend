import React from "react";
import { Flex, Layout, Row, Col, Table } from 'antd';
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

/**_________________TABLE_PART__________________ */
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
];

const data = [
    {
      key: '1',
      name: 'Product1',
      image: 1,
      price: '150-170',
    },
    {
      key: '2',
      name: 'Product2',
      image: 2,
      price: '80-100',
    },
    {
      key: '3',
      name: 'Product3',
      image: 3,
      price: '200-220',
    },
  ];

export default function ProductInfo() {
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
            <Table columns={columns} dataSource={data} />         
          </Content>
          <Footer style={footerStyle}>Facebook - Line - IG</Footer>
        </Layout>
        </Flex>
    )
};