import React from 'react';
import Navbar from "./Navbar";
import Project from "./Project"
import Data from "../data/projects.json"

function Projects () {
    return (
    <div>
        {Data.map((projectsData)=>(
            <Project projectsData={projectsData}/>
        ))}
    </div>)
    
}

export default Projects;