import React, { useState } from "react";
import { Button, Spin } from "antd";
import { useEffect } from "react";
import { LoadingOutlined, RollbackOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Liveshipmentinbond() {
    const [count, setCount] = useState();
    const [loading, setLoading] = useState(true);

    const getCount = () => {
            axios
            .get(`/inventory/live_shipment_in_bond`)
            .then((response)=>{
                console.log(response);
                setCount(response.data.count);
                setLoading(false);
            })
            .catch((error)=>{
                setCount("Cannot Display Count")
            })
        };
    useEffect(() => {
        getCount();
    }, []);
    const navigate = useNavigate();
    return (
        <div>
            <Button
                style={{ float: "left", marginBottom: "1%" }}
                type="primary"
                icon={<RollbackOutlined />}
                title="Back"
                onClick={() => {
                    navigate("/masters/dashboard/dashboard");
                }}
            >
                Back
            </Button>
            <h3 style={{ float: "left", fontSize: "20px", marginLeft: "5%" }}>
                Live Shipment In Bond
            </h3>
            <div className="Counter">
                <Spin indicator={antIcon} spinning={loading}>
                    <h1>{count}</h1>
                </Spin>
            </div>
        </div>
    );
}
