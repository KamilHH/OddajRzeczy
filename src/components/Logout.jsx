import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import {headerData} from "./Header/headerData";
import {Link} from "react-scroll";
import Decoration from "../assets/Decoration.svg";

const Logout = () => {
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
                    <h1 className="login__heading--logout">Wylogowanie nastąpiło <br/> pomyślnie!</h1>
                    <img src={Decoration} alt="" className="login__decor"/>
                    <div className="login__button-container--logout">
                        <RouterLink className="button button--small active" to={"/"}>Strona główna</RouterLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Logout;