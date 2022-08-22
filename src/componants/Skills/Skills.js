import React from 'react';
import Firebase from '../img/skills/firebase.png';
import ReactQuery from '../img/skills/ReactQuery.png';
import Mongodb from '../img/skills/mongodb.png';
import JS from '../img/skills/js.png';
import ReactPng from '../img/skills/React.png';
import axios from '../img/skills/axios.png';
import bootstrap from '../img/skills/Bootstrap.png';
import css3 from '../img/skills/css3.png';
import Html from '../img/skills/html5.png';
import Tailwind from '../img/skills/tailwind.png';
import Express from '../img/skills/express.png';
import vscode from '../img/skills/Vscode.png';

const Skills = () => {
    return (
        <div className='bg-dark py-5'>

            <div className="container">
                <h1 className='text-center text-light'>Skills</h1>
                <p className='text-center text-light'>HTML, CSS, Bootstrap, Tailwind, JavaScript, ES6, React, React Router, Firebase, Express Js, Node, MongoDB, JWT, Heroku, Git, Netlify</p>

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

export default Skills;