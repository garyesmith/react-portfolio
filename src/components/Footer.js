import React from "react";
import "./Footer.css";

const Footer = (props) => {
    return (
        <>
            <footer>
                <p>&copy; <span id="copyright-year">{props.currYear}</span> {props.footerText}</p>
            </footer>
        </>
    )
}

export default React.memo(Footer);