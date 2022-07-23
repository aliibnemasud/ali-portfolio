import React from 'react';
import { Button } from 'react-bootstrap';
import ecparts from '../../img/projectsimg/ecparts.png';
import cyclewarehouse from '../../img/projectsimg/cyclewarehouse.png';
import mindtrainor from '../../img/projectsimg/mindtrainor.png';
import omnifood from '../../img/projectsimg/omnifood.png';
import sstech from '../../img/projectsimg/sstech.png';
import dotask from '../../img/projectsimg/dotask.png';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <section id='projects' className='my-5 py-5'>
            <div className='container'>
                <h1 className='text-center my-3'>Recent Projects</h1>
                <p className='text-center mb-5'>I have my recent project with React also by using other technologies. You can check by clicking live preview.</p>

                <div className='row'>
                    
                    <div className='project-card col-lg-4 col-md-6 col-12 my-3'>
                        <div className='p-4 bg-light'>
                            <div className=''>
                                <img className='img-fluid mx-auto d-block' src={ecparts} alt="" />
                            </div>
                            <h3 className='mt-4 mb-2'>EcParts</h3>
                            <p className=''>It is parts Manufacturer Website.</p>
                            <div className='d-flex justify-content-between'>
                                <Button variant='primary'>Details</Button>
                                <a className='btn btn-danger' href="https://ecparts-8e59b.web.app/" target="_blank" >Live Preview</a>                                
                            </div>
                        </div>
                    </div>

                    <div className='project-card col-lg-4 col-md-6 col-12 my-3'>
                        <div className='p-4 bg-light'>
                            <div className=''>
                                <img className='img-fluid mx-auto d-block' src={cyclewarehouse} alt="" />
                            </div>
                            <h3 className='mt-4 mb-2'>Cycle Warehouse</h3>
                            <p className=''>It is am Ware house website.</p>
                            <div className='d-flex flex-wrap justify-content-between'>
                                <Button variant='primary'>Details</Button>
                                <a className='btn btn-danger' href="https://warehouse-management-web-d5f96.web.app/" target="_blank" >Live Preview</a> 
                            </div>
                        </div>
                    </div>

                    <div className='project-card col-lg-4 col-md-6 col-12 my-3'>
                        <div className='p-4 bg-light'>
                            <div className=''>
                                <img className='img-fluid mx-auto d-block' src={mindtrainor} alt="" />
                            </div>
                            <h3 className='mt-4 mb-2'>Mind Trainer</h3>
                            <p className=''>Personal Service Provider website.</p>
                            <div className='d-flex flex-wrap justify-content-between'>
                                <Button variant='primary'>Details</Button>
                                <a className='btn btn-danger' href="https://independent-service-prov-2bff1.web.app/" target="_blank" >Live Preview</a> 
                            </div>
                        </div>
                    </div>

                    <div className='project-card col-lg-4 col-md-6 col-12 my-3'>
                        <div className='p-4 bg-light'>
                            <div className=''>
                                <img className='img-fluid mx-auto d-block' src={omnifood} alt="" />
                            </div>
                            <h3 className='mt-4 mb-2'>OmniFood</h3>
                            <p className=''>Restaurant website</p>
                            <div className='d-flex flex-wrap justify-content-between'>
                                <Button variant='primary'>Details</Button>
                                <a className='btn btn-danger' href="https://aliibnemasud.github.io/OMIFOOD-html-css/" target="_blank" >Live Preview</a> 
                            </div>
                        </div>
                    </div>

                    <div className='project-card col-lg-4 col-md-6 col-12 my-3'>
                        <div className='p-4 bg-light'>
                            <div className=''>
                                <img className='img-fluid mx-auto d-block' src={sstech} alt="" />
                            </div>
                            <h3 className='mt-4 mb-2'>SsTech</h3>
                            <p className=''>Creative Agency Website</p>
                            <div className='d-flex flex-wrap justify-content-between'>
                                <Button variant='primary'>Details</Button>
                                <a className='btn btn-danger' href="https://aliibnemasud.github.io/SSTECH-HTML-CSS-/?" target="_blank" >Live Preview</a> 
                            </div>
                        </div>
                    </div>

                    <div className='project-card col-lg-4 col-md-6 col-12 my-3'>
                        <div className='p-4 bg-light'>
                            <div className=''>
                                <img className='img-fluid mx-auto d-block' src={dotask} alt="" />
                            </div>
                            <h3 className='mt-4 mb-2'>Do Task</h3>
                            <p className=''>Task Management Website</p>
                            <div className='d-flex flex-wrap justify-content-between'>
                                <Button variant='primary'>Details</Button>
                                <a className='btn btn-danger' href="https://dotask-a9fb5.web.app/" target="_blank" >Live Preview</a> 
                            </div>
                        </div>
                    </div>

                    


                </div>


            </div>

        </section>
    );
};

export default Portfolio;