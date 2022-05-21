import React, {useEffect, useState} from 'react';
import Decoration from "../../assets/Decoration.svg";

const ContactForm = () => {
    const initialValues = {name: "", email: "", message: ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(()=> {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                headers: {
                    // 'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formValues)
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err));
        }
    }, [isSubmit])

    const validate = (values) => {
        const errors = {};
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name || values.name.split(' ').length > 1) {
            errors.name = "Podane imię jest nieprawidłowe";
        }
        if (!values.email || !re.test(values.email)) {
            errors.email = "Podany email jest nieprawidłowy";
        }
        if (values.message.length < 120) {
            errors.message = "Wiadomość musi mieć co najmniej 120 znaków";
        }
        return errors;
    };

    return (
        <div className="contact__container">
            <h1 className="contact__heading">Skontaktuj się z nami</h1>
            <img src={Decoration} alt="" className="contact__decor"/>
            {Object.keys(formErrors).length === 0 && isSubmit &&
            <p className="contact__msg-success">Wiadomość została wysłana! <br/> Wkrótce się skontaktujemy</p>}
            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-container">
                    <div className="contact__userinfo">
                        <div className="contact__userinfo-item">
                            <label className="contact__label">Wpisz swoje imię</label>
                            <input className={formErrors.name ? "contact__input--active" : "contact__input"}
                                   type="text" name="name" value={formValues.name}
                                   onChange={handleChange}/>
                            <p className="contact__msg-error">{formErrors.name}</p>
                        </div>
                        <div className="contact__userinfo-item">
                            <label className="contact__label">Wpisz swój email</label>
                            <input className={formErrors.email ? "contact__input--active" : "contact__input"}
                                   name="email" value={formValues.email}
                                   onChange={handleChange}/>
                            <p className="contact__msg-error">{formErrors.email}</p>
                        </div>
                    </div>
                    <div className="contact__msg">
                        <label className="contact__label">Wpisz swoją wiadomość</label>
                        <textarea className={formErrors.message ? "contact__textarea--active" : "contact__textarea"}
                                  name="message" value={formValues.message}
                                  onChange={handleChange}/>
                    </div>
                    <p className="contact__msg-error">{formErrors.message}</p>
                </div>
                <button className="button button--small active" type="submit">Wyślij</button>
            </form>
        </div>
    );
};

export default ContactForm;