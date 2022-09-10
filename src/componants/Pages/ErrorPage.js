import React from 'react';
import Header from '../Shared/Header';

const ErrorPage = () => {
    
    return (
        <div className='container text-center'>
            <Header />
            <img width="400px" className='mx-auto mt-5' src="https://i.ibb.co/Kyd1L5X/404.png" alt="mail success" />
            <h1 className='mt-5 mb-3'>Sorry!</h1>
            <p>Thare is no page found</p>
            <a href="/">Go to Home</a>
        </div>
    );
};

export default ErrorPage;