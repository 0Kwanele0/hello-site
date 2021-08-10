import React from 'react'
import show from '../images/chatting-using-apps.png'
import ButtonMain from '../components/button-main'
import './styles/showcase.css'
import ButtonSec from '../components/button-sec'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollIntoView from 'react-scroll-into-view'



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
        gsap.from(head, {
            scrollTrigger: {
                trigger: head,
                toggleActions: "play play restart play"
            },
            duration:2,
            y: 170,
            opacity: 0,
            ease: "expo"
        })
        gsap.from(btn,2, {
            opacity: 0,
            ease: "expo"
        })
        gsap.from(text,{
            scrollTrigger: {
                trigger: text,
                toggleActions: "play play restart play"
            },
            duration: 2,
            opacity: 0,
            scale: 2,
            ease: "expo"
        })
    }, [])

    return (
        <div className="showcase" id="home">
            <img ref={ (el)=> {imag = el}} alt="dislpay" className="showcase__image image-fluid" src={show}></img>
            <div className="right">
                <h1 ref={(le)=> {head = le}} className="showcase__title">Designing websites for the future</h1>
                <p ref={(le)=> {text = le}}className="showcase__description">Give us a chance and we will make your dreams come true we are dedicated. committed and trusted</p>
                <div ref={(e)=>{btn = e}} className="btns" >
                    <ScrollIntoView style={{width: "fit-content", margin:"0"}} selector="#contact">
                        <ButtonMain text="Contuct Us" />
                    </ScrollIntoView>
                    <span className="btns__sec">
                    <ScrollIntoView selector="#serv" style={{width: "fit-content", margin:"0"}}>
                        <ButtonSec text="What we do"/>
                    </ScrollIntoView>
                    </span>
                </div>
            </div>
        </div>
           
    )
}

export default Showcase
