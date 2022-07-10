import React from 'react';
import { Button } from 'react-bootstrap';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <section id='contact' className='my-5 py-5 bg-light'>
            <div className="container">
                <h1 className='text-center my-5'>Something about contact!</h1>

                <div className="row">

                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <h1 className=''>Drop a line. I am ready to help you!</h1>
                    </div>

                    <div className="col-lg-5 shadow">
                        <form className='contact-form'>
                            <input className='form-control' placeholder='Your Name' type="text" />
                            <input className='form-control' placeholder='example@mail.com' type="email" />
                            <input className='form-control' placeholder='Budget' type="number" />
                            <textarea className='form-control' placeholder='Project Desicription' type="text" />
                            <Button variant='danger' className='d-block ms-auto mr-2'>Sent</Button>
                        </form>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default ContactMe;