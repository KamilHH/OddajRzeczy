import React, {useEffect, useState} from 'react';
import {Link as RouterLink} from "react-router-dom";
import {headerData} from "../Header/headerData";
import {Link} from "react-scroll";
import Decoration from "../../assets/Decoration.svg";

const Register = () => {
    const [formValues, setFormValues] = useState({email: "", password: "", password2: ""})
    const [errors, setErrors] = useState({email: ""});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

    const validate = (values) => {
        const errors = {};
        const {email, password, password2} = values;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!email) {
            errors.email = "Brak email";
        }
        else if (!regex.test(email)) {
            errors.email = "Podany email jest nieprawidłowy";
        }
        if (!password) {
            errors.password = "Brak hasła"
        }
        if (!password2) {
            errors.password2 = "Brak hasła"
        }
        if (password.length < 6) {
            errors.password = "Podane hasło jest za krótkie"
        }
        if (password2.length < 6) {
            errors.password2 = "Podane hasło jest za krótkie"
        }
        else if (password !== password2) {
            errors.password = "Hasła muszą być identyczne"
        }
        else if (password2 !== password) {
            errors.password = "Hasła muszą być identyczne"
        }
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(formValues));
        console.log(errors)
    }

    useEffect(() => {
        Object.keys(errors).length === 0 ? setIsSubmit(true) : setIsSubmit(false);

        console.log(isSubmit)
    }, [errors, isSubmit])
    return (
        <>
            <div className="login">
                <div className="header__right-column">
                    <div className="header__login">
                        <RouterLink className="header__link" to={"/logowanie"}>Zaloguj</RouterLink>
                        <RouterLink className="header__link header__link--register" to={"/rejestracja"}>Załóż
                            konto</RouterLink>
                    </div>
                    <div className="header__menu">
                        <nav>
                            <ul className="menu-list">
                                {headerData.map((e, i) => {
                                    return (
                                        <Link className={e.cName} key={i} to={`${e.path}`} spy={true}
                                              smooth={true}>{e.title}</Link>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="login__container">
                    <h1 className="login__heading">Załóż konto</h1>
                    <img src={Decoration} alt="" className="login__decor"/>
                    {isSubmit && <p className="contact__msg-success">Zarejestrowano!</p>}
                    <form className="login__form" onSubmit={handleSubmit}>
                        <div className="login__form-container">
                            <div className="login__userinfo">
                                <div className="login__userinfo-item">
                                    <label className="login__label">Email</label>
                                    <input className={errors.email ? "contact__input--active" : "contact__input"}
                                           name="email" value={formValues.email}
                                           onChange={handleChange}/>
                                    <p className="contact__msg-error">{errors.email}</p>
                                </div>
                                <div className="login__userinfo-item">
                                    <label className="login__label">Hasło</label>
                                    <input className={errors.password ? "contact__input--active" : "contact__input"}
                                           type="password" name="password"
                                           value={formValues.password} onChange={handleChange}/>
                                    <p className="contact__msg-error">{errors.password}</p>
                                </div>
                                <div className="login__userinfo-item">
                                    <label className="login__label">Potwórz hasło</label>
                                    <input className={errors.password ? "contact__input--active" : "contact__input"}
                                           type="password" name="password2"
                                           value={formValues.password2} onChange={handleChange}/>
                                    <p className="contact__msg-error">{errors.password2}</p>
                                </div>
                            </div>
                        </div>
                        <div className="login__button-container">
                            <button className="button button--small" disabled={true}>Zaloguj się</button>
                            <button className="button button--small active " type="submit">Załóż konto</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Register;