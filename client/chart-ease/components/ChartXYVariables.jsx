import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { saveSvgAsPng } from 'save-svg-as-png';
import svgCrowbar from 'svg-crowbar';
import ScatterPlot from './ScatterPlot';
import PiePlot from './PiePlot';
import Download from './Download';
export default function ChartXYVariables({ excelData, columnNames, type_of_chart, xData, yData }) {
    const [data, setData] = useState([])

    // Used to download PNG
    const chartRef = useRef(null);

    // Supported Chart Types
    const SUPPORTED_CHART_TYPES = {
        "Scatter Chart": <ScatterPlot data={data} chartRef={chartRef} />,
        "Pie Chart": <PiePlot data={data} chartRef={chartRef} />,
    };

    /*
    * Function to Download PNG files
    */
    const handleDownload = () => {
        const chartNode = chartRef.current;

        // Convert the Recharts component to SVG
        const svgElement = chartNode.getElementsByTagName('svg')[0];

        // Save the SVG as a PNG file
        saveSvgAsPng(svgElement, 'chart.png', {}, () => {
            // Clean up temporary elements added by svg-crowbar
            svgCrowbar.cleanup();
        });
    };

    // Prepares data and dispatches to corresponding plots
    const prepareData = (excelData, xData, yData) => {
        // xData and yData are column names
        const tmpObjectArray = [];
        for (let idx = 0; idx < excelData.length; ++idx) {
            let currRow = excelData[idx];
            const tmpData = { x1: 0, y1: 0, name: xData };
            const keys = Object.keys(currRow);
            if (currRow[xData]) {
                tmpData.x1 = currRow[xData];
            }
            if (currRow[yData]) {
                tmpData.y1 = currRow[yData];
            }

            tmpObjectArray.push(tmpData);
        }
        return tmpObjectArray;
    }

    useEffect(() => {
        setData(prepareData(excelData, xData, yData));
    }, [xData, yData])

    return (
        <>
            <div>Chart</div>
            {data ?
                (
                    <>
                        {SUPPORTED_CHART_TYPES[type_of_chart]}

                        {/* Download button is a seperate components */}
                        <Download handleDownload={handleDownload} />
                    </>
                )
                : (<> </>)}
        </>


    )
}
