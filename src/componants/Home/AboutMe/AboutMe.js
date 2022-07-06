import React from 'react';
import { Button } from 'react-bootstrap';
import Aboutme from '../../img/aboutme.png';

import Firebase from '../../img/skills/firebase.png';
import ReactQuery from '../../img/skills/ReactQuery.png';
import Mongodb from '../../img/skills/mongodb.png';
import JS from '../../img/skills/js.png';
import ReactPng from '../../img/skills/React.png';
import axios from '../../img/skills/axios.png';
import bootstrap from '../../img/skills/Bootstrap.png';
import css3 from '../../img/skills/css3.png';
import Html from '../../img/skills/html5.png';
import Tailwind from '../../img/skills/tailwind.png';
import Express from '../../img/skills/express.png';
import vscode from '../../img/skills/Vscode.png';

const AboutMe = () => {
    return (
        <div className='container d-flex flex-wrap justify-content-between align-items-center py-5'>
            <img className='img-fluid' src={Aboutme} alt="" />
            <div className='col-lg-6'>
                <h1>About Me</h1>
                <p className='my-4'>Hello, I am a Junior React Developer with a list of skills in HTML, CSS, Bootstrap, Tailwind, JavaScript, ES6, React, React Router, Firebase, Express Js, Node, MongoDB, JWT, Heroku, Git, Netlify, etc.
                </p>

                <p className='mb-5'>I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new things and development techniques are important to me and the success of my work field. Also, I have professional experience as a freelancer on Upwork and Fiverr.
                </p>
                
                <p className='mb-5'>Thank you for the time to read this. I look forward to speaking with you if you have any opportunity for me. Feel free to ask me any questions. I am always here to respond. Thank you!
                </p>

                <Button variant='danger' >Download CV</Button>

                <h1 className='mt-5'>Skills</h1>
                <p className='fw-bold'>HTML, CSS, Bootstrap, Tailwind, JavaScript, ES6, React, React Router, Firebase, Express Js, Node, MongoDB, JWT, Heroku, Git, Netlify</p>

                <div className='d-flex flex-wrap justify-content-between mt-5'>
                    <img src={JS} width="40px" height="40px" alt="" />
                    <img src={ReactPng} width="40px" height="40px" alt="" />
                    <img src={Firebase} width="40px" height="40px" alt="" />
                    <img src={ReactQuery} width="40px" height="40px" alt="" />
                    <img src={axios} width="40px" height="40px" alt="" />
                    <img src={bootstrap} width="40px" height="40px" alt="" />
                    <img src={css3} width="40px" height="40px" alt="" />
                    <img src={Html} width="40px" height="40px" alt="" />
                    <img src={Tailwind} width="40px" height="40px" alt="" />
                    <img src={Express} width="40px" height="40px" alt="" />
                    <img src={vscode} width="40px" height="40px" alt="" />
                    <img src={Mongodb} height="40px" alt="" />
                </div>

            </div>
        </div>
    );
};

export default AboutMe;