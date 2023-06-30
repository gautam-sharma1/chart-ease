import React from 'react'

export default function Action() {
    return (
        <div className='flex flex-col bg-secondary mb-40 w-screen'>
            <div className='card place-items-center text-secondary-content'>
                <ul className="steps steps-vertical">
                    <li data-content="⬆️" className="step step-primary">Step 1 : Upload data</li>
                    <li data-content="📝" className="step step-primary">Step 2 : Select Plot Type</li>
                    <li data-content="👩‍💻" className="step step-primary">Step 3 : Select data to plot </li>
                    <li data-content="✅" className="step step-primary">Step 4 : Visualize results </li>
                    <li data-content="🔥" className="step step-primary">Step 5 : Download as PNG </li>
                </ul>
            </div>

        </div>
    )
}
