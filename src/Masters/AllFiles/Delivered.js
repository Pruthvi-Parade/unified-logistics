import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "../../App.css";
import devliveryProducts from './delivered.json';
import {
    message,
    Button,
    Popconfirm,
    Table,
} from "antd";

export default function Dumpfile() {

    useEffect(()=>{
        setDataSource(devliveryProducts)
    },[devliveryProducts])

    const [dataSource, setDataSource] = useState(devliveryProducts);
    
    const columns = [
        {
            title: <b>Tracking ID</b>,
            dataIndex: "trackingId",
            key: "trackingId",
        },
        {
            title: <b>Date</b>,
            dataIndex: "date",
            key: "date",
        },
        {
            title: <b>Product name</b>,
            dataIndex: "productName",
            key: "productName",
        },
        {
            title: <b>Vehical number</b>,
            dataIndex: "vehicalNumber",
            key: "vehicalNumber",
        },
        {
            title: <b>Total items</b>,
            dataIndex: "totalItems",
            key: "totalItems",
        },
        {
            title: <b>Warehouse ID</b>,
            dataIndex: "warehouseId",
            key: "warehouseId",
        },
        {
            title: <b>Action</b>,
            dataIndex: "trackingId",
            key: "trackingId",
            align: "center",
            render: (record) => (
                <>
                    {
                        <Popconfirm
                            placement="top"
                            title={"Confirm your selection"}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type="primary" size={"small"} style={{marginRight: "10px"}}>Check</Button>
                            <Button type="danger" size={"small"}>Delete</Button>
                        </Popconfirm>
                    }
                </>
            ),
        },
    ];
    return(
        <div>
            <Table
                scroll={{ y: 650 }}
                dataSource={dataSource}
                columns={columns}   
            />
        </div>
    )
}
