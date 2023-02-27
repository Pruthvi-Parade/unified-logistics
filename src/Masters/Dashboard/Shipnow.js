import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
  Card,
  Row,
  Col
} from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

export default function Inventoryexcel() {
    const [componentDisabled, setComponentDisabled] = useState(true);
    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
    };

    const navigate = useNavigate();
    const [isSubmit, setSubmit] = useState(false);

    return isSubmit ? (
        <>
            <Card title="Shipment Report">
                <Card
                type="inner"
                title="Customer Details :"
                extra={<a href="#">Track Order</a>}
                style={{textAlign: "left", margin: "10px"}}
                >
                Order Item 1782 : 
                Current status : Dispatched
                </Card>
                <Card
                type="inner"
                title="Shipment Details :"
                extra={<a href="#">Track Order</a>}
                style={{textAlign: "left", margin: "10px"}}
                >
                
                Order Item 1784 : 
                Current status : Dispatched
                </Card>
                <Card
                type="inner"
                title="Shipment Schedule :"
                extra={<a href="#">Track Order</a>}
                style={{textAlign: "left", margin: "10px"}}
                >
                     Order Item 1782 : 
                     Current status : Dispatched
                </Card>
            </Card>
        </>
            
    ) : (
        
        <>
        <h1>Customer Details</h1>
        <Row>
            <Col span={18}>
                <Form>
                <Form.Item label="Name">
                <Input />
                </Form.Item>
                <Form.Item label="Select">
                <Select>
                    <Select.Option value="byroad">By Road</Select.Option>
                    <Select.Option value="byair">By Air</Select.Option>
                </Select>
                </Form.Item>
                <Form.Item label="Region Selection">
                <TreeSelect
                    treeData={[
                    {
                        title: 'Maharashatra',
                        value: 'maharashatra',
                        children: [
                        {
                            title: 'Pune',
                            value: 'pune',
                        },
                        {
                            title: 'Mumbai',
                            value: 'mumbai', 
                        }
                        ],
                    },
                    {
                        title: 'Goa',
                        value: 'goa',
                        children: [
                        {
                            title: 'Panji',
                            value: 'panji',
                        },
                        ],
                    },
                    ]}
                />
                </Form.Item>
                <Form.Item label="Pickup date">
                <DatePicker />
                </Form.Item>
                <Form.Item label="RangePicker">
                <RangePicker />
                </Form.Item>
                <Form.Item label="Number of Items">
                <InputNumber />
                </Form.Item>
                <Form.Item label="Handeling Instructions">
                <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Is Fragile ?" valuePropName="checked">
                <Switch />
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList">
                <Upload action="/upload.do" listType="picture-card">
                    <div>
                    <PlusOutlined />
                    <div>
                        Upload Shipment photos
                    </div>
                    </div>
                </Upload>
                </Form.Item>
                <Form.Item label="Submit and make payment">
                <Button type='primary' size={'large'} onClick={()=>{navigate('/masters/dashboard/payments')}}>Make Payment</Button>
                </Form.Item>
            </Form>
            </Col>
        </Row>  
     </>
  )
}