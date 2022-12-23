import React from "react";
import { Card } from "antd";

export default function allOrders() {
  return (
    <div>
      <Card title="All Orders">
        <Card
          type="inner"
          title="Order 1"
          extra={<a href="#">Track Order</a>}
          style={{textAlign: "left", margin: "10px"}}
        >
          Order Item 1782 : 
          Current status : Dispatched
        </Card>
        <Card
          type="inner"
          title="Order 1"
          extra={<a href="#">Track Order</a>}
          style={{textAlign: "left", margin: "10px"}}
        >
          Order Item 1784 : 
          Current status : Dispatched
        </Card>
      </Card>
    </div>
  );
}
