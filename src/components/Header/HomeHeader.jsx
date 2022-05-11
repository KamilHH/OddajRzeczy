import React from 'react';
import HeroImage from '../../assets/Home-Hero-Image.jpg'
import Decoration from '../../assets/Decoration.svg'
import {headerData} from "./headerData";
import {Link} from 'react-scroll'
import {Link as RouterLink} from 'react-router-dom'

const HomeHeader = () => {
    return (
        <div className="container">
            <div className="left">
                <img src={HeroImage} alt="" className="img"/>
            </div>
            <div className="right">
                <div className="login">
                    <RouterLink className="link login" to={"/login"}>Zaloguj</RouterLink>
                    <RouterLink className="link register" to={"/register"}>Załóż konto</RouterLink>
                </div>
                <div className="navigation">
                    <nav>
                        <ul className="menu-list">
                            {headerData.map((e, i) => {
                                return (
                                    <Link className={e.cName} key={i} to={`/${e.path}`}>{e.title}</Link>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
                <div className="intro">
                    <h1>Zacznij pomagać! </h1>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img className="decor" src={Decoration} alt=""/>
                    <div className="CTA">
                        <RouterLink className="cta-button" to={"/login"}>ODDAJ RZECZY</RouterLink>
                        <RouterLink className="cta-button" to={"/login"}>ZORGANIZUJ ZBIÓRKĘ</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;