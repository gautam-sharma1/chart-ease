import NavBar from "./NavBar";
import Footer from "./Footer";
import React from 'react'


export default function Layout({ children }) {
    const navItems = ["Home", "Projects", "About", "Contact Me"];
    const routes = ["/", "/projects", "/about", "/contact-me"];

    return (
        <>
            <div className="h-full max-w-screen overflow-auto">
                <NavBar navItems={navItems} routes={routes} />
                <div className="px-20">
                    {children}
                </div>

                <Footer />
                {/*<Footer navItems={navItems} routes={routes} />*/}

            </div>

        </>
    )
}


