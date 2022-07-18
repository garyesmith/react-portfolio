import React from "react";
import PropTypes from 'prop-types';
import "./Header.css";
import logo from '../images/logo.png';
import background from '../images/header-bg.jpg';

const Header = (props) => {
    return (
        <>
            <header style={{ backgroundImage: `url(${background})` }}>
                <article>
                <h1><a href={process.env.PUBLIC_URL}><img id="logo" src={logo} alt="Logo" /></a> {props.siteName}</h1>
                <h2>{props.siteDescription}</h2>
                </article>
            </header>
        </>
    )
}

Header.propTypes = {
    siteName: PropTypes.string.isRequired,
    siteDescription: PropTypes.string.isRequired
};

Header.defaultProps = {
    siteName: "",
    siteDescription: ""
};

export default React.memo(Header);