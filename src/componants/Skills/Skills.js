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
import aws from '../img/skills/aws.png';
import nextjs from '../img/skills/nextjs.png';
import mysql from '../img/skills/mysql.png';
import auth0 from '../img/skills/auth0.png';
import typescript from '../img/skills/typescript.png';
import docker from '../img/skills/docker.png';

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
                    <img src={aws} width="40px" height="40px" alt="" />
                    <img src={mysql} width="40px" height="40px" alt="" />
                    <img src={nextjs} width="40px" height="40px" alt="" />
                    <img src={typescript} width="40px" height="40px" alt="" />
                    <img src={auth0} width="40px" height="40px" alt="" />
                    <img src={docker} width="40px" height="40px" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Skills;