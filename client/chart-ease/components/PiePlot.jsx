import React, { useRef, useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
const colors = ["#8A2BE2", "#6495ED", "#B8860B", "#FF1493", "#008000"];

export default function PiePlot({ data, chartRef }) {
    useEffect(() => {
    }, [data])


    return (
        <div flex width="100%" height="100%" ref={chartRef}>
            <PieChart width={800}
                height={800}>
                <Pie
                    dataKey="y1"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>



        </div>

    )
}
