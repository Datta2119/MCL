import React from "react";

<<<<<<< HEAD
// importing assets

export default function MagnusTeam(){
    return (
        <div className="card">
            <img src={KatieZaferes} alt='' className="card--image"/>
            <div className="card--stats">
                <img src={Star} className='stats--star' />
                <span className="stats--value">5.0</span>
                <span className="gray stats--view">(6) . </span>
                <span className="gray stats--region">USA</span>
            </div>
            <p className="card--title">Life lessons with Katie Zaferes</p>
            <p className="card--price">
                <span className="bold card--price">From $136</span> / person
            </p>
        </div>
=======
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
>>>>>>> mcl-team
    )
}