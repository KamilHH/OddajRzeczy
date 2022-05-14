import React from 'react';
import Decoration from '../assets/Decoration.svg'
import Icon1 from '../assets/Icon-1.svg'
import Icon2 from '../assets/Icon-2.svg'
import Icon3 from '../assets/Icon-3.svg'
import Icon4 from '../assets/Icon-4.svg'
import {Link as RouterLink} from "react-router-dom";

const HomeSteps = () => {
    return (
        <div className="steps" id="steps">
            <h1 className="steps__heading">
                Wystarczą 4 proste kroki
            </h1>
            <img src={Decoration} alt="" className="steps__decor"/>
            <div className="steps__boxes">
                <div className="steps__box">
                    <img src={Icon1} alt="" className="steps__img"/>
                    <h2 className="steps__title">Wybierz reczy</h2>
                    <div className="steps__line"></div>
                    <p className="steps__content">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="steps__box">
                    <img src={Icon2} alt="" className="steps__img"/>
                    <h2 className="steps__title">Spakuj je</h2>
                    <div className="steps__line"></div>
                    <p className="steps__content">skorzystaj z worków na śmieci</p>
                </div>
                <div className="steps__box">
                    <img src={Icon3} alt="" className="steps__img"/>
                    <h2 className="steps__title">Zdecyduj komu chcesz pomóc</h2>
                    <div className="steps__line"></div>
                    <p className="steps__content">wybierz zaufane miejsce</p>
                </div>
                <div className="steps__box">
                    <img src={Icon4} alt="" className="steps__img"/>
                    <h2 className="steps__title">Zamów kuriera</h2>
                    <div className="steps__line"></div>
                    <p className="steps__content">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <RouterLink className="button button--big" to={"/login"}>ODDAJ RZECZY</RouterLink>
        </div>
    );
};

export default HomeSteps;