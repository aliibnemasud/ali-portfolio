import React from 'react';
import Aboutme from '../../img/aboutme.png';
import Downloadcv from '../../Shared/Downloadcv';
import './Anoutme.css';


const AboutMe = () => {
    return (
        <div className='container d-flex flex-wrap justify-content-between align-items-center aboutMePadding'>
            <img className='img-fluid col-lg-5' src={Aboutme} alt="" />
            <div className='col-lg-6'>
                <h1>About Me</h1>
                <p className='my-4'>Hello, I am a Junior React Developer with a list of skills in HTML, CSS, Bootstrap, Tailwind, JavaScript, ES6, React, React Router, Firebase, Express Js, Node, MongoDB, JWT, Heroku, Git, Netlify, etc.
                </p>

                <p className='mb-5'>I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new things and development techniques are important to me and the success of my work field. Also, I have professional experience as a freelancer on Upwork and Fiverr.
                </p>
                
                <p className='mb-5'>Thank you for the time to read this. I look forward to speaking with you if you have any opportunity for me. Feel free to ask me any questions. I am always here to respond. Thank you!
                </p>

                <Downloadcv/>
            </div>
        </div>
    );
};

export default AboutMe;