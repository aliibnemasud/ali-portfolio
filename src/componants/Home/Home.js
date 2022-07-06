import React from 'react';
import Header from '../Shared/Header';
import AboutMe from './AboutMe/AboutMe';
import Banner from './Banner';
import ExpertiseArea from './ExpertiseArea/ExpertiseArea';
import Portfolio from './Portfolio/Portfolio';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <ExpertiseArea></ExpertiseArea>
            <Portfolio></Portfolio>            
        </div>
    );
};

export default Home;