import React from 'react'
import './styles/services.css'
import web from '../images/web-development.png'


function Services() {
    return (
        <div className="services">
            <h2>What we can do for you</h2>
            <p>give us a chance and we will make your dreams come true we are dedicated. committed and trusted</p>
            <div className="services__box">
                <div className="services__each">
                    <img src={ web }></img>
                    <h3>Web Development</h3>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece</p>
                </div>
                <div className="services__each">
                    <img src={ web }></img>
                    <h3>Web Development</h3>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece</p>
                </div>
                <div className="services__each">
                    <img src={ web }></img>
                    <h3>Web Development</h3>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece</p>
                </div>

            </div>
        </div>
    )
}

export default Services
