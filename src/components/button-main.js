import React from 'react'
import './styles/button-main.css'

function ButtonMain(props) {
    return (
        <div>
            <button className="button-main">{ props.text }</button>
        </div>
    )
}

export default ButtonMain
