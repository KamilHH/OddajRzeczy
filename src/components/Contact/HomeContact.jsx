import React from 'react';
import ContactForm from "./ContactForm";
import HomeFooter from "../Footer/HomeFooter";

const HomeContact = () => {
    return (
        <section className="contact">
            <div className="contact__overlay">
                <ContactForm/>
                <HomeFooter/>
            </div>
        </section>

    );
};

export default HomeContact;