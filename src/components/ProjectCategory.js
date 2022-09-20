import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import "./ProjectCategory.css";
import Project from "./Project";

const growInProjectBoxes = () => {
    const projectElements = document.querySelectorAll(".project")
    for (let i=0; i<projectElements.length; i++) {
        if (!projectElements[i].classList.contains("animate-grow-in") && projectElements[i].getBoundingClientRect().top>=0 && projectElements[i].getBoundingClientRect().bottom <= (window.innerHeight+200 || document.documentElement.clientHeight+200)) {
            projectElements[i].classList.add("animate-grow-in");
        }
    }
    if (projectElements.length === document.getElementsByClassName("animate-grow-in").length) {
        window.removeEventListener("scroll", growInProjectBoxes);
    }
}

const ProjectCategory = (props) => {

    // some animation to "pop in" the the projects boxes when they scroll into view
    useEffect(() => {
        window.addEventListener("scroll", growInProjectBoxes);
        growInProjectBoxes();
    }, []);

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