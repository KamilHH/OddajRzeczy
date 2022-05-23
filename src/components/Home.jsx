import React from 'react';
import HomeHeader from "./Header/HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSteps from "./HomeSteps";
import HomeAbout from "./HomeAbout";
import HomeFoundation from "./Foundation/HomeFoundation";
import HomeContact from "./Contact/HomeContact";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <main>
                <HomeThreeColumns/>
                <HomeSteps/>
                <HomeAbout/>
                <HomeFoundation/>
            </main>
            <footer>
                <HomeContact/>
            </footer>
        </>
    );
};

export default Home;