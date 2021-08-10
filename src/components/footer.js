import React from 'react'
import './styles/footer.css'
import ScrollIntoView from 'react-scroll-into-view'




function Footer() {
 
    const chingo = () => {
        return true
    }
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
                    <ScrollIntoView selector="#home">
                        <li onClick={ chingo }>Home</li>
                    </ScrollIntoView>
                    <ScrollIntoView selector="#why">
                        <li onClick={ chingo }>Why us</li>
                    </ScrollIntoView>
                    <ScrollIntoView selector="#serv">
                        <li onClick={ chingo }>Services</li>
                    </ScrollIntoView>
                    <ScrollIntoView selector="#contact">
                        <li onClick={ chingo }>Contact</li>
                    </ScrollIntoView>
                    <ScrollIntoView selector="#test">
                        <li onClick={ chingo }>Testimonial</li>
                    </ScrollIntoView>
                    </ul>
                </div>
            </div>
            <div className="menu out">
                <h4>Links</h4>
                <ul>
                <ScrollIntoView selector="#home">
                    <li onClick={ chingo }>Home</li>
                </ScrollIntoView>
                <ScrollIntoView selector="#why">
                    <li onClick={ chingo }>Why us</li>
                </ScrollIntoView>
                <ScrollIntoView selector="#serv">
                    <li onClick={ chingo }>Services</li>
                </ScrollIntoView>
                <ScrollIntoView selector="#contact">
                    <li onClick={ chingo }>Contact</li>
                </ScrollIntoView>
                <ScrollIntoView selector="#test">
                    <li onClick={ chingo }>Testimonial</li>
                </ScrollIntoView>
                </ul>
            </div>
        </div>
    )
}

export default Footer
