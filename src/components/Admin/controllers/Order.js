import React, { useState } from 'react';
import axios from 'axios'
import _ from 'lodash';
import { Menu, Button, InputNumber, Space, Row, Col, Input, DatePicker, Dropdown } from 'antd';
import '../Seller/Seller.css'

export default function CreateOrder(props){
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
    return (
        <div className='task'>
        <Row>
            <Col>
                <Row>
                    <label>สร้างใบสั่งซื้อสินค้าใหม่เลขที่:</label>
                </Row>
                <Row>
                    <Space>
                    <Col>
                        <DatePicker name='date' style={{marginTop:'10px',paddingLeft:'44px'}}></DatePicker>
                    </Col>
                    <Col>
                        <Input name='cusName' style={{marginTop:'10px'}} placeholder='ชื่อลูกค้า'/>
                    </Col>
                    </Space>
                </Row>
        
                <Row>
                    <Space>
                    <Col>
                        <Input name='cusPhone' style={{marginTop:'10px'}} placeholder='เบอร์โทรศัพท์'/>
                    </Col>
                        
                    <Col>
                        <Input name='carId' style={{marginTop:'10px'}} placeholder='ทะเบียนรถ'/>
                    </Col>
                    </Space>
                </Row>
                <Row>
                    <label style={{marginTop:'10px'}}>รายการสินค้า</label>
                </Row>
                <Row style={{marginTop:'10px'}}>
                    <label for ='mum'>Mum:</label>
                    <InputNumber />
                </Row >
                <Row style={{marginTop:'10px'}}>
                    <label for ='gerbera'>Gerbera:</label>
                    <InputNumber/>
                </Row>
                <Row style={{marginTop:'10px'}}>
                    <Space justify={'center'}>
                    <Col>
                        <Button>Submit</Button>
                    </Col>
                    <Col>
                        <Button>Cancle</Button>
                    </Col>
                    </Space>
                </Row>
            </Col>
        </Row>
      </div>
    )
}