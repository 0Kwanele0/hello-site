import React from 'react'
import './styles/why.css'
import coins from '../images/online-payment.png'
import { useRef, useEffect } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


function Why() {
    let list = useRef()

    useEffect(() => {
        const element = list.current
        const list1 = element.querySelector(".big-list")
        const head = element.querySelector(".myhead")
        const lili = element.querySelector(".small-list")
        gsap.from(head, 1.8, {
            scrollTrigger: {
                trigger: head,
                toggleActions: "restart none none none"
            },
            y: 100,
            ease: "power4"
        })
        gsap.from(list1, {
            scrollTrigger: {
                trigger: list1,
                toggleActions: "restart none none none"
            },
            duration:3,
            y: 100,
            ease: "power4"
        })
        gsap.from(lili, {
            scrollTrigger: {
                trigger: lili,
                toggleActions: "restart none none none"
            },
            duration:3,
            y: 100,
            ease: "power4"
        })
        
    })
    return (
        <div  ref={list}  className="why">
            <div className="head">
                <h2 className="myhead" >Why you would love to work with us.</h2>
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
