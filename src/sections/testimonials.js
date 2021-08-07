import React from 'react'
import './styles/testimonials.css'
import ScrollContainer from 'react-indiana-drag-scroll'
import {testies} from './testimony-list'

function Testimony() {
    return (
        <div className="testimony">
            <h2>Hear our client’s voice</h2>
            <p>We make sure we get our clients satisfied with our services.</p>
            <ScrollContainer className="testimony__cont">
                {testies.map((item, key) => {
                    return (
                        <div className="testimony__box">
                            <div class="top">
                                <div className="img-cont">
                                    <img ></img>
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
