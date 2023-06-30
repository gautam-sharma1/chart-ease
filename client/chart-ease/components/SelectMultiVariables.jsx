import React, { useEffect } from 'react'
import { useState } from 'react';
import ChartMultiVariables from './ChartMultiVariables';

const getColumnNames = (excelData) => {
    return Object.keys(excelData[0]);
}

const SUPPORTED_VARIABLES = { "Line Chart": ["x", "y"] }

export default function SelectMultiVariables({ type_of_chart, excelData }) {
    const [columnName, setColumnNames] = useState([]);
    const [xData, setXData] = useState(null);
    const [yData, setYData] = useState(null);
    const [isDataAvailable, setIsDataAvailable] = useState(false);
    const [columnNames, setColumnName] = useState(null);
    const [currentIdx, setCurrentIdx] = useState(2);
    const [additionalY, setAdditionalY] = useState([]);
    const [additionalYData, setAdditionalYData] = useState({});
    const [dataChanged, setDataChanged] = useState(false);

    const handleChange = (e) => {

        if (e.target.name === "x1") {
            setXData(() => e.target.value);
        }
        else if (e.target.name === "y1") {
            setYData(() => e.target.value);
        }
        else {

            setAdditionalYData(prevState => ({
                ...prevState, [e.target.name]: e.target.value
            }))
        }

        if (xData !== null && yData !== null) {
            setIsDataAvailable(true);
        }
        setDataChanged(!dataChanged);
    }

    const addData = (e) => {
        const newData = additionalY;
        newData.push("Y" + currentIdx);
        setAdditionalY(newData);
        setCurrentIdx(currentIdx + 1);
    }
    // const removeData = (e) => {
    //     const prevState = additionalYData;
    //     let prevY = additionalY;
    //     delete prevState[e.target.id];
    //     prevY = additionalY.filter(function (item) {
    //         return item !== e.target.id
    //     })
    //     console.log("additonal", prevY)
    //     setAdditionalYData(prevState);
    //     setAdditionalY(prevY);
    // }

    useEffect(() => {
        setColumnNames(getColumnNames(excelData));
        if (xData !== null && yData !== null && !isDataAvailable) {
            setIsDataAvailable(true);
            setColumnName([xData, yData]);
        }
    }, [isDataAvailable, additionalYData, additionalY])

    return (
        <><div>Select Variables</div>
            <div className='my-10 flex flex-row items-center'>

                X1


                <div className="join mx-20">
                    {columnName.map((col_name, idx) => {
                        return <input key={idx} className="join-item btn" type="radio" name="x1" aria-label={col_name} value={col_name} onChange={handleChange} />
                    })}
                </div>
            </div>
            <div className='my-10 flex flex-row items-center'>
                Y1
                <div className="join mx-20">
                    {columnName.map((col_name, idx) => {
                        return <input key={idx} className="join-item btn" type="radio" name="y1" aria-label={col_name} value={col_name} onChange={handleChange} />
                    })}
                </div>

            </div>
            {
                additionalY.map((yData, idx) => {
                    return (<div key={idx}>
                        {yData}
                        <div className="join mx-20">
                            {columnName.map((col_name, jdx) => {
                                return (
                                    <>
                                        <input key={jdx} className="join-item btn" type="radio" name={yData} aria-label={col_name} value={col_name} onChange={handleChange} />

                                    </>
                                )
                            })}
                        </div>
                        {/* <button type="submit" className="btn btn-square btn-outline" onClick={removeData} id={yData}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" value={yData}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button> */}
                    </div>)
                })
            }
            <br></br>
            <br></br>
            <br></br>
            {
                <button type="submit" className='btn btn-outline btn-secondary' onClick={addData} disabled={currentIdx > 5} >Add additional Y parameters</button>
            }

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {
                xData && yData ? (

                    < ChartMultiVariables excelData={excelData} type_of_chart={type_of_chart} columnNames={columnNames} xData={xData} yData={yData} additionalY={additionalY} additionalYData={additionalYData} />) : (<> </>)
            }
        </>
    )
}
