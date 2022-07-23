import React from 'react';
import qota from '../../img/quote.png';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <section id='testimonial' className='my-5 py-5 testimonial'>
            <div className='container'>
                <h1 className='text-center my-3'>Testimonial</h1>
                <p className='text-center mb-5 fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi, et incidunt mollitia harum eius quia blanditiis! Esse, unde vero!</p>

                <div className="row">

                    <div className='review-card col-lg-4 col-md-6 col-12'>
                        <div className='bg-light'>
                            <div className='p-4'>
                                <img src={qota} className="d-block ms-auto" width="100px" alt="" />
                                <p className='fs-4'>I have worked with Ali Ibne Masud before and I will in the future. Excellent work and communication. You won't be disappointed!</p>
                                <div className='d-flex justify-content-around align-itmes-center'>
                                    <img src={qota} width="90px" alt="" />
                                    <div className='pt-3'>
                                        <h4 className='m-0'>Revga Wright</h4>
                                        <p className='m-0'>United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='review-card col-lg-4 col-md-6 col-12'>
                        <div className='bg-light'>
                            <div className='p-4'>
                                <img src={qota} className="d-block ms-auto" width="100px" alt="" />
                                <p className='fs-4'>Great to work with them again! Always fast and skilled!</p>
                                <div className='d-flex justify-content-around align-itmes-center'>
                                    <img src={qota} width="90px" alt="" />
                                    <div className='pt-3'>
                                        <h4 className='m-0'>Chudyi Lozue</h4>
                                        <p className='m-0'>United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='review-card col-lg-4 col-md-6 col-12'>
                        <div className='bg-light'>
                            <div className='p-4'>
                                <img src={qota} className="d-block ms-auto" width="100px" alt="" />
                                <p className='fs-4'>Ali Ibne Masud was responsive to our questions and requests. The seller was more correct than we were with deadlines, thus very patient. The seller produced a high quality product and revised based on client needs. I strongly recommend this seller.</p>
                                <div className='d-flex justify-content-around align-itmes-center'>
                                    <img src={qota} width="90px" alt="" />
                                    <div className='pt-3'>
                                        <h4 className='m-0'>Ali Ibne Masud</h4>
                                        <p className='m-0'>Title of Card</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Testimonial;