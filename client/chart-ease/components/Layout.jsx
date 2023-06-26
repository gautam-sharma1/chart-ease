import NavBar from "./NavBar";
import Footer from "./Footer";
import React from 'react'


export default function Layout({ children }) {
    const navItems = ["Home", "Projects", "About", "Contact Me"];
    const routes = ["/", "/projects", "/about", "/contact-me"];

    return (
        <>
            <div className="mb-10 h-full max-w-screen overflow-auto font-lora">
                <NavBar navItems={navItems} routes={routes} />
                <div className="mt-20 px-20">
                    {children}
                </div>

                <Footer />
                {/*<Footer navItems={navItems} routes={routes} />*/}

            </div>

        </>
    )
}


