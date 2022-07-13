import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Interweave } from 'interweave';

import "./ProjectDetails.css";

const ProjectDetails = (props) => {

    let { tag } = useParams();

    let thisProject = {
        title: "",
        tag: "",
        image: "",
        description: ""
    };

    let prevLinkUrl, nextLinkUrl="";
    let prevLink, nextLink=<></>;

    // find details for requested project
    props.projects.forEach(function(project, i) {
        if (project.tag===tag) {
            thisProject=project;
            if (i>0) {
                prevLinkUrl='/project/'+props.projects[i-1].tag+window.location.hash;
                prevLink=<Link to={prevLinkUrl} className="prev-link">&laquo; Previous</Link>
            } else {
                prevLink=<span className="link-placeholder">&nbsp;</span>;
            }
            if (i<props.projects.length-1) {
                nextLinkUrl='/project/'+props.projects[i+1].tag+window.location.hash;
                nextLink=<Link to={nextLinkUrl} className="next-link">Next &raquo;</Link>
            }
            return false;
        }
    });   

    let listLink='/';
    if (window.location.hash.length) {
        listLink+=window.location.hash;
    }

    // render image only if exists
    let imageTag='';
    if (thisProject.image.length) {
        imageTag=<img src={require('../images/'+thisProject.image)} alt={thisProject.title} />
    }

    return (
       <section>
        <article>
            <div className="project-details">
                {imageTag}
                <h3>{thisProject.title}</h3>
                <p><Interweave content={thisProject.body} /></p>
                <div className="project-links">
                    {prevLink}
                    <Link to={listLink} className="list-link">List</Link>
                    {nextLink}
                </div>
            </div>
            </article>
       </section>
    )

}

ProjectDetails.propTypes = {
    key: PropTypes.string.isRequired,
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

ProjectDetails.defaultProps = {
    key: "",
    categories: [{
        "id": "",
        "name": "",
        "tag": ""
    }],
    details: {
        "id": "",
        "title": "",
        "tag": "",
        "category": "",
        "image": "",
        "description": "",
        "body": ""
    }
};

export default ProjectDetails;
