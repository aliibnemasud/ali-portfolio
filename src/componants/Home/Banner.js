import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <section className='banner'>

            <div>
                <h6>Hello</h6>
                <h1>I am Ali Ibne Masud</h1>
                <p>This is Ali Ibne Masud a full stack web developer (MERN) and UI/UX Designer located in Bangladesh. Looking for working aroud the world.</p>
                <Button variant='danger' >Download CV</Button>
            </div>

            <div>
                
            </div>



            </section>
        </div>
    );
};

export default Banner;