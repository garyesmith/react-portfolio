import React from "react";
import PropTypes from 'prop-types';
import "./Header.css";
import logo from '../images/logo.png';
import background from '../images/header-bg.jpg';

const Header = (props) => {
    return (
        <>
            <header data-testid="header-element" style={{ backgroundImage: `url(${background})` }}>
                <article>
                <h1><a href={process.env.PUBLIC_URL}><img id="logo" src={logo} alt="Logo" />{props.siteName}</a></h1>
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
    siteName: "Default Site Name",
    siteDescription: "A description of the site will display here."
};

export default React.memo(Header);