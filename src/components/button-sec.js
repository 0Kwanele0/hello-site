import React from 'react'
import './styles/button-sec.css'

function ButtonSec() {
    return (
        <button onClick={(e)=> e.preventDefault} type="submit" className="button-sec">Contact us</button> 
    )
}

export default ButtonSec
