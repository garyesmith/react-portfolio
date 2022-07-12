import React from "react";
import "./ProjectCategory.css";
import Project from "./Project";

const ProjectCategory = (props) => {

    // loop to find and keep only the projects that match the requested category
    var categoryProjects=[];
    props.projects.forEach(function(project, i) {
        if (props.id === project.category) {
            categoryProjects.push(project);
        }
    });

    return (
        <article className="category">
            <span className="anchor" id={props.tag}></span>
            <h2>{props.name}</h2>
            <ul className="category-projects">
            {categoryProjects.map((project) => (
                <Project key={project.tag} details={project} categories={props.categories} />
            ))}
            </ul>
        </article>    
    )
}

export default React.memo(ProjectCategory);        