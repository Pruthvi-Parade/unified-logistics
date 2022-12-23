import { Button, message, Table, Popconfirm, Input, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState, useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FileAddOutlined } from "@ant-design/icons";
import moment from "moment";

export default function FileTable() {
    const [dataSource, setDataSource] = useState([]);
    const text = "Are you sure to delete this file?";
    function getData() {
        axios
            .get("/dispatch/fetch_all_files")
            .then((response) => {
                setDataSource(
                    response?.data?.data.sort((a, b) => a.file_id - b.file_id)
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    const navigate = useNavigate();

    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(selectedKeys, confirm, dataIndex)
                        }
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() =>
                            clearFilters && handleReset(clearFilters)
                        }
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1890ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: <b>File ID</b>,
            // title: <b>File ID</b>,
            dataIndex: "file_id",
            key: "file_id",
            ...getColumnSearchProps('file_id'),
        },
        {
            title: <b>Date</b>,
            dataIndex: "date",
            key: "date",
            render: (text, record) =>
                moment(text).format("YYYY-MM-DD hh:mm:ss a"),
        },
        {
            title: <b>File name</b>,
            dataIndex: "file_name",
            key: "file_name",
        },
        {
            title: <b>Vehical number</b>,
            dataIndex: "vehical_number",
            key: "vehical_number",
        },
        {
            title: <b>Total items</b>,
            dataIndex: "total_items",
            key: "total_items",
        },
        {
            title: <b>Store ID</b>,
            dataIndex: "store_id",
            key: "store_id",
        },
        {
            title: <b>Action</b>,
            dataIndex: "file_id",
            key: "file_id",
            align: "center",
            render: (record) => (
                <>
                    {
                        <Popconfirm
                            placement="top"
                            title={text}
                            onConfirm={() => {
                                console.log(record);
                                let Payload = new FormData();
                                Payload.append("file_id", parseInt(record));
                                axios
                                    .get(`/files/delete?file_id=${record}`)
                                    .then((response) => {
                                        // console.log(response);
                                        if (response.status === 200) {
                                            getData();
                                            message.success(
                                                "File Deleted Successfully"
                                            );
                                        } else {
                                            message.error(
                                                "File Deletetion Failed"
                                            );
                                        }
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button type="danger">Delete</Button>
                        </Popconfirm>
                    }
                </>
            ),
        },
    ];

    return (
        <div className="FileTable">
            <Button
                style={{ float: "right", marginBottom: "1%" }}
                type="primary"
                icon={<FileAddOutlined />}
                onClick={() => {
                    navigate("/masters/allfiles/dumpfile");
                }}
            >
                Dispatch Vehical
            </Button>
            <Table
                scroll={{ y: 650 }}
                dataSource={dataSource}
                columns={columns}
            />
        </div>
    );
}
