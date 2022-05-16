import React from 'react';
import HeroImage from '../../assets/Home-Hero-Image.jpg'
import Decoration from '../../assets/Decoration.svg'
import {headerData} from  './headerData'
import {Link} from 'react-scroll'
import {Link as RouterLink} from 'react-router-dom'

const HomeHeader = () => {
    return (
        <header className="header" id="start">
            <div className="header__left-column">
                <img src={HeroImage} alt=""/>
            </div>
            <div className="header__right-column">
                <div className="header__login">
                    <RouterLink className="header__link" to={"/login"}>Zaloguj</RouterLink>
                    <RouterLink className="header__link header__link--register" to={"/register"}>Załóż konto</RouterLink>
                </div>
                <header className="header__menu">
                    <nav>
                        <ul className="menu-list">
                            {headerData.map((e, i) => {
                                return (
                                    <Link className={e.cName} key={i} to={`${e.path}`} spy={true} smooth={true}>{e.title}</Link>
                                )
                            })}
                        </ul>
                    </nav>
                </header>
                <div className="header__intro">
                    <h1>Zacznij pomagać! </h1>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img className="decor" src={Decoration} alt=""/>
                    <div className="buttons">
                        <RouterLink className="button button--big" to={"/login"}>ODDAJ RZECZY</RouterLink>
                        <RouterLink className="button button--big" to={"/login"}>ZORGANIZUJ ZBIÓRKĘ</RouterLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;