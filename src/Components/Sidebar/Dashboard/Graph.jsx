import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Graph = () => {
  const data = [
    { name: "Page A", uv: 100, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 200, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 250, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 250, pv: 2400, amt: 2400 },
    { name: "Page A", uv: 300, pv: 2400, amt: 2400 }
  ];

  return (
    <div className="bg-red-500">
      <LineChart  data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Graph;
