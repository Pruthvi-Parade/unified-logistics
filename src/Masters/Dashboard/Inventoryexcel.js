import { Carousel, Image, Button, Col, Divider, Row } from 'antd';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DownloadOutlined, RollbackOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
const style = {
    background: '#F5F5F5',
    padding: '8px 0',
    widht: '100px',
};
export default function Inventory_Excel() {

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
