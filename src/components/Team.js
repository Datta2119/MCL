import React from "react";

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
    )
}