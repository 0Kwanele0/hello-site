import React from 'react'
import './styles/nav.css'
import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap/gsap-core'
import ScrollIntoView from 'react-scroll-into-view'

function Nav() {
    let men = useRef()

    useEffect(() => {
        gsap.from(men.current, 2, {
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
                        <ScrollIntoView selector="#serv">
                            <li>Services</li>
                        </ScrollIntoView>
                        <ScrollIntoView selector="#why">
                            <li>Why us</li>
                        </ScrollIntoView>
                        <ScrollIntoView selector="#contact">
                            <li>Contact</li>
                        </ScrollIntoView>
                    </ul>
                    <ScrollIntoView selector="#contact">
                        <button className="btn">message</button>
                    </ScrollIntoView>

                    <img alt="menu" onClick={ chang } src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"/>
                </div>
                {menu && (<div  className="mob-nav">
                    <div className="stable">
                        <h1 className="logo">HELLO.</h1>
                        <img alt="menu" onClick={ chang } src="https://img.icons8.com/ios/50/ffffff/delete-sign--v1.png"/>
                    </div>
                   <ul ref={men} className="list">
                        <ScrollIntoView selector="#serv">
                            <li onClick={ chang }>Services</li>
                        </ScrollIntoView>
                        <ScrollIntoView selector="#why">
                            <li onClick={ chang }>Why us</li>
                        </ScrollIntoView>
                        <ScrollIntoView selector="#contact">
                            <li onClick={ chang }>Contact</li>
                        </ScrollIntoView>
                    </ul>
                    <ScrollIntoView selector="#contact">
                        <button onClick={ chang }>Send a message</button>
                    </ScrollIntoView>
               </div>)}
            </header>
        </div>
    )
}

export default Nav
