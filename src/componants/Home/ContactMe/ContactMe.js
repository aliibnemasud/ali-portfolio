import React from 'react';
import { Button } from 'react-bootstrap';
import PrimaryBtn from '../../Shared/PrimaryBtn';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <section id='contact' className='my-5 py-5 bg-light mb-5'>
            <div className="container">
                <h1 className='text-center my-5'>Something about contact!</h1>

                <div className="row">

                    <div className="col-lg-7 d-flex justify-content-between align-items-center">
                        <h1 className=''>Drop a line. I am ready to help you!</h1>
                    </div>

                    <div className="col-lg-5 shadow forma">
                        <form className='contact-form'>
                            <input className='form-control' placeholder='Your Name' type="text" />
                            <input className='form-control' placeholder='example@mail.com' type="email" />
                            <input className='form-control' placeholder='Budget' type="number" />
                            <textarea className='form-control' rows="5" placeholder='Project Desicription' type="text" />
                            
                            <PrimaryBtn>Submit</PrimaryBtn>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactMe;