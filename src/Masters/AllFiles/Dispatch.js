import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Divider, Timeline } from "antd";

export default function Dispatch() {
  return (
    <div style={{marginTop: "30px"}}>
      <Divider orientation="left"><h2><b>Track Your Order</b></h2></Divider>
      <Timeline style={{textAlign: "left"}}>
        <Timeline.Item color="green">
          Step 1
        </Timeline.Item>
        <Timeline.Item color="green">
          Step 2
        </Timeline.Item>
        <Timeline.Item color="blue">
          <p>Step 1</p>
          <p>Step 2</p>
          <p>Step 3</p>
        </Timeline.Item>
        <Timeline.Item color="red">
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </Timeline.Item>
        <Timeline.Item color="green">
          Order will be delivered today
        </Timeline.Item>
        <Timeline.Item color="#00CCFF" dot={<SmileOutlined />}>
          <p>Order delivered</p>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
