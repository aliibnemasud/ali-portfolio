import React from 'react';

const Footer = () => {
    return (
        <footer className='container my-5'>
            <div className="row">
                <div className="col-lg-3 m-1">
                    <h1>Ali Ibne Masud</h1>
                </div>

                <div className="col-lg-3 m-1">
                    <h1>About</h1>
                    <ul>
                        <li className='nav-link'><a className='nav-link' href="#banner">Home</a></li>
                    </ul>

                </div>

                <div className="col-lg-3 m-1">
                    <h1>Contact Me</h1>
                    <ul>
                        <li>Email</li>
                        <li>Email</li>
                        <li>Email</li>
                        <li>Email</li>
                    </ul>

                </div>
                
                
            </div>
        </footer>
    );
};

export default Footer;