import React from 'react'
import './styles/footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="newsletter">
                <p>We have a newsletter</p>
                <input type="email"></input>
                <button>Join</button>
            </div>
            <div className="links">
                <div className="company">
                    <h2>HELLO.</h2>
                    <p>Manzini,</p>
                    <p>Swaziland</p>
                    <h4>+445 456 4758</h4>
                </div>
                <div className="menu in">
                    <h4>Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Services</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
            </div>
            <div className="menu out">
                <h4>Links</h4>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Services</li>
                    <li>Testimonials</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
