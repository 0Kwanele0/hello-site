import React from 'react'
import './styles/testimonials.css'
import ScrollContainer from 'react-indiana-drag-scroll'
import {testies} from './testimony-list'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


function Testimony() {

    let cont = useRef()
    useEffect(() => {
        gsap.from(cont, 2, {
            scrollTrigger: {
                trigger: cont,
                toggleActions: "restart none none none"
            },
            opacity:0,
            ease: "circ"
        })
    })

    return (
        <div ref={(el)=>{cont = el}} className="testimony">
            <h2>Hear our client’s voice</h2>
            <p>We make sure we get our clients satisfied with our services.</p>
            <ScrollContainer className="testimony__cont">
                {testies.map((item, key) => {
                    return (
                        <div key={item.id}className="testimony__box">
                            <div className="top">
                                <div className="img-cont">
                                </div>
                                <h4>{ item.name}</h4>
                            </div>
                            <p className="text">
                                {item.text}
                            </p>
                        </div>
                    )
                })}
            </ScrollContainer>
            
        </div>
    )
}

export default Testimony
