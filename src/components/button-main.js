import React from 'react'
import './styles/button-main.css'

function ButtonMain(props) {
    return (
        <button onClick={(e)=> e.preventDefault()} type="submit" className="button-main">{ props.text }</button>
    )
}

export default ButtonMain
