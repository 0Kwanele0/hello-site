
import React from 'react'
import './styles/why.css'
import coins from '../images/online-payment.png'


function Why() {
    return (
        <div className="why">
            <div class="head">
                <h2>Why you would love to work with us.</h2>
                <ul className="big-list">
                    <li><div className="span"></div>We focus on value</li>
                    <li><div className="span"></div>We make sure we do what you desire</li>
                    <li><div className="span"></div>Our designs a slick minimal and classy</li>
                    <li><div className="span"></div>We meet all your demands</li>
                </ul>
            </div>
            <img src={coins}></img>
            <ul className="small-list">
                <li><div className="span"></div>We focus on value</li>
                <li><div className="span"></div>We make sure we do what you desire</li>
                <li><div className="span"></div>Our designs a slick minimal and classy</li>
                <li><div className="span"></div>We meet all your demands</li>
            </ul>
        </div>
    )
}

export default Why
