import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';
import ali from '../../img/ali.png';


const Banner = () => {
    const buttonStyle = {
        background: "black",
        padding: "10px 20px",
        color: "white",
        border: "none",
        width: "30%",
        textDecoration: "none",
        display: "block",        
        textAlign: "center",        
        
    }
    return (
        <div id='banner' >
            <section className='banner pt-5'>
                <div className="container d-flex flex-wrap justify-content-between align-items-center position-relative">
                    <div className='col-lg-7 col-md-6 col-12 mb-5'>
                        <div className='d-flex align-items-center'>
                            <div className="hline d-block" />
                            <h5 className='my-3'>Hello</h5>
                        </div>
                        <h1 className='text-uppercase fw-bold'>I am <span className='text-danger'>Ali</span> Ibne Masud</h1>
                        <p className='my-4'>This is Ali Ibne Masud a full stack web developer (MERN) and UI/UX Designer located in Bangladesh. Looking for working aroud the world.</p>
                        <a style={buttonStyle} className="mt-5" target="_blank" href="https://drive.google.com/file/d/13KeU7C4ICvbAjc-PizE_hapdhUmbAz6O/view?usp=sharing">Download CV</a>
                        
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

                    <div className='col-lg-4 col-md-6 col-12 text-center'>
                        <img src={ali} className="img-fluid text-center" alt="" />
                    </div>
                </div>



            </section>
        </div>
    );
};

export default Banner;