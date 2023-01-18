import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Link } from "react-router-dom";
import { Divider, List } from "antd";
import React from "react";
const data = [
    { item: <b>Our Clients and Products</b>, route: "inventoryexcel" },
    { item: <b>Live shipment in bond</b>, route: "liveshipmentinbond" },
    { item: <b>Inventory Mapping count</b>, route: "mappingcount" },
];

const path = "/masters/dashboard/";

export default function Dashboard() {
    return (
        <>
            <Divider orientation="left"><h2><b>Home Page</b></h2></Divider>
            <List
                size="large"
                header={<div><b>Dashboard Menu</b></div>}
                bordered
                dataSource={data}
                renderItem={(item, a) => (
                    <List.Item>
                        <Link style={{ color: "inherit" }} to={path + item.route}>
                            {item.item}
                        </Link>
                    </List.Item>
                )}
            />
        </>
    );
}
