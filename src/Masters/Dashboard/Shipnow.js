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
  Card
} from 'antd';
import { useState } from 'react';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

export default function Inventoryexcel() {
    const [componentDisabled, setComponentDisabled] = useState(true);
    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
    };

    const [isSubmit, setSubmit] = useState(true);

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
        <Form>
             <Form.Item label="Input">
             <Input />
             </Form.Item>
             <Form.Item label="Select">
             <Select>
                 <Select.Option value="demo">Demo</Select.Option>
             </Select>
             </Form.Item>
             <Form.Item label="TreeSelect">
             <TreeSelect
                 treeData={[
                 {
                     title: 'Light',
                     value: 'light',
                     children: [
                     {
                         title: 'Bamboo',
                         value: 'bamboo',
                     },
                     ],
                 },
                 ]}
             />
             </Form.Item>
             <Form.Item label="Cascader">
             <Cascader
                 options={[
                 {
                     value: 'zhejiang',
                     label: 'Zhejiang',
                     children: [
                     {
                         value: 'hangzhou',
                         label: 'Hangzhou',
                     },
                     ],
                 },
                 ]}
             />
             </Form.Item>
             <Form.Item label="DatePicker">
             <DatePicker />
             </Form.Item>
             <Form.Item label="RangePicker">
             <RangePicker />
             </Form.Item>
             <Form.Item label="InputNumber">
             <InputNumber />
             </Form.Item>
             <Form.Item label="TextArea">
             <TextArea rows={4} />
             </Form.Item>
             <Form.Item label="Switch" valuePropName="checked">
             <Switch />
             </Form.Item>
             <Form.Item label="Upload" valuePropName="fileList">
             <Upload action="/upload.do" listType="picture-card">
                 <div>
                 <PlusOutlined />
                 <div
                     style={{
                     marginTop: 8,
                     }}
                 >
                     Upload
                 </div>
                 </div>
             </Upload>
             </Form.Item>
             <Form.Item label="Button">
             <Button>Button</Button>
             </Form.Item>
         </Form>
     </>
  )
}