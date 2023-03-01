import {
    UnorderedListOutlined,
    FileSearchOutlined,
    SendOutlined,
    DashboardOutlined,
} from "@ant-design/icons";
import "../App.css";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Link } from "react-router-dom";
const { Sider } = Layout;

const items = [
    {
        label: (
            <Link
                style={{ color: "inherit" }}
                to={`/masters/dashboard/dashboard`}
            >
                Dashboard
            </Link>
        ),
        key: "masters",
        icon: <DashboardOutlined />,
    },
    {
        label: "Track Item",
        key: "masters",
        icon: <UnorderedListOutlined />,
        children: [
            {
                label: (
                    <Link
                        style={{ color: "inherit" }}
                        to={`/masters/allfiles/allorders`}
                    >
                        All Orders
                    </Link>
                ),
                key: "allorders",
                icon: <SendOutlined />,
            },
            {
                label: (
                    <Link
                        style={{ color: "inherit" }}
                        to={`/masters/allfiles/dispatch`}
                    >
                        Dispatched
                    </Link>
                ),
                key: "dispatch",
                icon: <SendOutlined />,
            },
            {
                label: (
                    <Link
                        style={{ color: "inherit" }}
                        to={`/masters/allfiles/delivered`}
                    >
                        Delivered
                    </Link>
                ),
                key: "filetable",
                icon: <SendOutlined />,
            },
            {
                label: (
                    <Link
                        style={{ color: "inherit" }}
                        to={`/masters/allfiles/pending`}
                    >
                        Pending
                    </Link>
                ),
                key: "pending",
                icon: <SendOutlined />,
            },
        ],
    },
];

export default function SideBar({ collapsed, onCollapse }) {

    return (
        <Layout.Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            className="sidebar-component"
            width={"var(--sidebarOpenWidth)"}
            collapsedWidth={"var(--sidebarClosedWidth)"}
        >
            <div
                className="logo"
                style={{background:"white"}}
            > <img
                src="/Routelogo.png"
                alt="logo"
                height="62px"
                width="100%"
            />
            </div>
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
            />
        </Layout.Sider>
    );
}
