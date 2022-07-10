import React from 'react';
import { Button } from 'react-bootstrap';
import project1 from '../../img/projectsimg/Projects (4).jpg';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <section id='projects' className='my-5 py-5'>
            <div className='container'>
                <h1 className='text-center my-3'>Recent Projects</h1>
                <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi, et incidunt mollitia harum eius quia blanditiis! Esse, unde vero!</p>

                <div className='row'>
                    
                    <div className='project-card col-lg-4 col-md-6 col-12 my-3'>
                        <div className='p-4 bg-light'>
                            <div className=''>
                                <img className='img-fluid mx-auto d-block' src={project1} alt="" />
                            </div>
                            <h3 className='mt-4 mb-2'>UI/UX Design</h3>
                            <p className=''>Project Details</p>
                            <div className='d-flex justify-content-between'>
                                <Button variant='primary'>Details</Button>
                                <Button variant='danger'>Live Preview</Button>
                            </div>
                        </div>
                    </div>

                    <div className='project-card col-lg-4 col-md-6 col-12 my-3'>
                        <div className='p-4 bg-light'>
                            <div className=''>
                                <img className='img-fluid mx-auto d-block' src={project1} alt="" />
                            </div>
                            <h3 className='mt-4 mb-2'>UI/UX Design</h3>
                            <p className=''>Project Details</p>
                            <div className='d-flex flex-wrap justify-content-between'>
                                <Button variant='primary'>Details</Button>
                                <Button variant='danger'>Live Preview</Button>
                            </div>
                        </div>
                    </div>

                    <div className='project-card col-lg-4 col-md-6 col-12 my-3'>
                        <div className='p-4 bg-light'>
                            <div className=''>
                                <img className='img-fluid mx-auto d-block' src={project1} alt="" />
                            </div>
                            <h3 className='mt-4 mb-2'>UI/UX Design</h3>
                            <p className=''>Project Details</p>
                            <div className='d-flex flex-wrap justify-content-between'>
                                <Button variant='primary'>Details</Button>
                                <Button variant='danger'>Live Preview</Button>
                            </div>
                        </div>
                    </div>

                    <div className='project-card col-lg-4 col-md-6 col-12 my-3'>
                        <div className='p-4 bg-light'>
                            <div className=''>
                                <img className='img-fluid mx-auto d-block' src={project1} alt="" />
                            </div>
                            <h3 className='mt-4 mb-2'>UI/UX Design</h3>
                            <p className=''>Project Details</p>
                            <div className='d-flex flex-wrap justify-content-between'>
                                <Button variant='primary'>Details</Button>
                                <Button variant='danger'>Live Preview</Button>
                            </div>
                        </div>
                    </div>

                    


                </div>


            </div>

        </section>
    );
};

export default Portfolio;