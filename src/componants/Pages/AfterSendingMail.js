import React from 'react';
import Header from '../Shared/Header';

const AfterSendingMail = () => {
    return (
        <div className='container text-center'>
            <Header/>
            <img width="400px" className='mx-auto mt-5' src="https://i.ibb.co/S7Xj8xh/Mail-Successs.png" alt="mail success" />
            <h1 className='mt-5 mb-3'>Thank you for sending mail to me.</h1>
            <p>I will get back to you as soon a i can.</p>
            <a href="/">Go to Home</a>           
        </div>
    );
};

export default AfterSendingMail;