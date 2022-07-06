import React from 'react';

const Portfolio = () => {
    return (
        <section className='my-5 py-5'>
            <div className='container'>
                <h1 className='text-center my-3'>Recent Projects</h1>
                <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi, et incidunt mollitia harum eius quia blanditiis! Esse, unde vero!</p>

                <div class="card">
                    <img src="..." class="card-img-top img-fluid" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>


            </div>

        </section>
    );
};

export default Portfolio;