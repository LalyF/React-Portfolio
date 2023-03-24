import React from "react";
import Project from "./Project";
import projects from './projects.json'
import { Link, Route, Routes } from 'react-router-dom';
function ProjectGallery() {
  console.log(projects);
  return (
    <div>
      <h1>Projects</h1>
      <section style={{display: "flex",flexWrap: "wrap"}}>
{projects.map(function(project){
  return  <Project key={project.pid} title={project.ptitle} image={project.image} link={project.link}/>
})}


      </section>
      {/* <Link to="project1" role="button" className="btn btn-link">
        Project1
      </Link> */}
      {/* <Link to="project2" role="button" className="btn btn-link">
       project2
      </Link> */}
      {/* <Routes>
        <Route path="project1" element={<Project name={projects.ptitle}/>} />
      </Routes> */}
      </div>
      )
}

export default ProjectGallery;
