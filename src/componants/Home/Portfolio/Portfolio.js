import React from 'react';
import { Button, Nav, Tab } from 'react-bootstrap';
import './Portfolio.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import SingleProject from './SingleProject';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const reactProjectsFilter = projects.filter(project => project.usedLib === "React");
    const htmlCssFilter = projects.filter(project => project.usedLib === "html & css");
    const javascriptFilter = projects.filter(project => project.usedLib === "javascript");
    const typescriptFilter = projects.filter(project => project.usedLib === "typescript");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("projects.json")
            .then(res => setProjects(res.data))
    }, [])

    return (
        <section id='projects' className='my-5 py-5'>
            <div className='container'>
                <h1 className='text-center my-3'>Recent Projects</h1>
                <p className='text-center mb-5'>I have my recent project with React also by using other technologies. You can check by clicking live preview.</p>

                {/* Normal tabs are working .....................................*/}

                {/* <Tabs defaultActiveKey="bootstrap" className="mb-3" fill>
                    <Tab eventKey="all" title="All Projects">
                        <h1>All Projects</h1>
                    </Tab>

                    <Tab eventKey="react" title="React">
                        <h1>React Projects</h1>
                    </Tab>

                    <Tab eventKey="bootstrap" title="Bootstrap" >
                        <h1>Bootstrap Projects</h1>
                    </Tab>

                    <Tab eventKey="nextJs" title="Next Js" >
                        <h1>Next Js Projects</h1>
                    </Tab>
                </Tabs> */}

                {/* Normal tabs are working .....................................*/}

                {/* starting pills tab work ...................................... */}

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
                            {
                                typescriptFilter && typescriptFilter.map(project => <SingleProject key={project?._id} project={project} />)
                            }

                        </Tab.Pane>
                        <Tab.Pane eventKey="htmlCss">

                            <div className='row'>
                                {
                                    htmlCssFilter && htmlCssFilter.map(project => <SingleProject key={project?._id} project={project} />)
                                }
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="javascript">
                            <div className='row'>
                                {
                                    javascriptFilter && javascriptFilter.map(project => <SingleProject key={project?._id} project={project} />)
                                }
                            </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="uiUx">
                            <h1 className='text-center'>Check My Behance Profile To see Projects</h1>
                            <a target="_blank" className='text-center d-block' href="https://www.behance.net/mdmasudrony">Behance Profile Link</a>
                        </Tab.Pane>




                    </Tab.Content>

                </Tab.Container>

                {/*  <div className='row'>
                    {
                        projects && projects.map(project => <SingleProject key={project?._id} project={project} />)
                    }
                </div> */}

            </div>
            <div className='text-center my-5'>
                <Button onClick={() => navigate("/projects")} >See All Projects</Button>
            </div>



        </section>
    );
};

export default Portfolio;