import React from 'react';
import HomeHeader from "./Header/HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";
import HomeAbout from "./HomeAbout";
import HomeFoundation from "./HomeFoundation";
import HomeContact from "./HomeContact";

const Home = () => {
    return (
        <div className="home">
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSteps/>
            <HomeAbout/>
            <HomeFoundation/>
            <HomeContact/>
        </div>
    );
};

export default Home;