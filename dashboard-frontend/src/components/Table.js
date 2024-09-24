import React from "react";
import { Table } from "antd";


const MyTable = ({ data, columns }) => {
  console.log(data);
  return (
    // <div>table</div>
    <Table dataSource={data} columns={columns} className="max-w-full p-4" />
  );
};

export default MyTable;
