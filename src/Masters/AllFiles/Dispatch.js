import React from "react";
import { SmileOutlined,DislikeOutlined } from "@ant-design/icons";
import { Divider, Timeline } from "antd";
import productDispatchdata from './dispatch.json';

export default function Dispatch() {
  return (
    <div>
      {
        productDispatchdata.map((obj)=>{
          return(
            <div style={{marginTop: "30px"}}>
              <Divider orientation="left"><h2><b>Track Your Order {obj.trackingId}</b></h2></Divider>
              <Timeline style={{textAlign: "left"}}>
                <Timeline.Item color="green">
                  {obj.step1}
                </Timeline.Item>
                <Timeline.Item color="blue">
                  <p>{obj.step1_1}</p>
                </Timeline.Item>
                <Timeline.Item color="green">
                  {obj.step2}
                </Timeline.Item>
                <Timeline.Item color="blue">
                  <p>{obj.step2_2}</p>
                </Timeline.Item>
                <Timeline.Item color="green">
                  {obj.step3}
                </Timeline.Item>
                <Timeline.Item color="blue">
                  <p>{obj.step3_1}</p>
                  <p>{obj.step3_2}</p>
                </Timeline.Item>
                <Timeline.Item color={obj.OrderDeliverToday ? "green" : "red"}>
                  Order will be delivered today
                </Timeline.Item>
                <Timeline.Item color={obj.OrderDelivered ? "#00CCFF" : "red"} dot={obj.OrderDelivered ? <SmileOutlined /> : <DislikeOutlined />}>
                  <p>Order delivered</p>
                </Timeline.Item>
              </Timeline>
            </div>
          )
        })
      }
    </div>
  );
}

