import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='container  my-5'>

            <div className="col-lg-3 col-md-6 col-12  contactform">

                <div className=' d-flex align-items-center'>
                    <div className="hline d-block" /> <p className='contact d-block mb-0'>+880 1785748248</p>
                </div>
                <div className=' d-flex align-items-center'>
                    <div className="hline d-block" /> <p className='contact d-block mb-0'>aliibnemasud@gmail.com</p>
                </div>

                <div className=' d-flex align-items-center'>
                    <div className="hline d-block" /> <p className='contact d-block mb-0'>Mirpur, Dhaka, Bangladesh</p>
                </div>

                <div className=' d-flex align-items-center'>
                    <div className="hline d-block" /> <p className='contact d-block mb-0'>www.aliibne.com</p>
                </div>

            </div>
            

        </footer>
    );
};

export default Footer;