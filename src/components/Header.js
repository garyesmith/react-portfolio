import React from "react";
import "./Header.css";
import logo from '../images/logo.png';
import background from '../images/header-bg.jpg';

const Header = (props) => {
    return (
        <>
            <header style={{ backgroundImage: `url(${background})` }}>
                <article>
                <h1><img id="logo" src={logo} alt="Logo" /> {props.siteName}</h1>
                <h2>{props.siteDescription}</h2>
                </article>
            </header>
        </>
    )
}

export default React.memo(Header);