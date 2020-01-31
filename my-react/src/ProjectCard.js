import React from 'react';

const ProjectCard=({name,skills,photo, link,id})=>{
    return(
        <div>
            <div >
            <img alt =""src={photo} className=''/>
            <div>
                <h2 className="">{name}</h2>
                <p className="">{link}</p>
            </div>
        </div>
        </div>
    )
}
export default ProjectCard;