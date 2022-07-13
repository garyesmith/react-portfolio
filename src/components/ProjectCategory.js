import React from "react";
import PropTypes from 'prop-types';
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

ProjectCategory.propTypes = {
    id: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape({
        "id": PropTypes.string.isRequired,
        "title": PropTypes.string.isRequired,
        "tag": PropTypes.string.isRequired,
        "category": PropTypes.string.isRequired,
        "image": PropTypes.string.isRequired,
        "description": PropTypes.string.isRequired,
        "body": PropTypes.string.isRequired
    })).isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
        "id": PropTypes.string.isRequired,
        "name": PropTypes.string.isRequired,
        "tag": PropTypes.string.isRequired
    })).isRequired
}

ProjectCategory.defaultProps = {
    id: "",
    tag: "",
    name: "",
    projects: [{
        "id": "",
        "title": "",
        "tag": "",
        "category": "",
        "image": "",
        "description": "",
        "body": ""
    }],
    categories: [{
        "id": "",
        "name": "",
        "tag": ""
    }]
};

export default ProjectCategory;