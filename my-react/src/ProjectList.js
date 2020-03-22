import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList=({projects})=>{
    return(
        <div>
            {
            projects.map((user,i)=>{
            return(
            <ProjectCard 
            //image={projects[i].image}
            key={projects[i].id}
            name={projects[i].name}
            link={projects[i].link}
            />
            );
            
            })
          }
        </div>
    );
}
export default ProjectList;