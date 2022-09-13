import React from 'react';
import './ContactMe.css';
import contact from '../../img/contact.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ContactMe = () => {

    const form = useRef();

    const navigate = useNavigate();

    const buttonStyle = {
        background: "black",
        padding: "10px 20px",
        color: "white",
        border: "none",
        display: "block",
        margin: "0 auto",
    }

    // using Email js

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID , process.env.REACT_APP_YOUR_TEMPLATE_ID , form.current, '3FFT1Ttqnwo8G1HAx')
            .then((result) => {
                console.log(result.text);
                toast.success("Message Send Successfully!")
                navigate("/mailsuccess")
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section id='contact' className='my-5 py-5 bg-light mb-5'>
            <div className="container">
                <h1 className='text-center my-3'>Contact Me</h1>
                <p className='text-center mb-5'>Drop a line. I am ready to help you!</p>
                <div className="row">
                    <div className="col-lg-7 d-flex justify-content-between align-items-center">
                        <img src={contact} className=" w-50 mx-auto" alt="contact" />
                    </div>
                    <div className="col-lg-5 shadow forma">
                        <form className='contact-form' ref={form} onSubmit={sendEmail}>
                            <input className='form-control' placeholder='Your Name' type="text" name="your_name" required />
                            <input className='form-control' placeholder='example@mail.com' type="email" name="email_id" required />
                            <input className='form-control' placeholder='Budget' type="number" name="budget" required />
                            <textarea className='form-control' rows="5" placeholder='Project Desicription' type="text" name="message" required />
                            {/* <PrimaryBtn>Submit</PrimaryBtn> */}
                            <input style={buttonStyle} type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactMe;