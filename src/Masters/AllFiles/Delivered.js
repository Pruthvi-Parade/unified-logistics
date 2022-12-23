import React, { useState } from "react";
import "antd/dist/antd.css";
import "../../App.css";
import {
    message,
    Button,
    Popconfirm,
    Table,
} from "antd";

export default function Dumpfile() {

    const [dataSource, setDataSource] = useState();
    const columns = [
        {
            title: <b>File ID</b>,
            // title: <b>File ID</b>,
            dataIndex: "file_id",
            key: "file_id",
            // ...getColumnSearchProps('file_id'),
        },
        {
            title: <b>Date</b>,
            dataIndex: "date",
            key: "date",
            // render: (text, record) =>
            //     moment(text).format("YYYY-MM-DD hh:mm:ss a"),
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
                            title={"Some random delete"}
                            // onConfirm={() => {
                            //     console.log(record);
                            //     let Payload = new FormData();
                            //     Payload.append("file_id", parseInt(record));
                            //     axios
                            //         .get(`/files/delete?file_id=${record}`)
                            //         .then((response) => {
                            //             // console.log(response);
                            //             if (response.status === 200) {
                            //                 getData();
                            //                 message.success(
                            //                     "File Deleted Successfully"
                            //                 );
                            //             } else {
                            //                 message.error(
                            //                     "File Deletetion Failed"
                            //                 );
                            //             }
                            //         })
                            //         .catch((error) => {
                            //             console.log(error);
                            //         });
                            // }}
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
