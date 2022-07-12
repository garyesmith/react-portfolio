import React from "react";
import { Link } from 'react-router-dom'
import { Interweave } from 'interweave';
import "./Project.css";

const Project = (props) => {

    // build a link to the project, and add the correct category hash to the end of it
    let linkPath={ pathname: '/project/'+props.details.tag }; 
    props.categories.forEach(function(category) {
        if (category.id===props.details.category) {
            linkPath.hash='#'+category.tag;
            return false; // match found, exit loop
        }
    });

    return (
        <li className="project">
            <Link to={linkPath}>
                <img src={require('../images/'+props.details.image)} alt={props.details.title} />
                <div className="project-meta">
                    <h3>{props.details.title}</h3>
                    <p><Interweave content={props.details.description} /></p>
                </div>
            </Link>
        </li>
    )
}

export default Project;
