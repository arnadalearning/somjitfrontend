import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Button, Row, Col, Input, DatePicker, Typography, Space, Divider, List, Table } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import './Seller.css';
import { useNavigate } from 'react-router-dom';


const {Title} = Typography;

const items = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Customer',
    key: 'subCustomer',
    icon: <AppstoreOutlined />,
    disabled: false,
    children:[
      {
        type: 'group',
        label: 'SJ Customer',
        children: [
          {
            label: 'View Customer',
            key: 'seeCustomer', 
          },
          {
            label: 'Create Customer',
            key: 'createCustomer',
          },
          {
            label: 'Update Customer',
            key: 'updateCustomer'
          },
        ],
      },
    ],
  },
  {
    label: 'Order',
    key: 'subOrder',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'SJ Order',
        children: [
          {
            label: 'View Order',
            key: 'seeOrder', 
          },
          {
            label: 'Create order',
            key: 'createOrder',
          },
          {
            label: 'Update order',
            key: 'updateOrder'
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];
/*******************_NAV_BAR_*****************/
const SellerTask = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
/*__________________END_NAV_BAR______________*/

/*___________Customer_DeClaration____________*/
const date = new Date();
const [customer,setCustomer] = useState([]);
const [inputDate, setInputDate] = useState(date.toLocaleDateString());
const [inputCusName, setInputCusName] = useState('');
const [inputCusPhone, setInputCusPhone] = useState('');
const [inputCusCar, setInputCusCar] = useState('');

const fetchData = async() => {
  const httpResponse = await axios.get('http://localhost:5000/admin/seller')
  //body จาก backend จะถูกเอามาเก็บไว้ที่ตัวแปร httpResponse ที่เราสร้างไว้
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
  setCustomer(httpResponse.data); //เราก็ดึง data ที่เราได้จาก backend มาใส่ไว้ที่ setCustomer
};

useEffect(()=>{
  fetchData();
},[]);

/*___________Customer_DeClaration____________*/

/*_____________TABLE_CUSTOMER________________*/  
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
/*_____________TABLE_CUSTOMER________________*/  

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

const getAllCustomer = async () => {
  const httpResponse = await axios.get('http://localhost:5000/admin/seller/');
  setViewCustomer(httpResponse.data);
}

let content = (
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
/*______________END_VIEW_CUSTOMER____________*/  

/*_________________VIEW_ORDER________________*/  
if(current==='viewOrder'){
  content = (
    <div className='task'>
      <Row>
        <Col>
        <label> View Order </label>
        <br/><br/>
        <Input name='name' placeholder='เลขที่ใบสั่งซ์้อ'/>
        <br/><br/>
        <DatePicker name='date'></DatePicker>
        <br/><br/>
        <Space justify={'center'}>
          <Col>
            <Button>Submit</Button>
          </Col>
          <Col>
            <Button>Cancle</Button>
          </Col>
        </Space>
        </Col>
      </Row>
    </div>
  )
}
/*_______________END_VIEW_ORDER______________*/  

const navigate = useNavigate();
if(current==='createOrder'){
  navigate('/admin/seller/order');
}
if(current==='updateOrder'){
  content = (
      <div className='orderTask'>
        <Row>
          <Col>Update current order</Col>
        </Row>
        <Row>
          <Col><Button>Update</Button></Col>
        </Row>
      </div>
    )
  }


  /**-----------------------CreateCustomer---------------- */

  // useEffect(()=>{
  //     setCustomer([
  //       {
  //         id: 1,
  //         date: "inputDate",
  //         cusName: "inputCusName",
  //         cusPhone: 'inputCusPhone',
  //         cusCar: 'inputCusCar',
  //       },
  //       {
  //         id: 2,
  //         date: "inputDate",
  //         cusName: "inputCusName",
  //         cusPhone: 'inputCusPhone',
  //         cusCar: 'inputCusCar',
  //       },
  //     ]);
  //   },[]);

const createCustomer = async () => {
  await axios.post('http://localhost:5000/admin/seller/customer', {
    cusDate: inputDate,
    cusName: inputCusName,
    cusPhone: inputCusPhone,
    cusCar: inputCusCar
  }).catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
  fetchData();
  ////////////////
  // const cusDate = inputDate; 
  // const cusName = inputCusName;
  // const cusPhone = inputCusPhone;
  // const cusCar = inputCusCar;
  // const newCustomer = [...customer];
  // newCustomer.push({
  //   id: _.uniqueId(),
  //   cusDate: cusDate,
  //   cusName: cusName,
  //   cusPhone: cusPhone,
  //   cusCar: cusCar,
  // });
  // setCustomer(newCustomer);
  // setInputDate(date.toLocaleDateString());
  // setInputCusName('');
  // setInputCusPhone('');
  // setInputCusCar('');
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
          disabled='false'/>
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
  if(current==='updateCustomer'){
    content = (
      <div>แก้ไขรายละเอียดลูกค้า</div>
    )
  }
/**_________________RETURN_________________ */  
/**_________________RETURN_________________ */  
  return(
    <div> 
      <Menu onClick={onClick} 
      selectedKeys={[current]} 
      mode="horizontal" items={items} 
      className='task' /> 
      {content}
    </div>
  );
};
export default SellerTask;