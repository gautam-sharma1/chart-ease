import React, { useRef, useEffect, useState } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const colors = ["#8A2BE2", "#6495ED", "#B8860B", "#FF1493", "#008000"];

export default function LinePlot({ data, chartRef }) {

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

            <LineChart
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
                        return <Line key={idx} type="monotone" dataKey={y} stroke={colors[idx]} activeDot={{ r: 8 }} />
                    })
                }


            </LineChart>

        </div>

    )
}
