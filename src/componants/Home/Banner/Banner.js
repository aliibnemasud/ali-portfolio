import React from 'react';
import './Banner.css';
import ali2 from '../../img/ali2.png';
import Header from '../../Shared/Header';
import Downloadcv from '../../Shared/Downloadcv';


const Banner = () => {  

    return (
        <div id='home' >

            <section className='banner'>
                <Header></Header>
                <div className="container d-flex flex-wrap justify-content-between align-items-center position-relative">
                    <div className='col-lg-7 col-md-6 col-12 mb-5'>
                        <div className='d-flex align-items-center'>
                            <div className="hline d-block" />
                            <h5 className='my-3'>Hello</h5>
                        </div>
                        <h1 className='text-uppercase fw-bold'>I am <span className='text-danger'>Ali</span> Ibne Masud</h1>
                        <p className='my-4'>This is Ali Ibne Masud a <span className='fw-bold'>Full Stack Developer ( MERN )</span> and <span className='fw-bold'>UI/UX Designer</span> located in Bangladesh. Looking for working around the world.</p>
                        
                       <Downloadcv/>

                        <ul className='social-icon d-flex justify-content-between position-absolute bottom-0 start-0'>
                            <li>
                                <a href="https://github.com/aliibnemasud" target="_blank"><i className="fa-brands fa-github"></i></a>
                            </li>
                            <li>
                                <a href="https://www.behance.net/mdmasudrony" target="_blank"><i className="fa-brands fa-behance"></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/aliibnemasud/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>

                    <div className='col-lg-5 col-md-6 col-12 text-center'>
                        <img src={ali2} className="img-fluid text-center" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;