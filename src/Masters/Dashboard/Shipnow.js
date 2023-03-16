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
  Col,
  Modal
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
    const [details, setDetails] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
        navigate('/masters/dashboard/payments')
    };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
      
      const onFinish = (values) =>{
        console.log("ygqiuwrhgquwhgowirgoiqw");
        setDetails(values);
        console.log(details);
    }
    const onFinishFailed = () =>{
        alert("Failed to proceed")
    }
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
            <Form
                name="basic"
                labelCol={{span: 8,}}
                wrapperCol={{span: 16,}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
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
                <Form.Item label="Pickup Address">
                <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Drop Address">
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
                <Form.Item label={"Submit"}>
                <Button type='primary' size={'large'} onClick={navigate('/masters/dashboard/payments')}>Make Payment</Button>
                </Form.Item>
                </Form>
            </Col>
        </Row>  
        <div>
        <Modal title="Confirm the delevery Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Row>
                    <Col span={12}>
                        {/* <p>block: {pickup.block}</p>
                        <p>circle: {pickup.circle}</p>
                        <p>country: {pickup.country}</p>
                        <p>district: {pickup.district}</p>
                        <p>division: {pickup.division}</p> */}
                    </Col>
                    <Col span={12}>
                        {/* <p>block: {drop.block}</p>
                        <p>circle: {drop.circle}</p>
                        <p>country: {drop.country}</p>
                        <p>district: {drop.district}</p>
                        <p>division: {drop.division}</p> */}
                    </Col>
                </Row>
            </Modal>
        </div>
     </>
  )
}