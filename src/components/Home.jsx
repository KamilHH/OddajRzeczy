import React from 'react';
import HomeHeader from "./Header/HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";
import HomeAbout from "./HomeAbout";
import HomeWho from "./HomeWho";
import HomeContact from "./HomeContact";

const Home = () => {
    return (
        <div>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSteps/>
            <HomeAbout/>
            <HomeWho/>
            <HomeContact/>
        </div>
    );
};

export default Home;