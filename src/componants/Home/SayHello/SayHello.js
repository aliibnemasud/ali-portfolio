import React from 'react';
import PrimaryBtn from '../../Shared/PrimaryBtn';
import './Sayhello.css';

const SayHello = () => {
    return (
        <section className='my-5 py-5'>
            <h3 className='text-center'>Have any project in mind?</h3>
            <h1 className='text-center my-5'>Just Say Hello</h1>
            {/* <button  className='hireme'></button> */}
            <PrimaryBtn>Hire Me</PrimaryBtn>           
        </section>
    );
};

export default SayHello;