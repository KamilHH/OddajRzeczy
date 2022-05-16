import React from 'react';
import Decoration from "../../assets/Decoration.svg";

const ContactForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="contact__container">
            <h1 className="contact__heading">Skontaktuj się z nami</h1>
            <img src={Decoration} alt="" className="contact__decor"/>
            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-container">
                    <div className="contact__userinfo">
                        <div className="contact__userinfo-item">
                            <label className="contact__label">Wpisz swoje imię</label>
                            <input className="contact__input" type="text"/>
                        </div>
                        <div className="contact__userinfo-item">
                            <label className="contact__label">Wpisz swój email</label>
                            <input className="contact__input" type="email"/>
                        </div>
                    </div>
                    <div className="contact__msg">
                        <label className="contact__label">Wpisz swoją wiadomość</label>
                        <textarea className="contact__textarea"/>
                    </div>
                </div>
                <button className="button button--small active" type="submit">Wyślij</button>
            </form>
        </div>
    );
};

export default ContactForm;