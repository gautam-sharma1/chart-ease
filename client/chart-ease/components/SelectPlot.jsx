import React from 'react'
import { useState } from 'react';
import SelectMultiVariables from './SelectMultiVariables';
import SelectXYVariables from './SelectXYVariables';
const PLOT_TYPES = ["Line Chart", "Bar Chart", "Scatter Chart", "Pie Chart"]

export default function SelectData({ excelData }) {
    // Supported Chart Types
    const [p_type, set_plot_type] = useState(PLOT_TYPES[0]);
    const handleChange = (e) => {
        const plot_selected = e.target.value;
        set_plot_type(plot_selected);
    }

    const SUPPORTED_VARIABLE_TYPES = {
        "Line Chart": <SelectMultiVariables type_of_chart={p_type} excelData={excelData} />,
        "Bar Chart": <SelectMultiVariables type_of_chart={p_type} excelData={excelData} />,
        "Scatter Chart": <SelectXYVariables type_of_chart={p_type} excelData={excelData} />,
        "Pie Chart": <SelectXYVariables type_of_chart={p_type} excelData={excelData} />,
    };


    return (
        <>
            <div className="flex flex-row justify-start">


                <div className="py-3">Select Type of Plot</div>
                <div className="join mx-20">
                    {PLOT_TYPES.map((plot_type, idx) => {
                        return <input key={idx} className="join-item btn" type="radio" name="options" aria-label={plot_type} value={plot_type} onChange={handleChange} />
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
                SUPPORTED_VARIABLE_TYPES[p_type]
            }

        </>
    )
}
