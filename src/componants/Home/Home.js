import React from 'react';
import CopyRight from '../Footer/CopyRight';
import Footer from '../Footer/Footer';
import Skills from '../Skills/Skills';
import AboutMe from './AboutMe/AboutMe';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import ExpertiseArea from './ExpertiseArea/ExpertiseArea';
import Portfolio from './Portfolio/Portfolio';
import SayHello from './SayHello/SayHello';
import NewReviews from './Testimonial/NewReviews';

const Home = () => {

    return (
        <div>            
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <ExpertiseArea></ExpertiseArea>
            <Portfolio></Portfolio>          
            <NewReviews/>
            <SayHello></SayHello>
            <ContactMe></ContactMe>
            <Footer></Footer>
            <CopyRight></CopyRight>        
        </div>
    );
};

export default Home;