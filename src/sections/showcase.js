import React from 'react'
import show from '../images/chatting-using-apps.png'
import ButtonMain from '../components/button-main'
import './styles/showcase.css'
import ButtonSec from '../components/button-sec'


function Showcase() {
    
    return (
        <div className="showcase">
            <img alt="dislpay" className="showcase__image image-fluid" src={show}></img>
            <div className="right">
                <h1 className="showcase__title">Designing websites for the future</h1>
                <p className="showcase__description">Give us a chance and we will make your dreams come true we are dedicated. committed and trusted</p>
                <div class="btns">
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
