import React from 'react';
import './Footer.css';


export default function Footer() {
    return (
        <div className="footer-section">
            <div className="design">
                &copy; 2020
                Design and Theme by <a className="names" target="_blank" rel="noreferrer" href="https://github.com/MJMoquin">Matt Moquin</a> & <a className="names" target="_blank" rel="noreferrer" href="https://github.com/samueltrahan">Samuel Trahan</a>
            </div>
            <div className="social-links">
            <h4>Visit Cinque Web Development</h4><br />
            <div>
            <a  target="_blank" rel="noreferrer" href="https://github.com/Cinque-Web-Development"><i className="socials fab fa-github fa-2x"></i></a>
            <a  href="https://twitter.com/cinquewebdev" target="_blank" rel="noreferrer"><i className="socials fab fa-twitter fa-2x"></i></a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/cinque-web-dev/"><i className="socials fab fa-linkedin fa-2x"></i></a>
            </div>
            </div>
        </div>
    )
}
