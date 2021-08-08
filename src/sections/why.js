import React from 'react'
import './styles/why.css'
import coins from '../images/online-payment.png'
import { useRef, useEffect } from 'react'
import gsap from 'gsap/gsap-core'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


function Why() {
    let head = useRef()
    
    useEffect(() => {

        gsap.from(head, 1.8, {
            scrollTrigger: {
                trigger: head,
                toggleActions: "restart none none none"
            },
            y: 100,
            ease: "power4"
        })
        
    })
    return (
        <div className="why">
            <div className="head">
                <h2 ref={(el)=>{head = el}}>Why you would love to work with us.</h2>
                <ul className="big-list">
                    <li><div className="span"></div>We focus on value</li>
                    <li><div className="span"></div>We make sure we do what you desire</li>
                    <li><div className="span"></div>Our designs a slick minimal and classy</li>
                    <li><div className="span"></div>We meet all your demands</li>
                </ul>
            </div>
            <img alt="coins" src={coins}></img>
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
