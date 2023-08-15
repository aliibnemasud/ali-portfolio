import React from 'react';
import { Button } from 'react-bootstrap';

const SingleProject = ({project}) => {
    
    return (
        <div className='project-card col-lg-4 col-md-6 col-12 my-3'>
            <div className='p-4 bg-light'>
                <div className=''>
                    <img className='img-fluid mx-auto d-block' src={project?.thumbnail} alt="" />
                </div>
                <h3 className='mt-4 mb-2'>{project?.name}</h3>
                <p className=''>{project?.bio}</p>
                <div className='d-flex justify-content-between'>
                    <Button variant='primary' href={project?.clientCode} target="_blank" >Client</Button>
                    <a className='btn btn-danger' href={project?.serverCode} target="_blank" rel="noreferrer" >Server</a>
                    <a className='btn btn-success' href={project?.liveLink} target="_blank" rel="noreferrer" >Live Site</a>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;