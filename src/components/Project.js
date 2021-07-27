import React from 'react';

function Project({projectsData}){

const {name, picture, description, deployedLink , githubLink} = projectsData;
return (
        <div>
            <h6>{name}</h6>
            <h6>{description}</h6>
            <h6>{picture}</h6>
            <h6>{deployedLink}</h6>
            <h6>{githubLink}</h6>
        </div>
)
}


export default Project;