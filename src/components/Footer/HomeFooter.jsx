import React from 'react';
import fbicon from "../../assets/Facebook.svg";
import instaicon from "../../assets/Instagram.svg";

const HomeFooter = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <span></span>
                <span className="footer__copyright">Copyright by Coders Lab</span>
            <div className="footer__social">
                <img src={fbicon} alt="" className="footer_img"/>
                <img src={instaicon} alt="" className="footer_img"/>
            </div>
            </div>

        </footer>
    );
};

export default HomeFooter;