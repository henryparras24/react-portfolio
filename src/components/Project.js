import React from 'react';

function Project({ projectsData }) {

    const { name, picture, description, deployedLink, githubLink } = projectsData;
    return (


        <div class="card" style={{width: 18+'rem'}}>
            <img src={picture} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{description}</p>
                <a href={githubLink} class="btn btn-primary">Github</a>
                <a href={deployedLink} class="btn btn-primary">Deployed</a>
            </div>
        </div>


    )
}


export default Project;