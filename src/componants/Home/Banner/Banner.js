import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';
import ali from '../../img/ali.png';

const Banner = () => {
    return (
        <div>
            <section className='banner pt-5'>

                <div className="container d-flex flex-wrap justify-content-between align-items-center position-relative">
                    <div className='col-lg-6 col-md-6 col-12'>
                        <h6>--Hello</h6>
                        <h1 className='text-uppercase fw-bold'>I am Ali Ibne Masud</h1>
                        <p className='my-4'>This is Ali Ibne Masud a full stack web developer (MERN) and UI/UX Designer located in Bangladesh. Looking for working aroud the world.</p>
                        <Button variant='danger' >Download CV</Button>
                        <ul className='social-icon d-flex justify-content-between position-absolute bottom-0 start-0'>
                            <li>
                                <a href="https://github.com/aliibnemasud" target="_blank"><i class="fa-brands fa-github"></i></a>
                            </li>
                            <li>
                                <a href="https://www.behance.net/mdmasudrony" target="_blank"><i class="fa-brands fa-behance"></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/aliibnemasud/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>                                
                            </li>
                        </ul>
                    </div>

                    <div className='col-md-6 col-12 text-center'>
                        <img src={ali} className="img-fluid w-50 text-center" alt="" />
                    </div>
                </div>



            </section>
        </div>
    );
};

export default Banner;