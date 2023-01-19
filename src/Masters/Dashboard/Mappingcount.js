import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/plots";
import axios from "axios";
import { Button, Card, Select, Spin } from "antd";
import { DownloadOutlined, RollbackOutlined } from "@ant-design/icons";
import * as excelJS from "exceljs";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

export default function Mappingcount() {
    const [data, setData] = useState([]);
    const [msg, setMsg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [downloading, setDownloading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        fetchData("month");
    }, []);
    const fetchData = (value) => {
        console.log(value);
        if (value === "month") {
            setMsg("Monthly Mapping Count");
        } else {
            setMsg("Weekly Mapping Count");
        }
        axios
            .get(`/inventory/monthly_mapping_count?data=${value}`)
            .then((response) => {
                console.log(response);
                setData(response.data);
                if (response.status === 200) {
                    setLoading(false);
                    setDownloading(false)
                }
            })
            .catch((error) => {
                console.log("fetch data failed", error);
            });
    };
    const config = {
        data,
        xField: "date",
        yField: "count",
        xAxis: {
            label: {
                autoRotate: false,
            },
        },
        slider: {
            start: 0.0,
            end: 1.0,
        },
    };

    async function test() {
        setDownloading(true);

        const workbook = new excelJS.Workbook();
        workbook.creator = "test";
        workbook.lastModifiedBy = "test";
        workbook.created = new Date();
        workbook.modified = new Date();

        let sheet = workbook.addWorksheet(msg);
        const row = sheet.getRow(1);
        row.eachCell((cell, rowNumber) => {
            sheet.getColumn(rowNumber).alignment = {
                vertical: "middle",
                horizontal: "center",
            };
            sheet.getColumn(rowNumber).font = { size: 14, family: 2 };
        });

        console.log(workbook.xlsx);

        sheet.getRow(1).values = ["count","date"];
        // sheet.getRow(1).fill = {
        //     type: "pattern",
        //     pattern: "solid",

        //     bgColor: { argb: "004e47cc" },
        // };
        // sheet.getRow(1).style="#FAFAD2";
        // console.log(location.unshift("Last Location"))       location.unshift("Last Location");
       
        sheet.columns = [{ key: "count", width: 30 },{ key: "date", width: 30 }];
        
        sheet.addRows(data);

        workbook.xlsx.writeBuffer().then(function (buffer) {
            // done
            console.log(buffer);

            const blob = new Blob([buffer], {
                type: "applicationi/xlsx",
            });
            saveAs(blob, "myexcel.xlsx");
            console.log(buffer);
        });
        setDownloading(false);
    }

    const handleChange = (value) => {
        setLoading(true);
        fetchData(value);
    };
    return (
        <div className="Weekly-Monthly-Graph">
            <Card title={msg}>
                <Spin tip="Generating Graph" loading={loading}>
                    <Column {...config} />
                </Spin>
            </Card>
            <Select
                defaultValue="month"
                style={{
                    width: 120,
                    float: "left",
                }}
                onChange={handleChange}
                options={[
                    {
                        value: "month",
                        label: "Montly data",
                    },
                    {
                        value: "week",
                        label: "Weekly data",
                    },
                ]}
            />
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
        </div>
    );
}
