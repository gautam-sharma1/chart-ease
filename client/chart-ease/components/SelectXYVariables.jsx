import React, { useEffect } from 'react'
import { useState } from 'react';
import ChartXYVariables from './ChartXYVariables';

const getColumnNames = (excelData) => {
    return Object.keys(excelData[0]);
}


export default function SelectXYVariables({ type_of_chart, excelData }) {
    const [columnName, setColumnNames] = useState([]);
    const [xData, setXData] = useState(null);
    const [yData, setYData] = useState(null);
    const [isDataAvailable, setIsDataAvailable] = useState(false);
    const [columnNames, setColumnName] = useState(null);

    const handleChange = (e) => {

        if (e.target.name === "x1") {
            setXData(() => e.target.value);
        }
        else if (e.target.name === "y1") {
            setYData(() => e.target.value);
        }

        if (xData !== null && yData !== null) {
            setIsDataAvailable(true);
        }

    }


    useEffect(() => {
        setColumnNames(getColumnNames(excelData));
        if (xData !== null && yData !== null && !isDataAvailable) {
            setIsDataAvailable(true);
            setColumnName([xData, yData]);
        }
    }, [isDataAvailable])

    return (
        <><div>Select Variables</div>
            <div>

                X1
                <div className="join mx-20">
                    {columnName.map((col_name, idx) => {
                        return <input key={idx} className="join-item btn" type="radio" name="x1" aria-label={col_name} value={col_name} onChange={handleChange} />
                    })}
                </div>
            </div>
            <div>
                Y1
                <div className="join mx-20">
                    {columnName.map((col_name, idx) => {
                        return <input key={idx} className="join-item btn" type="radio" name="y1" aria-label={col_name} value={col_name} onChange={handleChange} />
                    })}
                </div>

            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {
                xData && yData ? (

                    < ChartXYVariables excelData={excelData} type_of_chart={type_of_chart} columnNames={columnNames} xData={xData} yData={yData} />) : (<> </>)
            }
        </>
    )
}
