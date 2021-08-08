import React from 'react'
import './styles/services.css'
import { list } from './service-list'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


function Services() {
    let box = useRef()
    let each = useRef()
    let one = useRef()
    useEffect(() => {
        gsap.from(box, {
            scrollTrigger: {
                trigger: box,
                scrub: 1.5,
                toggleActions: "play none reverse none"
            },
            duration: 1,
            y: 200,
            ease: "circ"
        })
        gsap.from(each, {
            scrollTrigger: {
                trigger: each,
                scrub: 1.5,
                toggleActions: "play none reverse none"
            },
            duration:2,
            y: 30,
            opacity:0,
            ease: "circ"
        })
        gsap.from(one,  {
            scrollTrigger: {
                trigger: one,
                scrub: 1.5,
                toggleActions: "play none reverse none"
            },
            duration:2,
            y: -70,
            opacity:0,
            ease: "circ"
        })
    })

    return (
        <div  ref={(el)=>{box=el}}  className="services">
            <h2 ref={(el) => { one = el }}>What we can do for you</h2>
            <p  ref={(el) => { each = el }}>In whatever we do; we make sure we excell.</p>
            <div  className="services__box">
                {list.map((item, key) => {
                    return (
                        <div key={item.id} className="services__each">
                            <img alt="service" src={item.img }></img>
                            <h3 >{ item.header}</h3>
                            <p >{ item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services
