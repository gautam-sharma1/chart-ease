import React from 'react'
import { motion, Variants } from "framer-motion";
const bulletPoints = [
    'Step 1 : Upload data',
    'Step 2 : Select Plot Type',
    'Step 3 : Select data to plot',
    'Step 4 : Visualize results',
    ' Step 5 : Download as PNG '
]

const dataContent = [
    "⬆️", "📝", "👩‍💻", "✅", "🔥"

]


const bulletVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Action() {
    return (
        <div className='flex flex-col bg-secondary mb-40 w-screen'>
            <div className='card place-items-center text-secondary-content'>
                <ul className="steps steps-vertical">
                    {/* <li data-content="⬆️" className="step step-accent-content">Step 1 : Upload data</li>
                    <li data-content="📝" className="step step-accent-content">Step 2 : Select Plot Type</li>
                    <li data-content="👩‍💻" className="step step-accent-content">Step 3 : Select data to plot </li>
                    <li data-content="✅" className="step step-accent-content">Step 4 : Visualize results </li>
                    <li data-content="🔥" className="step step-primary">Step 5 : Download as PNG </li> */}
                    {bulletPoints.map((bullet, index) => (
                        <motion.li
                            key={index}
                            variants={bulletVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            data-content={dataContent[index]} className="step step-accent-content"
                            transition={{ duration: 0.5, delay: index }}
                        >
                            {bullet}
                        </motion.li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
