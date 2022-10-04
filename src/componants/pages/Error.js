import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className='my-5 d-flex justify-content-center align-items-center vh-100'>
            <div className='text-center'>
                <h1 className='fw-bold'>404</h1>
                <h2>Opps No page available</h2>
                <button className='btn btn-primary mt-3' onClick={() => navigate("/")}>Go to Home</button>
            </div>
        </div>
    );
};

export default Error;