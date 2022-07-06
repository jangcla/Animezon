import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
    }

    return (
        <div id="footer">
            <div id="to-top-of-page" onClick={scrollToTop}>
                Back to top
            </div>

            <div id="links-to-info-pages">
                Terms and Services
            </div>

            <div id="footer-logo">
                <img src="https://github.com/jangcla/Animezon/blob/info/photos/footer-logo.png?raw=true" />
            </div>

            <div id="footer-end-text">
                Copy © Animezon.com 2021-2022
            </div>
        </div>
    )
}

export default Footer;