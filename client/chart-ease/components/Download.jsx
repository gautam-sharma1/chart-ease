import React from 'react'

export default function Download({ handleDownload }) {
    return (
        <button className="btn btn-outline btn-neutral" onClick={handleDownload}>
            Download Chart as PNG
        </button>
    )
}
