import React from 'react'
import Data from "./Data"
import SelectPlot from './SelectPlot';
import { useState } from "react";
import * as XLSX from 'xlsx';

import Link from 'next/link';



export default function Upload() {

    // onchange states
    const [excelFile, setExcelFile] = useState(null);
    const [typeError, setTypeError] = useState(null);
    const [uploading, setUploading] = useState(false);
    // submit state
    const [excelData, setExcelData] = useState(null);

    // onchange event
    const handleFile = (e) => {
        let fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileTypes.includes(selectedFile.type)) {

                setUploading(false);
                setTypeError(null);
                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e) => {
                    setExcelFile(e.target.result);
                    setUploading(false);
                }

            }
            else {
                setTypeError('Please select only excel file types');
                setExcelFile(null);
            }
        }
        else {
            console.log('Please select your file');
        }
    }

    // submit event
    const handleFileSubmit = (e) => {
        e.preventDefault();

        if (excelFile !== null) {

            const workbook = XLSX.read(excelFile, { type: 'buffer' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(data)
            //setExcelData(data.slice(0, 10));

        }


    }

    return (
        <section id="upload" className='px-20'>
            <div className="flex-col justify-between">
                <div className="text-2xl">
                    Upload Data
                </div>
                <br>
                </br>
                <br>
                </br>
                {/* form */}
                <form className=" form-group custom-form" onSubmit={handleFileSubmit}>
                    <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs form-control" required onChange={handleFile} />
                    <br />
                    <br />
                    <button type="submit" className="btn btn-success btn-md">UPLOAD</button>
                    <br />
                    <br />
                    {typeError && (
                        <div className="text-red-500" role="alert">{typeError}</div>
                    )}
                </form>
                {/* uploading */}
                {
                    uploading ? (<>
                        <span className="loading loading-spinner loading-md"></span>
                    </>) : <></>
                }
                {/* view data */}
                <div>
                    {excelData ? (
                        <>
                            <Data excelData={excelData} />
                            <br></br>
                            <SelectPlot excelData={excelData} />
                        </>
                    ) : (
                        <div>No File is uploaded yet!</div>
                    )}
                </div>
            </div>
        </section>
    )
}


