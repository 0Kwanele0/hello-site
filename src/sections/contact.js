import React from 'react'
import ButtonMain from '../components/button-main'
import theImg from '../images/newsletter.png'
import './styles/contact.css'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


function Contact() {

    let contain = useRef()

    useEffect(() => {
        gsap.from(contain, 1.4, {
            scrollTrigger: {
                trigger: contain,
                toggleActions: "restart none reverse none"
            },
            scale: 0.8,
            opacity: 0,
            ease: "power4"
        })
    })

    return (
        <div ref={(hi)=>{contain = hi}} id="contact" className="contact">
            <div className="head">
                <h2>Contact Us</h2>
                <div className="form one">
                    <form>
                        <p>Name</p>
                        <input required="true" minLength="5" type="text" name="name"></input>
                        <p>Email</p>
                        <input required="true" type="email" name="email"></input>
                        <p>Message</p>
                        <textarea rows="4" required="true" type="text" name="message"></textarea>
                        <div className="btn" type="submit" onClick={(e)=> e.preventDefault}>
                            <ButtonMain text="Message" />
                        </div>
                    </form>
                </div>
            </div>
            <img alt="newsletter" src={ theImg}></img>
            <div className="form two">
                <form>
                    <p>Name</p>
                    <input required="true" minLength="5" type="text" name="name"></input>
                    <p>Email</p>
                    <input required="true" type="email" name="email"></input>
                    <p>Message</p>
                    <textarea required="true" minLength="10" rows="4"  type="text" name="message"></textarea>
                    <div className="btn" type="submit" onClick={(e)=> e.preventDefault}>
                        <ButtonMain text="Message" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
