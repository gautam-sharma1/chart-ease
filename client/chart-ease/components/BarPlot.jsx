import React, { useRef, useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const colors = ["#8A2BE2", "#6495ED", "#B8860B", "#FF1493", "#008000"];

export default function BarPlot({ data, chartRef }) {
    console.log(data);
    const [YData, setYData] = useState([]);
    useEffect(() => {
        if (data.length) {
            const keys = Object.keys(data[0]);
            const filteredKeys = keys.filter((key) => key[0] == "y");
            setYData(filteredKeys);
        }


    }, [data])


    return (
        <div flex width="100%" height="100%" ref={chartRef}>

            <BarChart
                width={800}
                height={800}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}

            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x1" />
                <YAxis />
                <Tooltip />
                <Legend />
                {
                    YData.map((y, idx) => {
                        return <Bar key={idx} dataKey={y} fill={colors[idx]} />
                    })
                }


            </BarChart>

        </div>

    )
}
