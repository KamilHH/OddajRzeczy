import React from 'react';
import Decoration from '../assets/Decoration.svg'
import Signature from '../assets/Signature.svg'
import Photo from '../assets/People.jpg'


const HomeAbout = () => {
    return (
        <div className="about" id="about">
            <div className="about__left-column">
                <h1 className="about__title">O nas</h1>
                <img src={Decoration} alt="" className="about__decor"/>
                <p className="about__content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam doloremque est magni
                    maxime nesciunt nobis numquam quidem tenetur vel.
                </p>
                <img src={Signature} alt="" className="about__signature"/>
            </div>
            <div className="about__right-column">
                <img src={Photo} alt="" className="about__img"/>
            </div>
        </div>
    );
};

export default HomeAbout;