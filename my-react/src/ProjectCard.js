import React from 'react';

const ProjectCard=({photo,name,skills, link,id})=>{
    return(
        <div>
            <div >
                <p>{photo}</p>
                <h2 className="">{name}</h2>
                <p className="">{link}</p>
            
        </div>
        </div>
    )
}
export default ProjectCard;