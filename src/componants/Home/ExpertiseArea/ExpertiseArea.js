import React from 'react';
import './ExpertiseArea.css';
import Webdevelopment from '../../img/projectsimg/web-development.png';
import Uiux from '../../img/projectsimg/ui-ux.png';
import rreact from '../../img/projectsimg/react.png';

const ExpertiseArea = () => {
    return (
        <section id='expertise' className='py-5 expertise-area'>
            <div className='container'>
                <h1 className='text-center my-3'>Expertise Area</h1>
                <p className='text-center mb-5'>Some of my expertise area in bellow.</p>


                <div className='d-flex flex-wrap justify-content-between '>

                    <div className='owncard p-4'>
                        <div className=''>
                            <img className='img-fluid mx-auto d-block' width="120px" src={Webdevelopment} alt="" />
                        </div>
                        <h3 className='text-center my-4'>Web Development</h3>
                        <p className='text-center'>I am a full stack web developer with (MERN) with lot of tech skills. I can make any website you want. Love to do coding and building new things.</p>
                    </div>

                    <div className='owncard p-4'>
                        <div className=''>
                            <img className='img-fluid mx-auto d-block' width="120px" src={Uiux} alt="" />
                        </div>
                        <h3 className='text-center my-4'>UI/UX Design</h3>
                        <p className='text-center'>Before starting, I have worked with ui/ux. If you have any idea you can share with me so we can get started with your project with ui/ux</p>
                    </div>

                    <div className='owncard p-4'>
                        <div className=''>
                            <img className='img-fluid mx-auto d-block' width="120px" src={rreact} alt="" />
                        </div>
                        <h3 className='text-center my-4'>React</h3>
                        <p className='text-center'>React is most popular library in javascript now. I am expert at react to do any type of website by using react</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ExpertiseArea;