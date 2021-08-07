import React from 'react'
import './styles/button-main.css'

function ButtonMain(props) {
    return (
        <button className="button-main">{ props.text }</button>
    )
}

export default ButtonMain
