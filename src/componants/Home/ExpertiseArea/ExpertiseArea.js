import React from 'react';
import './ExpertiseArea.css';
import firebasepng from '../../img/skills/firebase.png';

const ExpertiseArea = () => {
    return (
        <section id='expertise' className='my-5 py-5 expertise-area'>
            <div className='container'>
                <h1 className='text-center my-3'>Expertise Area</h1>
                <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi, et incidunt mollitia harum eius quia blanditiis! Esse, unde vero!</p>


                <div className='d-flex flex-wrap justify-content-between'>

                    <div className='owncard p-4'>
                        <div className=''>
                            <img className='img-fluid mx-auto d-block w-50' src={firebasepng} alt="" />
                        </div>
                        <h3 className='text-center my-4'>Web Development</h3>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, molestiae eos? Dolorum totam possimus alias.</p>
                    </div>

                    <div className='owncard p-4'>
                        <div className=''>
                            <img className='img-fluid mx-auto d-block w-50' src={firebasepng} alt="" />
                        </div>
                        <h3 className='text-center my-4'>UI/UX Design</h3>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, molestiae eos? Dolorum totam possimus alias.</p>
                    </div>

                    <div className='owncard p-4'>
                        <div className=''>
                            <img className='img-fluid mx-auto d-block w-50' src={firebasepng} alt="" />
                        </div>
                        <h3 className='text-center my-4'>React</h3>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, molestiae eos? Dolorum totam possimus alias.</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ExpertiseArea;