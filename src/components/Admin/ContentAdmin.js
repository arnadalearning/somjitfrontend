import React, { useState } from "react";
import { Row, Col, Button, Input, List, Divider} from "antd";
import _ from 'lodash';
import './Seller/Seller.css'

function Content(props) {
    let content = '';
    const [inputCustomerId, setInputCustomerId] = useState('');
    const [viewCustomer, setViewCustomer] = useState([]);

    const date = new Date();
    const [customer, setCustomer] = useState([]);
    const [inputDate, setInputDate] = useState(date.toLocaleDateString());
    const [inputCusName, setInputCusName] = useState('');
    const [inputCusPhone, setInputCusPhone] = useState('');
    const [inputCusCar, setInputCusCar] = useState('');
    const [inputCusOverdue, setInputCusOverdue] = useState(0);

    const createCustomer = () => {
        const cusDate = inputDate; 
        const cusName = inputCusName;
        const cusPhone = inputCusPhone;
        const cusCar = inputCusCar;
        const cusOverdue = inputCusOverdue;
        const newCustomer = [...customer];
        newCustomer.push({
            id: _.uniqueId(),
            cusDate: cusDate,
            cusName: cusName,
            cusPhone: cusPhone,
            cusCar: cusCar,
            cusOverdue: cusOverdue
        });
        setCustomer(newCustomer);
        setInputDate(date.toLocaleDateString());
        setInputCusName('');
        setInputCusPhone('');
        setInputCusCar('');
        setInputCusOverdue(0);
    };

    const cancleCreateCustomer = () => {
        setCustomer('');
        setInputDate(date.toLocaleDateString());
        setInputCusName('');
        setInputCusPhone('');
        setInputCusCar('');
        setInputCusOverdue(0);
    };

    const getCustomerById = (id) => {
        console.log(id);
        console.log(customer);
        
        const newCustomer = [...customer];
        const targetIndex = newCustomer.findIndex(y=>y.id === id); 
        
        console.log(targetIndex)
        let showCustomer = newCustomer.splice(targetIndex, 1);
        setViewCustomer(showCustomer);
        console.log(showCustomer);
        setInputCustomerId('');
    };

    if (props.current==='createCustomerKey'){
        content = (
            <div className='task'>
                <Row>
                    <Col>
                    <Row justify={'center'}>
                        <h3>เพิ่มลูกค้าใหม่</h3>
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
                    <Row>
                        <Input value={inputCusOverdue}
                        onChange={(e)=>setInputCusOverdue(e.target.value)} 
                        placeholder='ยอดค้างชำระ'style={{marginTop:'5px'}}/>
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
                            {cus.id}--
                            {cus.cusDate}--
                            {cus.cusName}--
                            {cus.cusPhone}--
                            {cus.cusCar}--
                            {cus.cusOverdue}.
                        </List.Item>
                        )}
                    />
                    </Col>
                </Row>
            </div>
          )
    }
    else if(props.current==='deleteCustomerKey'){
        content = 'ลบรายละเอียดลูกค้า'
    }
    else {
        content = (<div className="task">
            <Col>
                <Row>
                    ดูรายละเอียดลูกค้า
                </Row>
                <Row>
                    <Input value={inputCustomerId}
                    onChange={(e)=>setInputCustomerId(e.target.value)}
                    placeholder="กรุณาใส่รหัสลูกค้า"
                    />
                </Row>
                <Row>
                    <Col>
                    <Button onClick={()=>getCustomerById(inputCustomerId)}>View</Button>
                    </Col>
                    <Col>
                    <Button >View All</Button>
                    </Col>
                </Row>
                <Divider/>
                <List
                    dataSource={viewCustomer}
                    renderItem={cus =>(
                        <List.Item>
                                    {cus.id}--
                                    {cus.cusDate}--
                                    {cus.cusName}--
                                    {cus.cusPhone}--
                                    {cus.cusCar}--
                                    {cus.cusOverdue}.
                        </List.Item>
                    )}
                />
            </Col>
        </div>)
    }
    return content;
};
export default Content