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
        console.log(values);
        setDetails(values);
        console.log(details.name);
        setIsModalOpen(true);
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
                <Form.Item
                style={{ color: "black" }}
                label={
                    <p style={{ fontSize: "15px",color: "black",marginTop: "18px",}}>Name</p>
                }
                name="name"
                // rules={[
                //     {required: true,message: "Please input your Pickup PIN!"}
                // ]}
                >
                <Input size="large" />
                </Form.Item>
                
                <Form.Item label="Select" name="select">
                <Select>
                    <Select.Option value="byroad">By Road</Select.Option>
                    <Select.Option value="byair">By Air</Select.Option>
                </Select>
                </Form.Item>

                <Form.Item label="Region Selection" name="region">
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

                <Form.Item label="Pickup date" name="pickdate">
                <DatePicker />
                </Form.Item>
                <Form.Item label="RangePicker" name="droppicker">
                <RangePicker />
                </Form.Item>
                <Form.Item label="Number of Items" name="items">
                <InputNumber />
                </Form.Item>
                <Form.Item label="Handeling Instructions" name="hins">
                <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Pickup Address" name="pickaddress">
                <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Drop Address" name="dropaddress">
                <TextArea rows={4} />
                </Form.Item>

                <Form.Item label="Is Fragile ?" valuePropName="checked" name="fragile">
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
                <Form.Item>
                <Button type="primary" htmlType="submit" size="large" style={{ width: "150%" }} onClick={navigate(`/masters/dashboard/payments`)}>
                    Make Payment
                </Button>
                </Form.Item>
            </Form>
            </Col>
        </Row>  
        <div>
        {/* <Modal title="Confirm the delevery Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Row>
                    <Col span={12}>
                        <p>block: {details.name}</p>
                        <p>circle: {details.dropaddress}</p>
                        <p>country: {details.droppicker[0]._d}</p>
                        <p>district: {details.fragile}</p>
                    </Col>
                    <Col span={12}>
                        <p>block: {details.hins}</p>
                        <p>circle: {details.items}</p>
                        <p>country: {details.pickaddress._d}</p>
                        <p>district: {details.region}</p>
                        <p>division: {details.select}</p>
                    </Col>
                </Row>
            </Modal> */}
        </div>
     </>
  )
}