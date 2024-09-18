import React, {useState, useEffect} from "react";
import { Flex, Layout, Row, Col, Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import Home from "../Page/Home";

export default function Admin() {
    const { Header, Footer, Content } = Layout;
    const headerStyle = {
        textAlign: 'center',
        color: '#000',
        height: 64,
        paddingInline: 48,
        lineHeight: '64px',
        backgroundColor: '#e6f7ff',
    };
    const contentStyle = {
        textAlign: 'center',
        minHeight: 655,
        lineHeight: '120px',
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
    /**_______________LOGIN_PART______________ */
    const navigate = useNavigate();
    const onFinish = (e) => {
        if (e.username==='seller' && e.password==='seller'){
            //alert('seller');
            navigate('/admin/seller');
            console.log('success',e)
        }
        else  if (e.username==='owner' && e.password==='owner'){
            //alert('owner');
            console.log('success',e)
            navigate('/admin/owner');

        }
        else {
            console.log('Wrong user')
        }
      };


    //   const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    //   };
    return(
        <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <Row>
                    <Col span={3}>
                        <Link to='/'>Home</Link>
                    </Col>
                    <Col span={3}>
                        <Link to='/product'>Our Products</Link>
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
    {/* LOGIN_PART_______________________________________________ */}
                <Form
                    name="basic"
                    labelCol={{ span: 8,}}
                    wrapperCol={{ span: 16,}}
                    style={{ maxWidth: 600,}}
                    initialValues={{ remember: true,}}
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                    >
                <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    >
                <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    >
                <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    >
                <Button type="primary" htmlType="submit" onClick={onFinish}>
                    Submit
                </Button>
                </Form.Item>
                </Form>
    {/* LOGIN_PART_______________________________________________ */}
            </Content>
            <Footer style={footerStyle}>Facebook - Line - IG</Footer>
        </Layout>
        </Flex>
    )
}