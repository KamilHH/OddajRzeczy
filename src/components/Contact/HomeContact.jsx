import React from 'react';
import ContactForm from "./ContactForm";
import HomeFooter from "../Footer/HomeFooter";

const HomeContact = () => {
    return (
        <div className="contact">
            <div className="contact__overlay">
                <ContactForm/>
                <HomeFooter/>
            </div>
        </div>

    );
};

export default HomeContact;