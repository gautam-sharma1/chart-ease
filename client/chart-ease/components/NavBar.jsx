import React from 'react'
import Link from 'next/link';


export default function NavBar({ navItems, routes }) {
    console.log(navItems)

    return (
        <section >
            <div className="navbar bg-primary text-primary-content">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl px-20" href="/">ChartEase</Link>
                </div>

                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {navItems.map((item, index) => {
                            return <li key={index}><a href={routes[index]}>{item}</a></li>
                        })}

                    </ul>
                </div>
            </div>
        </section>

    )
}


