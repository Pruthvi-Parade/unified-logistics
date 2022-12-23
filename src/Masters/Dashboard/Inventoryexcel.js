import { Button, Divider, Spin, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DownloadOutlined, RollbackOutlined } from "@ant-design/icons";
import * as excelJS from "exceljs";
import { saveAs } from "file-saver";
import { Navigate, useNavigate } from "react-router-dom";

const columns = [
    {
        title: <b>Map Id</b>,
        dataIndex: "map_id",
        key: "map_id",
    },
    {
        title: <b>Flight Number</b>,
        dataIndex: "flight_number",
        key: "flight_number",
    },
    {
        title: <b> AWB Number</b>,
        dataIndex: "awb_number",
        key: "awb_number",
    },
    {
        title: <b>Piece ID</b>,
        dataIndex: "piece_id",
        key: "piece_id",
    },
    {
        title: <b>EPC</b>,
        dataIndex: "epc",
        key: "epc",
    },
    {
        title: <b>Created Time</b>,
        dataIndex: "created_time",
        key: "created_time",
    },
    {
        title: <b>updated time</b>,
        dataIndex: "updated_time",
        key: "updated_time",
    },
    {
        title: <b> Floor</b>,
        dataIndex: "floor",
        key: "floor",
    },
    {
        title: <b>Zone</b>,
        dataIndex: "zone",
        key: "zone",
    },
    {
        title: <b>Status</b>,
        dataIndex: "status",
        key: "status",
    },
];
// const data = [{
//     "map_id": 47,
//     "flight_number": "Ek5041758840786",
//     "awb_number": "4794581794",
//     "piece_id": "JJD0030131590000860",
//     "epc": "E28000000000000000519902",
//     "created_time": "2022-08-11T13:54:37.697092",
//     "updated_time": "2022-10-18T17:24:14.861073",
//     "user_id": 1,
//     "floor": "GROUND FLOOR",
//     "zone": "PX-02",
//     "status": "DISPATCH",
//     "store_id": 1
// },];

export default function Inventory_Excel() {
    // const [header, setHeader] = useState([]);
    // const [body, setBody] = useState([]);
    // const [zone, setZone] = useState([]);
    // const [duration, setDuration] = useState([]);
    // const [index, setIndex] = useState([]);
    // const [index_data, setIndexdate] = useState([]);
    // const [location, setLocation] = useState([]);
    const [loading, setLoading] = useState(true);
    const [downloading, setDownloading] = useState(false);

    const navigate = useNavigate();

    async function test () {
        setDownloading(true);

        const workbook = new excelJS.Workbook();
        workbook.creator = "test";
        workbook.lastModifiedBy = "test";
        workbook.created = new Date();
        workbook.modified = new Date();

        let sheet = workbook.addWorksheet("inventory");
        const row = sheet.getRow(1);
        row.eachCell((cell, rowNumber) => {
            sheet.getColumn(rowNumber).alignment = {
                vertical: "middle",
                horizontal: "center",
            };
            sheet.getColumn(rowNumber).font = { size: 14, family: 2 };
        });

        console.log(workbook.xlsx);

        // http://192.168.1.187:5023/inventory/inventory_excel_
        await axios
            .get("inventory/inventory_excel_")
            .then((response) => {
                console.log(response);

                // setHeader(response?.data?.header[0]);
                // setBody(response?.data?.data);

                const header = response?.data?.header[0];
                const body = response?.data?.data;


                sheet.getRow(1).values = header;
                // sheet.getRow(1).fill = {
                //     type: "pattern",
                //     pattern: "solid",

                //     bgColor: { argb: "004e47cc" },
                // };
                // sheet.getRow(1).style="#FAFAD2";
                // console.log(location.unshift("Last Location"))       location.unshift("Last Location");
                let he = [];
                for (let i = 0; i < header.length; i++) {
                    he[i] = { key: header[i], width: 30 };
                    // he.append( { key: header[i], width: 30 });
                }
                sheet.columns = he;
                console.log(body);
                sheet.addRows(response?.data?.data);

                workbook.xlsx.writeBuffer().then(function (buffer) {
                    // done
                    console.log(buffer);

                    const blob = new Blob([buffer], {
                        type: "applicationi/xlsx",
                    });
                    saveAs(blob, "myexcel.xlsx");
                    console.log(buffer);
                });
            })
            .catch((error) => {
                console.log(error);
            });
        setDownloading(false);
    }
    const [dataSource, setDataSource] = useState([]);
    function getData() {
        axios
            .get("/inventory/Inventory_excel")
            .then((response) => {
                console.log(response);
                setDataSource(
                    response?.data?.sort((a, b) => a.map_id - b.map_id)
                );
                if (response.status === 200) {
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Divider orientation="left">Inventory </Divider>
            <div className="FileTable">
                <Button
                    style={{ float: "left", marginBottom: "1%" }}
                    type="primary"
                    icon={<RollbackOutlined />}
                    title="Back"
                    onClick={() => {
                        navigate("/masters/dashboard/dashboard");
                        console.log("heeey");
                    }}
                >
                    Back
                </Button>

                <Button
                    style={{ float: "right", marginBottom: "1%" }}
                    type="primary"
                    icon={<DownloadOutlined />}
                    title="Download"
                    onClick={test}
                    disabled={downloading}
                    loading={downloading}

                >
                    Download
                </Button>
                <Table
                    columns={columns}
                    loading={loading}
                    dataSource={dataSource}
                />
            </div>
        </>
    );
}
