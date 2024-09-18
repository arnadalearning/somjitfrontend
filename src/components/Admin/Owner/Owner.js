import { DownCircleOutlined } from '@ant-design/icons';
import { Menu, Button, Row, Col, Input, DatePicker, Typography, Space, Divider, List, Table } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';
import { create } from 'lodash';
import '../Owner/Owner.css';

const {Title} = Typography;

const items = [
  {
    label: 'สินค้า และผู้ขาย',
    key: 'productAndVendor',
    icon: <DownCircleOutlined />,
    children: [
        {
            type: 'group',
            label: 'สินค้า',
            children: [
                {
                    label: 'เพิ่มรายการสินค้าใหม่',
                    key: 'createProduct',
                },
                {
                    label: 'แก้ไขรายการสินค้า',
                    key: 'updateProduct',
                },
                {
                    label: 'ลบรายการสินค้า',
                    key: 'deleteProduct',
                },
            ],
        },
        {
            type: 'group',
            label: 'ผู้ขาย',
            children: [
                {
                    label: 'เพิ่มผู้ขายใหม่',
                    key: 'createVendor',
                },
                {
                    label: 'แก้ไขรายละเอียดผู้ขาย',
                    key: 'updateVendor',
                },
                {
                    label: 'ลบผู้ขาย',
                    key: 'deleteVendor',
                },
            ],
        },
    ],
  },
  {
    label: 'ลูกค้า',
    key: 'subCustomer',
    icon: <DownCircleOutlined />,
    disabled: false,
    children:[
      {
        type: 'group',
        //label: 'ลูกค้า',
        children: [
          {
            label: 'ดูรายละเอียดลูกค้า',
            key: 'seeCustomer', 
          },
          {
            label: 'เพิ่มลูกค้าใหม่',
            key: 'createCustomer',
          },
          {
            label: 'แก้ไขรายละเอียดลูกค้า',
            key: 'updateCustomer'
          },
          {
            label: 'ลบลูกค้า',
            key: 'deleteCustomer'
          },
        ],
      },
    ],
  },
  {
    label: 'คำสั่งซื้อ',
    key: 'subOrder',
    icon: <DownCircleOutlined />,
    children: [
      {
        type: 'group',
        //label: 'SJ Order',
        children: [
          {
            label: 'ดูรายละเอียดคำสั่งซื้อ',
            key: 'viewOrder', 
          },
          {
            label: 'สร้างคำสั่งซื้อใหม่',
            key: 'createOrder',
          },
          {
            label: 'แก้ไขคำสั่งซื้อ',
            key: 'updateOrder'
          },
          {
            label: 'ลบคำสั่งซื้อ',
            key: 'deleteOrder'
          }
        ],
      },
    ],
  },
  {
    label: 'สรุปรายงาน',
    key: 'report',
    icon: <DownCircleOutlined />,
    children: [
        {
            label: 'รายงานคำสั่งซื้อ',
            key: 'orderReport',
        },
        {
            label: 'รายงานลูกค้า',
            key: 'customerReport',
        },
        {
            label: 'รายงานสินค้า',
            key: 'productReport',
        },
        {
            label: 'รายงานต้นทุน',
            key: 'costReport',
        },
        {
            label: 'รายงานยอดขาย',
            key: 'totalReport'
        },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        กลับสู่หน้าหลัก
      </a>
    ),
    key: 'alipay',
  },
];
/*******************_NAV_BAR_*****************/
const OwnerTask = () => {
  const [current, setCurrent] = useState('productAndVendor');
  const onClick = (e) => {
    console.log('click', e);
    setCurrent(e.key);
  };
/*__________________END_NAV_BAR______________*/
/*__________________DEFAULT_CONTENT__________*/
let content = (
    <div className='task'>
        <Col>
            <Row>
                รายงานยอดขายประจำวัน
            </Row>
            <Row>
                รายงานคำสั่งซื้อประจำวัน
            </Row>
            <Row>
                รายงานสินค้าประจำวัน
            </Row>
        </Col>
    </div>
);
/*______________END_DEFAULT_CONTENT__________*/

/*______________Customer_DeClaration_________*/
const date = new Date();
const [customer,setCustomer] = useState([]);
const [inputDate, setInputDate] = useState(date.toLocaleDateString());
const [inputCusName, setInputCusName] = useState('');
const [inputCusPhone, setInputCusPhone] = useState('');
const [inputCusCar, setInputCusCar] = useState('');

const fetchData = async() => {
    const httpRes = await axios.get(`http://localhost:8000/admin/owner`);
    //body จาก backend จะถูกเอามาเก็บไว้ที่ตัวแปร httpRes ที่เราสร้างไว้
    setCustomer(httpRes.data); //เราก็ดึง data ที่เราได้จาก backend มาใส่ไว้ที่ setCustomer
};

useEffect(()=>{
    fetchData();
},[]);
/*__________End_Customer_DeClaration_________*/

/*______________TABLE_CUSTOMER_______________*/  
const columns = [
  {
    title: 'ลำดับที่',
    dataIndex: 'id'
  },
  {
    title: 'ชื่อลูกค้า',
    dataIndex: 'cusName'
  },
  {
    title: 'วันที่เพิ่มข้อมูล',
    dataIndex: 'cusDate'
  },
  {
    title: 'เบอร์โทรศัพท์',
    dataIndex: 'cusPhone'
  },
  {
    title: 'ทะเบียนรถ',
    dataIndex: 'cusCar'
  },
  {
    title: 'ยอดค้างชำระ'
  }
];
/*___________END_TABLE_CUSTOMER______________*/  

/*_______________VIEW_CUSTOMER_______________*/  
const [inputCusId, setInputCusId] = useState('');

const [viewCustomer, setViewCustomer] = useState([]);
const getCustomerById = (id) => {
  console.log(id);
  console.log(customer);
  
  const newCustomer = [...customer];
  const targetIndex = newCustomer.findIndex(y=>y.id === id); 
  
  console.log(targetIndex)
  let showCustomer = newCustomer.splice(targetIndex, 1);
  setViewCustomer(showCustomer);
  console.log(showCustomer);
  setInputCusId('');
  fetchData();
}

const getAllCustomer = () => {
  setViewCustomer(customer);
}
if(current==='seeCustomer'){
    content = (
    <div className= 'task'>
        <Col>
        <Row>  
            <Row style={{width:'100%'}}>
            <Title level={3} style={{margin:'15px'}}> View Customer </Title>
            </Row>
            <Row style={{width:'100%'}}>
            <Input value={inputCusId} 
            onChange={(e)=>setInputCusId(e.target.value)} 
            placeholder='ลำดับ/รหัสลูกค้า'style={{margin:'15px'}}/>
            </Row>
            <Row justify={'center'}
            style={{margin:'5px', width:'100%'}}>
            <Col >
                <Button onClick={()=>getCustomerById(inputCusId)}>View Customer</Button>
            </Col>
            <Col >
                <Button onClick={()=>getAllCustomer()}>View All</Button>
            </Col>
            <Col>
                <Button>Cancle</Button>
            </Col>
            </Row>
        </Row>
        <Row>   
            <Table
            dataSource={viewCustomer}
            columns= {columns}
            />
        </Row>
        </Col>
    </div>
    );
}
/*______________END_VIEW_CUSTOMER____________*/  
const createCustomer = async() => {
    await axios.post('http://localhost:8000/admin/owner/', {
      cusDate: inputDate,
      cusName: inputCusName,
      cusPhone: inputCusPhone,
      cusCar: inputCusCar
    });
    fetchData();
  };
  
  const cancleCreateCustomer = () => {
    setCustomer('');
    setInputDate(date.toLocaleDateString());
    setInputCusName('');
    setInputCusPhone('');
    setInputCusCar('');
  }
  
    if(current==='createCustomer'){
      content = (
        <div className='task'>
          <Row>
          <Col>
          <Row justify={'center'}>
            <Title level={3}>เพิ่มลูกค้าใหม่</Title>
          </Row>
          <Row>
            <Input value={inputDate}
            onChange={(e)=>setInputDate(e.target.value)}
            style={{width:'300px'}}
            placeholder={inputDate}
            disabled='true'/>
          </Row>
          <Row>
            <Input value={inputCusName} 
            onChange={(e)=>setInputCusName(e.target.value)} 
            placeholder='ชื่อลูกค้า'style={{marginTop:'5px'}}/>
            {/*{customer.map(cus=><div key={cus.id}>{cus.id}{cus.cusName}</div>)}*/}
          </Row>
          <Row>
            <Input value={inputCusPhone} 
            onChange={(e)=>setInputCusPhone(e.target.value)} 
            placeholder='เบอร์โทรศัพท์'style={{marginTop:'5px'}}/>
          </Row>
          <Row>
            <Input value={inputCusCar}
            onChange={(e)=>setInputCusCar(e.target.value)} 
            placeholder='ทะเบียนรถ'style={{marginTop:'5px'}}/>
          </Row>
          <Row justify={'center'} style={{margin:'5px'}}>
            <Col span={12}>
              <Button onClick={createCustomer}>Submit</Button>
            </Col>
            <Col span={12}>
              <Button onClick={cancleCreateCustomer}>Cancle</Button>
            </Col>
          </Row>
          <Divider />
          <List
            dataSource={customer}
            renderItem={cus =>(
              <List.Item>
                {cus.id}
                {cus.cusDate}
                {cus.cusName}
                {cus.cusPhone}
                {cus.cusCar}
              </List.Item>
            )}
          />
          </Col>
        </Row>
        </div>
      )
    }
  
    return (
        <div> 
            <Menu onClick={onClick} 
            selectedKeys={[current]} 
            mode="horizontal" items={items} 
            className='task'/> 
            {content}
        </div>
    );
};
export default OwnerTask;