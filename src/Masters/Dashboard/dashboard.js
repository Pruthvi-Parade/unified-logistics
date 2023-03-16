import { Carousel, Image, Button, Col, Divider, Row, Form, Card, Input, Modal } from 'antd';
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const style = { background: '#F5F5F5', padding: '8px 0', widht: '100px',};

export default function Dashboard() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = () => {
        setIsModalOpen(false);
            navigate("/masters/dashboard/shipnow");
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    const [pickup, setpickup] = useState(
        {
            block: "",
            circle: "",
            country: "",
            district: "",
            division: "",
        }
    );
    const [drop, setDrop] = useState(
        {
            block: "",
            circle: "",
            country: "",
            district: "",
            division: "",
        }
    );

    const onFinish = (values) =>{
        
        axios.get(`https://api.postalpincode.in/pincode/${values.pickpinnumber}`)
        .then((response)=>{
            const data = response.data[0].PostOffice[0];
            console.log(data);
            setpickup({
                block: data.Block,
                circle: data.Circle,
                country: data.Country,
                district: data.District,
                division: data.Division,
            })
            setIsModalOpen(true);
        })
        .catch((error)=>{
            alert(`Sorry, our services is not available in this area : ${values.pickpinnumber}`);
        })
        axios.get(`https://api.postalpincode.in/pincode/${values.droppinnumber}`)
        .then((response)=>{
            const data = response.data[0].PostOffice[0];
            console.log(data);
            setDrop({
                block: data.Block,
                circle: data.Circle,
                country: data.Country,
                district: data.District,
                division: data.Division,
            })
        })
        .catch((error)=>{
            alert(`Sorry, our services is not available in this area : ${values.droppinnumber}`);
        })
    }
    const onFinishFailed = () =>{
        alert("Failed to proceed")
    }
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
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, }} >
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
                                        <p style={{ fontSize: "15px",color: "black",marginTop: "18px",}}>Pickup PIN</p>
                                    }
                                    name="pickpinnumber"
                                    rules={[
                                        {required: true,message: "Please input your Pickup PIN!"}
                                    ]}
                                    >
                                    <Input size="large" />
                                    </Form.Item>

                                    <Form.Item
                                    label={
                                        <p style={{ color: "black", fontSize: "15px", marginTop: "18px",}}>Drop PIN</p>
                                    }
                                    name="droppinnumber"
                                    rules={[
                                        {required: true, message: "Please input your Drop PIN!"}
                                    ]}
                                    >
                                    <Input size="large" />
                                    </Form.Item>
                                    <Form.Item>
                                    <Button type="primary" htmlType="submit" size="large" style={{ width: "150%" }}>
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
                style={{marginTop : '20px', padding: '20px', textAlign: 'center' }}>
                <h2>Sign up a business account now to enjoy personalized rates and pay within our standard 15-day credit term</h2>
            </div>
            <Button style={{background: 'orange', color: 'white', height: '60px'}}>
                Open a Business Account
            </Button>
            <Divider orientation="left">Why open a business account?</Divider>
                <div style={{margin: '20px'}}>
                <Row gutter={{xs: 8,sm: 16,md: 24,lg: 32,}} >
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
                    <Row gutter={{xs: 8,sm: 16, md: 24,lg: 32,}} >
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
            <Modal title="Confirm the delevery Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Row>
                    <Col span={12}>
                        <p>block: {pickup.block}</p>
                        <p>circle: {pickup.circle}</p>
                        <p>country: {pickup.country}</p>
                        <p>district: {pickup.district}</p>
                        <p>division: {pickup.division}</p>
                    </Col>
                    <Col span={12}>
                        <p>block: {drop.block}</p>
                        <p>circle: {drop.circle}</p>
                        <p>country: {drop.country}</p>
                        <p>district: {drop.district}</p>
                        <p>division: {drop.division}</p>
                    </Col>
                </Row>
            </Modal>
        </>
    );
}
