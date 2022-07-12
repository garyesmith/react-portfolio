import React from "react";
import {Link} from 'react-router-dom';
import githubLogo from '../images/github.png';
import "./Footer.css";

const Footer = (props) => {

    let sourceCodeLink='';
    if (props.showSourceCodeLink) {
        sourceCodeLink=<Link className="source-link" to="https://github.com/garyesmith/react-portfolio" target="_blank"><img src={githubLogo} alt="GitHub logo" />View source</Link>
    }
    
    return (
        <>
            <footer>
                <p>&copy; <span id="copyright-year">{props.currYear}</span> {props.footerText}{sourceCodeLink}</p>
            </footer>
        </>
    )
}

export default React.memo(Footer);