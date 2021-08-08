import React from 'react'
import show from '../images/chatting-using-apps.png'
import ButtonMain from '../components/button-main'
import './styles/showcase.css'
import ButtonSec from '../components/button-sec'
import { useRef, useEffect } from 'react'
import gsap from 'gsap/gsap-core'


function Showcase() {
    let imag = useRef()
    let head = useRef()
    let btn = useRef()
    let text = useRef()

    useEffect(() => {
        gsap.from(imag,2, {
            opacity:0,
            ease: "expo"
        })
        gsap.from(head, 1.5, {
            y: 30,
            opacity: 0,
            ease: "expo"
        })
        gsap.from(btn,2, {
            opacity: 0,
            ease: "expo"
        })
        gsap.from(text,1.2, {
            opacity: 0,
            scale: 1.1,
            ease: "expo"
        })
    }, [])

    return (
        <div className="showcase">
            <img ref={ (el)=> {imag = el}} alt="dislpay" className="showcase__image image-fluid" src={show}></img>
            <div className="right">
                <h1 ref={(le)=> {head = le}} className="showcase__title">Designing websites for the future</h1>
                <p ref={(le)=> {text = le}}className="showcase__description">Give us a chance and we will make your dreams come true we are dedicated. committed and trusted</p>
                <div ref={(e)=>{btn = e}} className="btns">
                    <ButtonMain text="Contuct Us" />
                    <span className="btns__sec">
                        <ButtonSec />
                    </span>
                </div>
            </div>
        </div>
           
    )
}

export default Showcase
