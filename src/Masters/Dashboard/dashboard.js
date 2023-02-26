// import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
// import { Link } from "react-router-dom";
// import { Divider, List } from "antd";
// import React from "react";
// const data = [
//     { item: <b>Our Clients and Products</b>, route: "inventoryexcel" },
//     { item: <b>Live shipment in bond</b>, route: "liveshipmentinbond" },
//     { item: <b>Inventory Mapping count</b>, route: "mappingcount" },
// ];

// const path = "/masters/dashboard/";

// export default function Dashboard() {
//     return (
//         <>
//             <Divider orientation="left"><h2><b>Home Page</b></h2></Divider>
//             <List
//                 size="large"
//                 header={<div><b>Dashboard Menu</b></div>}
//                 bordered
//                 dataSource={data}
//                 renderItem={(item, a) => (
//                     <List.Item>
//                         <Link style={{ color: "inherit" }} to={path + item.route}>
//                             {item.item}
//                         </Link>
//                     </List.Item>
//                 )}
//             />
//         </>
//     );
// }
import { Carousel, Image, Button, Col, Divider, Row, Form, Card, Input } from 'antd';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DownloadOutlined, RollbackOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const style = {
    background: '#F5F5F5',
    padding: '8px 0',
    widht: '100px',
};


export default function Dashboard() {
    const navigate = useNavigate();
    
    return (
        <>
            <Carousel autoplay>
                <div style={{background: '#364d79'}}>
                    <Image preview={false} style={{ marginTop: '50px', height: "160px", width: "500px"}} src="/Routelogo.png"/>
                </div>
                <div>
                    <Image preview={false} style={{height: "360px", width: "1300px"}} src="/Ship.jpg"/>
                </div>
                <div>
                    <Image preview={false} style={{height: "360px", width: "1300px"}} src="/Truck.jpg"/>
                </div>
                <div>
                    <Image preview={false} style={{height: "360px", width: "1300px"}} src="/Signup.jpg"/>
                </div>
            </Carousel>
            <h2>Send from your Location, to Anywhere in the Country</h2>
            <div style={{background: '#6082B6'}}>
            <Row
                    gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }}
                >
                    <Col className="gutter-row" span={12}>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                                <Image src='/budget.png' style={{ height:'100px'}}/>
                                <h3>Multiple payment options</h3>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Image src='/cargo.png' style={{ height:'100px'}}/>
                                <h3>Real-time tracking</h3>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Image src='/laptop.png' style={{ height:'100px'}}/>
                                <h3>Hassle-free pick-up</h3>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Image src='/settings.png' style={{ height:'100px'}}/>
                                <h3>Faster, safer delivery</h3>
                            </div>
                        </Col>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div style={{marginRight: '60%', marginTop: '25%'}}>
                            <Card
                                bordered={true}
                                hoverable={true}
                                style={{
                                    margin: "Auto",
                                    width: "400px",
                                    borderRadius: "3%",
                                }}
                                >
                                <br></br>
                                <img
                                    src="/Routelogo.png"
                                    style={{ width: "180px", margin: "5%" }}
                                />
                                {/* <Title style={{ color: "black" }}>ULI Login</Title> */}
                                <Form
                                    name="basic"
                                    labelCol={{
                                    span: 8,
                                    }}
                                    wrapperCol={{
                                    span: 16,
                                    }}
                                    initialValues={{
                                    remember: true,
                                    }}
                                    // onFinish={onFinish}
                                    // onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                    style={{ color: "black" }}
                                    label={
                                        <p
                                        style={{
                                            fontSize: "15px",
                                            color: "black",
                                            marginTop: "18px",
                                        }}
                                        >
                                        Pickup PIN
                                        </p>
                                    }
                                    name="pickpinnumber"
                                    rules={[
                                        {
                                        required: true,
                                        message: "Please input your Pickup PIN!",
                                        },
                                    ]}
                                    >
                                    <Input size="large" />
                                    </Form.Item>

                                    <Form.Item
                                    label={
                                        <p
                                        style={{
                                            color: "black",
                                            fontSize: "15px",
                                            marginTop: "18px",
                                        }}
                                        >
                                        Drop PIN
                                        </p>
                                    }
                                    name="droppinnumber"
                                    rules={[
                                        {
                                        required: true,
                                        message: "Please input your Drop PIN!",
                                        },
                                    ]}
                                    >
                                    <Input size="large" />
                                    </Form.Item>

                                    <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        size="large"
                                        style={{ width: "150%" }}
                                        onClick={() => {
                                            navigate("/masters/dashboard/shipnow");
                                        }}
                                    >
                                        Ship Now
                                    </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
            <div
                style={{
                    marginTop : '20px',
                    padding: '20px',
                    textAlign: 'center'
                }}
                >
                <h2>Sign up a business account now to enjoy personalized rates and pay within our standard 15-day credit term</h2>
            </div>
            <Button style={{background: 'orange', color: 'white', height: '60px'}}>
                Open a Business Account
            </Button>
            <Divider orientation="left">Why open a business account?</Divider>
                <div style={{margin: '20px'}}>
                <Row
                    gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }}
                >
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                            <Image src='/budget.png' style={{ height:'100px'}}/>
                            <h3>Personalised rates</h3>
                            <h4>Receive discounts based on your shipping volume.</h4>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                        <Image src='/cargo.png' style={{ height:'100px'}}/>
                            <h3>Manage pickup</h3>
                            <h4>Complete online scheduling and management of pickups and shipments.</h4>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                        <Image src='/laptop.png' style={{ height:'100px'}}/>
                            <h3>Advanced shipping tool</h3>
                            <h4>Streamlined, an online shipping tool built for shippers and shipments of all types and sizes.</h4>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>
                        <Image src='/settings.png' style={{ height:'100px'}}/>
                            <h3>Comprehensive customs tools</h3>
                            <h4>Global Trade ManagerTM a resource for international shipping information.</h4>
                        </div>
                    </Col>
                </Row> 
                </div>
                <div style={{ margin: '20px'}}>
                    <Row
                        gutter={{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }}
                    >
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                                <Image src='/budget.png' style={{ height:'100px'}}/>
                                <h3>Personalised rates</h3>
                                <h4>Receive discounts based on your shipping volume.</h4>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Image src='/truck.png' style={{ height:'100px'}}/>
                                <h3>Manage pickup</h3>
                                <h4>Complete online scheduling and management of pickups and shipments.</h4>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Image src='/supplies.png' style={{ height:'100px'}}/>
                                <h3>Supplies</h3>
                                <h4>Free Unified Logistics packaging and shipping supplies.</h4>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                            <Image src='/user.png' style={{ height:'100px'}}/>
                                <h3>Account management</h3>
                                <h4>Online account management tools including online billing, and address book, and more.</h4>
                            </div>
                        </Col>
                    </Row>
                </div>            
        </>
    );
}
