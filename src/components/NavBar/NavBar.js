import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {slide as Menu} from 'react-burger-menu';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <div className="accordion-section">
                <Menu>
                    <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array Methods MDN</a>
                </Menu>
            </div>
            <div className="logo-section">
                <Link className="links" to="/"><img className="logo" alt="" src="/images/dev-libre.png"></img></Link>
            </div>
            <div className="links-section">
                <Link className="links" to='/react'>React</Link>
                <Link className="links" to='/python'>Python</Link>
                <Link className="links" to='/node'>Node</Link>
            </div>
        </div>
    )
}

