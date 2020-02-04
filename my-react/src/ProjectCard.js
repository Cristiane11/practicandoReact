import React from 'react';

const ProjectCard=({name,skills,photo, link,id})=>{
    return(
        <div>
            <div >
                <h2 className="">{name}</h2>
                <h3>{photo}</h3>
                <p className="">{link}</p>
            
        </div>
        </div>
    )
}
export default ProjectCard;