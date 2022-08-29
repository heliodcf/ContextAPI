import { useState } from "react";
import ProjectCard from "./ProjectCard";

import projectsData from '../projects-data.json'

const ProjectsPage = () => {
  const [projects, setProjects] = useState(projectsData);
  return (
    <div className="ProjectPage">
      <h1> ProjectsPage </h1>
      <div className='projects'>
        {projects.map((project) => 
          <ProjectCard key={project._id} project={project}/>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
