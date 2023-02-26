import React, { useState } from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";


export default function Liveshipmentinbond() {
    const navigate = useNavigate();

    const getCount = () => {
      navigate('/masters/allfiles/dispatch')
        };
    return (
        <div>
            <Card title="All Orders">
              <Card
                type="inner"
                title="Order 1"
                extra={<a href="#" onClick={getCount}>Track Order</a>}
                style={{textAlign: "left", margin: "10px"}}
              >
                Order Item 1782 : 
                Current status : Dispatched
              </Card>
              <Card
                type="inner"
                title="Order 1"
                extra={<a href="#" onClick={getCount}>Track Order</a>}
                style={{textAlign: "left", margin: "10px"}}
              >
                Order Item 1784 : 
                Current status : Dispatched
              </Card>
            </Card>
        </div>
    );
}




