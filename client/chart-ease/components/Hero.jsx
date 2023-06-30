import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Hero() {
    return (
        <div className="hero min-h-screen px-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <Image
                    className="rounded-xlg shadow-2xl"
                    src="/images/chartease.gif"
                    loading="lazy"
                    width={700}
                    height={700}
                    alt="Chart Ease in action"
                    
                /> */}

                <div>
                    <h1 className="text-5xl font-bold">Hello there 👋🏼</h1>
                    <p className="py-6">Chart Ease is the ultimate solution for seamless data uploading, analysis, and visualization. With our powerful Excel integration feature, you can unlock the full potential of your data and transform it into actionable insights like never before</p>
                    <Link className="btn btn-primary normal-case" href="#upload">Get Started</Link>
                </div>
            </div>

        </div>
    )
}
