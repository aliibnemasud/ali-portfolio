import React from 'react';
import { Button } from 'react-bootstrap';

const SayHello = () => {
    return (
        <section className='my-5 py-5'>
            <h3 className='text-center'>Have any project in mind?</h3>
            <h1 className='text-center'>Just Say Hello</h1>
            <Button className='d-block mx-auto' variant="danger" >Hire Me</Button>
        </section>
    );
};

export default SayHello;