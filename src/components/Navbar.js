import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import hamburger from '../images/menu.png';
import { NavHashLink } from 'react-router-hash-link';
import "./Navbar.css";

const Navbar = (props) => {

    const [navIsOpen, setNavIsOpen] = useState(false);

    const toggleNav = () => {
        setNavIsOpen(!navIsOpen);
    };

    // stick the navbar to the top when the page scrolls
    useEffect(() => {
        const navBar = document.getElementById('primary');
        let initialNavbarTop=0;
        const onScroll = (event) => {       
            if (initialNavbarTop===0) {
                initialNavbarTop=navBar.offsetTop+navBar.style.height;
            }              
            if (window.scrollY>initialNavbarTop) {
                navBar.classList.add("stuck");
            } else {
                navBar.classList.remove("stuck");
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    return (
        <nav id="primary" style={{backgroundColor: props.navColor, borderColor: props.navColor}}>
            <img className="mobile-nav" onClick={toggleNav} src={hamburger} alt="Mobile Navigation" />
            <ul className={navIsOpen ? "show" : "unselectable"} style={{backgroundColor: props.navColor}}>
            <li className="current">
                <NavHashLink 
                    to="/#" 
                    isActive={() => {
                        return window.location.hash === '#/' || !window.location.hash.length;
                    }} 
                    onClick={() => {setNavIsOpen(false)}}
                >
                    Home
                </NavHashLink>
            </li>
            {props.categories.map((category) => (
                <li key={category.tag}>
                    <NavHashLink
                        to={"/#"+category.tag}
                        isActive={() => {
                            return window.location.hash === "#"+category.tag;
                        }} 
                        onClick={() => {setNavIsOpen(false)}} 
                        style={{backgroundColor: props.navColor}}
                    >
                        {category.name}
                    </NavHashLink>
                </li>
            ))}
            </ul>
            <p className="clear">&nbsp;</p>
        </nav>
    )

}

Navbar.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        "id": PropTypes.string.isRequired,
        "name": PropTypes.string.isRequired,
        "tag": PropTypes.string.isRequired
    })).isRequired,
    navColor: PropTypes.string
};

Navbar.defaultProps = {
    categories: [{
        "id": "",
        "name": "",
        "tag": ""
    }],
    navColor: "black"
}

export default React.memo(Navbar);