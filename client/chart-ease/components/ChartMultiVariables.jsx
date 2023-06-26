import React from 'react'
import { useState, useEffect, useRef } from 'react'
import LinePlot from './LinePlot';
import BarPlot from './BarPlot';
import Download from './Download';
import { saveSvgAsPng } from 'save-svg-as-png';
import svgCrowbar from 'svg-crowbar';
export default function ChartMultiVariables({ excelData, columnNames, type_of_chart, xData, yData, additionalY, additionalYData }) {
    const [data, setData] = useState([])

    // Used to download PNG
    const chartRef = useRef(null);

    // Supported Chart Types
    const SUPPORTED_CHART_TYPES = {
        "Line Chart": <LinePlot data={data} chartRef={chartRef} />,
        "Bar Chart": <BarPlot data={data} chartRef={chartRef} />
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
            if (additionalYData) {
                for (let jdx = 0; jdx < additionalY.length; ++jdx) {
                    tmpData[additionalY[jdx].toLowerCase()] = currRow[additionalYData[additionalY[jdx]]];
                }
            }

            tmpObjectArray.push(tmpData);
        }
        return tmpObjectArray;
    }

    useEffect(() => {
        setData(prepareData(excelData, xData, yData));
    }, [xData, yData, additionalYData])

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
