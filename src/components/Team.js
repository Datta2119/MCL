import React from "react";

// Import CSS
import '../style/main.css'

// Import Assets
import ArmanAhemdKhan from '../images/arman-bhai.jpg'
import Bishway from '../images/bishway.jpeg'

export default function MagnusTeam(){
    return (
        <div>
            <div className="card">
                <section className="card--employee-image">
                    <img src= {ArmanAhemdKhan} alt='' className="card--image"/>
                </section>

                <section className="card--employee-name">
                    <p className="employee-name">Arman Ahmed Khan</p>
                </section>
                
                <section className="card--employee-designation">
                    <p className="employee-designation">Managing Director</p>
                </section>
            </div>
        </div> 
    )
}