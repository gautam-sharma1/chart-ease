import React from 'react'
import Link from 'next/link';


export default function NavBar({ navItems, routes }) {


    return (
        <section className='my-0 py-0'>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl px-20" href="/">ChartEase</Link>
            </div>
        </section>

    )
}


