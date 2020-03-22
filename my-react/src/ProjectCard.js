import React from 'react';

const ProjectCard=({image,name,skills, link})=>{
    return(
        <div>
            <p>{image}</p>
            <h2>{name}</h2>
            <a href={link}>Click to see it</a>
        </div>
    )
}
export default ProjectCard;