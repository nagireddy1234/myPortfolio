import React, { useState } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ReactProjects from './Projects/ReactProjects';

const Projects = () => {
    
    return (
        <div className="project-container container">
            <div className="main-project-container" style={{backgroundColor:"#fff"}}>
                <Tabs defaultActiveKey="reactJs" className="justify-content-center" variant="pills">
                    <Tab eventKey="reactJs" title="React JS">
                        <ReactProjects />
                    </Tab>
                    <Tab eventKey="html" title="HTML">
                        <h1>HTML</h1>
                    </Tab>
                    <Tab eventKey="bootstrap" title="Bootstrap" >
                    <h1>Bootstrap</h1>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default Projects;

