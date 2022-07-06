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
                <Link id="footer-link" to="/about/animzezon">
                    Learn About Animezon
                </Link>

                <Link id="footer-link" to="/about/functions">
                    Animezon functions
                </Link>

                <Link id="footer-link" to="/about/terms-services">
                    Terms and Services
                </Link>
            </div>

            <div id="footer-logos">
                <Link to='/'>
                    <img src="https://github.com/jangcla/Animezon/blob/info/photos/footer-logo-2.png?raw=true" id="footer-logo"/>
                </Link>

                <div id="author-links">
                    <a href="https://github.com/jangcla" target="_blank">
                        <img src="https://github.com/jangcla/Animezon/blob/info/photos/git-logo.png?raw=true" id="footer-social-logo"/>
                    </a>

                    <a href="https://www.linkedin.com/in/john-angcla-1418a9213/" target="_blank">
                        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png" id="footer-social-logo"/>
                    </a>

                    <a href="https://johnangcla.com" target="_blank">
                        <img src="https://raw.githubusercontent.com/jangcla/portfolio/main/assets/img/ja-logo.png" id="footer-personal-logo"/>
                    </a>
                    
                </div>
            </div>

            <div id="footer-end-text">
                Copy © Animezon.com 2021-2022
            </div>
        </div>
    )
}

export default Footer;