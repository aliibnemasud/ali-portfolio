import React from 'react';
import CopyRight from '../Footer/CopyRight';
import Footer from '../Footer/Footer';
import Header from '../Shared/Header';
import AboutMe from './AboutMe/AboutMe';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';

import ExpertiseArea from './ExpertiseArea/ExpertiseArea';
import Portfolio from './Portfolio/Portfolio';
import SayHello from './SayHello/SayHello';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <ExpertiseArea></ExpertiseArea>
            <Portfolio></Portfolio>
            <Testimonial></Testimonial>
            <SayHello></SayHello>
            <ContactMe></ContactMe>
            <Footer></Footer>
            <CopyRight></CopyRight>        
        </div>
    );
};

export default Home;