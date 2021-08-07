import React from 'react'
import show from '../images/chatting-using-apps.png'
import ButtonMain from '../components/button-main'
import './styles/showcase.css'

function Showcase() {
    return (
        <div className="container">
            <div className="row">
                <div className="showcase">
                    <div className="col">
                        <img alt="dislpay" className="showcase__image image-fluid" src={show}></img>
                    </div>
                    <div className="col">
                        <div className="right">
                            <h1 className="showcase__title">Designing websites for the future</h1>
                            <p className="showcase__description">give us a chance and we will make your dreams come true we are dedicated. committed and trusted</p>
                            <ButtonMain text="Contuct Us"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase
