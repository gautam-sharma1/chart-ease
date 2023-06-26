import React, { useRef, useEffect, useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const colors = ["#8A2BE2", "#6495ED", "#B8860B", "#FF1493", "#008000"];

export default function ScatterPlot({ data, chartRef }) {
    useEffect(() => {
        console.log(data)
    }, [data])


    return (
        <div flex width="100%" height="100%" ref={chartRef}>

            <ScatterChart
                width={800}
                height={800}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid />
                <XAxis type="number" dataKey="x1" name="" unit="" />
                <YAxis type="number" dataKey="y1" name="" unit="" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="A school" data={data} fill="#8884d8" />
            </ScatterChart>

        </div>

    )
}
