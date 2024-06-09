import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <div id="contact">
            <div className="details">
                <div className="phone">
                    <i className="fa-solid fa-phone"></i>
                    <span>
                        <h5>Phone Number</h5>
                        <p>+ 0123 4567 8999</p>
                    </span>
                </div>
                <div className="email">
                    <i className="fa-solid fa-envelope"></i>
                    <span>
                        <h5>Email</h5>
                        <p>info@example.com</p>
                    </span>
                </div>
                <div className="fax">
                    <i className="fa-solid fa-fax"></i>
                    <span>
                        <h5>Fax Address</h5>
                        <p>+ 0123 4567 8999</p>
                    </span>
                </div>
                <div className="location">
                    <i className="fa-solid fa-map"></i>
                    <span>
                        <h5>Location</h5>
                        <p>Tirana, Albania</p>
                    </span>
                </div>
            </div>
            <div className="form">
                <h3>Send a message</h3>
                <form>
                    <div>
                        <input type="text" id="first_name" placeholder="First Name" name="first_name" required /><br /><br />
                    </div>
                    <div>
                        <input type="text" id="last_name" placeholder="Last Name" name="last_name" required /><br /><br />
                    </div>
                    <div>
                        <input type="text" placeholder="Email" id="email" name="email" required /><br /><br />
                    </div>
                    <div>
                        <textarea id="message" placeholder="Message" name="message" rows="14" cols="50" /><br /><br />
                    </div>
                    <div>
                        <input id="submit" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
