import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import SingleProject from '../Home/Portfolio/SingleProject';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const reactProjectsFilter = projects.filter(project => project.usedLib === "React");
    const htmlCssFilter = projects.filter(project => project.usedLib === "html & css");

    useEffect(() => {
        axios.get("projects.json")
            .then(res => setProjects(res.data))
    }, [])

    return (
        <div className='container'>
            <h1 className='my-5 text-center'>All Projects | Ali Ibne Masud</h1>

            <Tab.Container defaultActiveKey="allProjects">
                    <Nav variant='pills' className="mb-3" fill>
                        <Nav.Item>
                            <Nav.Link eventKey="allProjects">All Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="react">React Js</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="htmlCss">HTML & CSS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="javascript">Javascript</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="uiUx">UI/UX</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="typescript">Typescript</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="nextJs">Next js</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="nodeJs">Node Js</Nav.Link>
                        </Nav.Item>

                    </Nav>

                    <Tab.Content>
                        <Tab.Pane eventKey="allProjects">
                            <div className='row'>
                                {
                                    projects && projects.map(project => <SingleProject key={project?._id} project={project} />)
                                }
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="react">
                            <div className='row'>
                                {
                                    reactProjectsFilter && reactProjectsFilter.map(project => <SingleProject key={project?._id} project={project} />)
                                }
                            </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="typescript">
                            <h1>Will Come soon...</h1>
                        </Tab.Pane>
                        <Tab.Pane eventKey="htmlCss">

                            <div className='row'>
                                {
                                    htmlCssFilter && htmlCssFilter.map(project => <SingleProject key={project?._id} project={project} />)
                                }
                            </div>
                        </Tab.Pane>

                    </Tab.Content>

                </Tab.Container>
        </div>
    );
};

export default Projects;