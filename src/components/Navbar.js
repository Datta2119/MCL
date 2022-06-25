import React from "react";

// Import CSS
import '../style/main.css'

// Import Assets
import MagnusLogo from '../images/mcl-logo.png'

export default function Navbar(){
    return (
        <nav>
            <section className="brand-logo">
                <img className="nav--brand-logo" src={MagnusLogo} alt='' />
            </section>

            <section className="nav-lists">
                <ul className="nav--items">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    
                    <li>
                        <a href="#about">About</a>
                    </li>
                    
                    <li>
                        <a href="#products">Products</a>
                    </li>
                    
                    <li>
                        <a href="#testimonals">Testimonials</a>
                    </li>
                    
                    <li>
                        <a href="#achievements">Achievements</a>
                    </li>
                    
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </section>
        </nav>
    )
}


