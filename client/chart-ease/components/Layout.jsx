import NavBar from "./NavBar";
import Footer from "./Footer";
import React from 'react'


export default function Layout({ children }) {
    const navItems = ["About us", "Contact"];
    const routes = ["/about", "/contact"];

    return (
        <>
            <div className="h-full max-w-screen overflow-auto">
                <NavBar navItems={navItems} routes={routes} />
                <div>
                    {children}
                </div>

                <Footer navItems={navItems} routes={routes} />
                {/*<Footer navItems={navItems} routes={routes} />*/}

            </div>

        </>
    )
}


