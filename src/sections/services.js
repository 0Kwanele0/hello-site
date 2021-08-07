import React from 'react'
import './styles/services.css'
import {list} from './service-list'


function Services() {
    return (
        <div className="services">
            <h2>What we can do for you</h2>
            <p>In whatever we do; we make sure we excell.</p>
            <div className="services__box">
                {list.map((item, key) => {
                    return (
                        <div className="services__each">
                            <img src={item.img }></img>
                            <h3>{ item.header}</h3>
                            <p>{ item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services
