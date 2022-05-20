import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import {headerData} from "../Header/headerData";
import {Link} from "react-scroll";
import Decoration from "../../assets/Decoration.svg";

const Register = () => {
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
                    <form className="login__form">
                        <div className="login__form-container">
                            <div className="login__userinfo">
                                <div className="login__userinfo-item">
                                    <label className="login__label">Email</label>
                                    <input className="login__input" type="email"/>
                                </div>
                                <div className="login__userinfo-item">
                                    <label className="login__label">Hasło</label>
                                    <input className="login__input" type="password"/>
                                </div>
                                <div className="login__userinfo-item">
                                    <label className="login__label">Potwórz hasło</label>
                                    <input className="login__input" type="password"/>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="login__button-container">
                        <button className="button button--small active" type="submit">Zaloguj się</button>
                        <button className="button button--small active " type="submit">Załóż konto</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;