import React from 'react';
import { Button } from 'react-bootstrap';
import auth from '../../firebase.init';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className='container'>
            <h1>Login or Sign Up</h1>

            <div className="row">
                <div className="col-lg-5">

                </div>
            </div>


            <Button variant='danger' onClick={() => signInWithGoogle()} >Google Login</Button>


            
            
        </div>
    );
};

export default Login;