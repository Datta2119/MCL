import React from 'react'


// Custom component
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductShowCase from './components/Products'
import TeamMCL from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App() {
    return(
        <div>
            <Navbar />
            <br />
            <br />
            <Hero />
            <br />
            <br />
            <ProductShowCase />
            <br />
            <br />
            <TeamMCL />
            <br />
            <br />
            <Contact />
            <br />
            <br />
            <Footer />
        </div>
    )
}