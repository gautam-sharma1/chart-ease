import React from 'react';
import { useState } from 'react';



const Data = ({ excelData }) => {


    const [selectedItem, setSelectedItem] = useState(null);

    const handleRightClick = (item) => {
        setSelectedItem(item);
        // Perform your desired events here
    };
    return (
        <div>
            <table className="table-xs">

                <thead>
                    <tr>
                        {Object.keys(excelData[0]).map((key) => (
                            <th className="border px-4 py-2 cursor-pointer" onContextMenu={(e) => {
                                e.preventDefault();
                                handleRightClick(key);
                            }} key={key}>{key}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {excelData.map((individualExcelData, index) => (
                        <tr key={index}>
                            {Object.keys(individualExcelData).map((key) => (
                                <td className="border px-4 py-2 hover:bg-[#917FB3]" key={key}>{individualExcelData[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
};

export default Data;