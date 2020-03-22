import React from 'react';

const ProjectCard=({name,skills, link,id})=>{
    return(
        <div>
           <p>Skills:{skills}</p>
            <h2>Project Name:{name}</h2>
            <a href={link}>Click to see it</a>
        </div>
    )
}
export default ProjectCard;