import React from 'react'
import './styles/nav.css'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap/gsap-core'
import { TweenLite } from 'gsap/gsap-core'

function Nav() {

    let men = useRef()

    useEffect(() => {
        TweenLite.from(men.current, 2, {
            opacity: 0,
            y: -50,
            ease:"expo"
        })
    })

    const [menu, toggleMenu] = useState(false)
    const chang = () => {
        toggleMenu(!menu)
    }

    return (
        <div className="nav-container">
            <header>
                <div className="stable">
                    <h1 className="logo">HELLO.</h1>
                    <ul className="list">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Why us</li>
                        <li>Contact</li>
                    </ul>
                    <button className="btn">message</button>
                    <img alt="menu" onClick={ chang } src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"/>
                </div>
                {menu && (<div  className="mob-nav">
                    <div className="stable">
                        <h1 className="logo">HELLO.</h1>
                        <img alt="menu" onClick={ chang } src="https://img.icons8.com/ios/50/ffffff/delete-sign--v1.png"/>
                    </div>
                   <ul ref={men} className="list">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Why us</li>
                        <li>Contact</li>
                    </ul>
                    <button>Send a message</button>
               </div>)}
            </header>
        </div>
    )
}

export default Nav
