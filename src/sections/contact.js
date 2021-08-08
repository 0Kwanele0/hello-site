import React from 'react'
import ButtonMain from '../components/button-main'
import theImg from '../images/newsletter.png'
import './styles/contact.css'


function Contact() {
    return (
        <div className="contact">
            <div class="head">
                <h2>Contact Us</h2>
                <div class="form one">
                    <form>
                        <p>Name</p>
                        <input type="text" name="name"></input>
                        <p>Email</p>
                        <input type="email" name="email"></input>
                        <p>Message</p>
                        <textarea rows="4"  type="text" name="message"></textarea>
                    </form>
                    <div class="btn">
                        <ButtonMain text="Message" />
                    </div>
                </div>
            </div>
            <img src={ theImg}></img>
            <div class="form two">
                <form>
                    <p>Name</p>
                    <input type="text" name="name"></input>
                    <p>Email</p>
                    <input type="email" name="email"></input>
                    <p>Message</p>
                    <textarea rows="4"  type="text" name="message"></textarea>
                </form>
                <div class="btn">
                    <ButtonMain text="Message" />
                </div>
            </div>
        </div>
    )
}

export default Contact
