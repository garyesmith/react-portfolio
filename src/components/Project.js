import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

    const dynamicImage = require('../images/'+props.details.image);

    return (
        <li className="project">
            <Link to={linkPath}>
                <img src={dynamicImage} alt={props.details.title} />
                <div className="project-meta">
                    <h3>{props.details.title}</h3>
                    <p><Interweave content={props.details.description} /></p>
                </div>
            </Link>
        </li>
    )

}

Project.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        "id": PropTypes.string.isRequired,
        "name": PropTypes.string.isRequired,
        "tag": PropTypes.string.isRequired
    })).isRequired,
    details: PropTypes.shape({
        "id": PropTypes.string.isRequired,
        "title": PropTypes.string.isRequired,
        "tag": PropTypes.string.isRequired,
        "category": PropTypes.string.isRequired,
        "image": PropTypes.string.isRequired,
        "description": PropTypes.string.isRequired,
        "body": PropTypes.string.isRequired
    }).isRequired
};

Project.defaultProps = {
    categories: [{
        "id": "",
        "name": "",
        "tag": ""
    }],
    details: {
        "id": "",
        "title": "Default Project Title",
        "tag": "",
        "category": "",
        "image": "",
        "description": "",
        "body": ""
    }
};

export default Project;
