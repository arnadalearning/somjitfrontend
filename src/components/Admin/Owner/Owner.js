import React, { useState } from 'react';
import { DownCircleOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Content from '../ContentAdmin';

const items = [
  {
    label: 'สำหรับเจ้าของร้าน',
    key: 'mail',
    icon: <DownCircleOutlined />,
    disabled: true,
  },
/**_______________CUSTOMER_NAVBAR_______________ */
{
  label: 'ลูกค้า',
  key: 'customerKey',
  icon: <DownCircleOutlined />,
  children: [
    {
      label: 'ดูรายละเอียดลูกค้า',
      key: 'viewCustomerKey'
    },
    {
      label: 'เพิ่มลูกค้าใหม่',
      key: 'createCustomerKey'
    },
    {
      label: 'แก้ไขรายละเอียดลูกค้า',
      key: 'updateCustomerKey'
    },
    {
      label: 'ลบรายละเอียดลูกค้า',
      key: 'deleteCustomerKey'
    }
  ]  
},
/**_______________END_CUSTOMER_NAVBAR_______________ */
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <DownCircleOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];
const OwnerTask = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    console.log([current])
  };
  
  return (
    <div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} 
      style={{display:'flex', justifyContent:'center'}}/>
      <Content current={current}/>
    </div>
  );
};

export default OwnerTask;