import React from 'react'
import './styles/button-sec.css'

function ButtonSec(props) {
    return (
        <button onClick={(e) => e.preventDefault} type="submit" className="button-sec">{ props.text}</button>
    )
}

export default ButtonSec
