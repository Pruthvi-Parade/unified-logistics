import React, { useState } from "react";
import { SmileOutlined,DislikeOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Input, Row, Timeline } from "antd";
import productDispatchdata from './dispatch.json';

export default function Dispatch() {
  const [trackingId, setTrackingId] = useState();
  const [trackingDetails, setTrackingDetails]= useState();
  const [orderFound, setOrderFound] = useState(false);
  
  const fetchOrder = ()=>{
    setOrderFound(false);
    console.log(trackingId);
    for (let i = 0; i < productDispatchdata.length; i++) {
      if(trackingId == productDispatchdata[i].trackingId){
        setTrackingDetails(productDispatchdata[i]);
        setOrderFound(true);
        console.log(trackingDetails);
      }
    }
  }
  return (
    <div>
      <Row>
        <Col span={8}><Input placeholder="Enter your Tracking Id" size="large" onChange={(e)=>{setTrackingId(e.target.value)}}/></Col>
        <Button type="primary" size="large" onClick={fetchOrder}>Find</Button>
        <Col span={8}><Input placeholder="Find by Store Id" size="large" style={{marginLeft: "10px"}}/></Col>
        <Button type="primary" size="large" onClick={fetchOrder}>Find</Button>
      </Row>

      {
        orderFound ?(
          <div style={{marginTop: "30px"}}>
              <Divider orientation="left"><h2><b>Track Your Order {trackingDetails.trackingId}</b></h2></Divider>
              <Timeline style={{textAlign: "left"}}>
                <Timeline.Item color="green">
                  {trackingDetails.step1}
                </Timeline.Item>
                <Timeline.Item color="blue">
                  <p>{trackingDetails.step1_1}</p>
                </Timeline.Item>
                <Timeline.Item color="green">
                  {trackingDetails.step2}
                </Timeline.Item>
                <Timeline.Item color="blue">
                  <p>{trackingDetails.step2_2}</p>
                </Timeline.Item>
                <Timeline.Item color="green">
                  {trackingDetails.step3}
                </Timeline.Item>
                <Timeline.Item color="blue">
                  <p>{trackingDetails.step3_1}</p>
                  <p>{trackingDetails.step3_2}</p>
                </Timeline.Item>
                <Timeline.Item color={trackingDetails.OrderDeliverToday ? "green" : "red"}>
                  Order will be delivered today
                </Timeline.Item>
                <Timeline.Item color={trackingDetails.OrderDelivered ? "#00CCFF" : "red"} dot={trackingDetails.OrderDelivered ? <SmileOutlined /> : <DislikeOutlined />}>
                  <p>Order delivered</p>
                </Timeline.Item>
              </Timeline>
            </div>
        ):(
          <h1 style={{marginTop: "10%"}}>Invalid tracking ID : {trackingId}</h1>
        )
      }
    </div>
  );
}

