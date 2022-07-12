import React from "react";
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Interweave } from 'interweave';

import "./ProjectDetails.css";

const ProjectDetails = (props) => {

    let { tag } = useParams();

    let thisProject={
        title: "",
        tag: "",
        image: "",
        description: ""
    };

    // find details for requested project
    props.projects.forEach(function(project, i) {
        if (project.tag===tag) {
            thisProject=project;
            return false;
        }
    });   

    let backLink='/';
    if (window.location.hash.length) {
        backLink+=window.location.hash;
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
                <h3>{thisProject.title}</h3>
                {imageTag}
                <p><Interweave content={thisProject.body} /></p>
                <Link to={backLink}>&laquo; Back</Link>
            </div>
            </article>
       </section>
    )

}

export default React.memo(ProjectDetails);
