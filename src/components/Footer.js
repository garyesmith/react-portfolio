import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import githubLogo from '../images/github.png';
import "./Footer.css";

const Footer = (props) => {

    let sourceCodeLink='';
    if (props.showSourceCodeLink) {
        sourceCodeLink=<Link className="source-link" to={{ pathname: "https://github.com/garyesmith/react-portfolio" }} target="_blank"><img src={githubLogo} alt="GitHub logo" />View source</Link>
    }
    
    return (
        <>
            <footer>
                <p>&copy; <span id="copyright-year">{new Date().getFullYear()}</span> {props.footerText}{sourceCodeLink}</p>
            </footer>
        </>
    )
}

Footer.propTypes = {
    footerText: PropTypes.string.isRequired,
    showSourceCodeLink: PropTypes.bool.isRequired
};

Footer.defaultProps = {
    footerText: "",
    showSourceCodeLink: true
};

export default React.memo(Footer);