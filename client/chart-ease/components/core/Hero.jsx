import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};

export default function Hero() {
    const dataPoints = [
        { x: 1, y: 10 },
        { x: 2, y: 15 },
        { x: 3, y: 8 },
        { x: 4, y: 12 },
        { x: 5, y: 20 },
        { x: 6, y: 18 },
        { x: 7, y: 14 },
        { x: 8, y: 8 },
        { x: 9, y: 0 },
        { x: 10, y: 5 },
        { x: 0, y: 5 },
        { x: -1, y: 2 },
        { x: -2, y: 10 }
    ]; // Example data points

    // Calculate the maximum x and y values for scaling the plot
    const maxXValue = Math.max(...dataPoints.map((point) => point.x));
    const maxYValue = Math.max(...dataPoints.map((point) => point.y));
    return (
        <div className="hero min-h-screen px-20">



            <div className="hero-content flex-col lg:flex-row-reverse">



                <div>
                    <h1 className="text-5xl font-bold">Hello there 👋🏼</h1>
                    <p className="py-6">Chart Ease is the ultimate solution for seamless data uploading, analysis, and visualization. With our powerful Excel integration feature, you can unlock the full potential of your data and transform it into actionable insights like never before</p>
                    <Link className="btn btn-primary normal-case" href="#upload">Get Started</Link>
                </div>
            </div>



            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <svg
                    viewBox={`0 0 ${maxXValue} ${maxYValue}`}
                    style={{ width: "200%", height: "400px" }}
                >
                    {dataPoints.map((point, index) => (
                        <motion.circle
                            key={index}
                            cx={point.x}
                            cy={maxYValue - point.y}
                            r={0.25}
                            fill="hsl(var(--sf))"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: index * 2, duration: 2, repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            exit="exit"

                        />
                    ))}
                </svg>
            </motion.div>
        </div>
    )
}
