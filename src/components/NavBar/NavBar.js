import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import SideBar from '../SideBar/SideBar';

export default function NavBar({setProgrammingLanguage}) {
    return (
        <div className="nav-bar">
            <div className="accordion-section">
                <SideBar />
            </div>
            <div className="logo-section">
                <Link className="links" to="/"><img className="logo" alt="" src="/images/dev-libre.png"></img></Link>
            </div>
            <div className="links-section">
                <Link onClick={() => setProgrammingLanguage('javascript')} className="links" to='/javascript'>JavaScript</Link>
                <Link onClick={() => setProgrammingLanguage('react')} className="links" to='/react'>React</Link>
                <Link onClick={() =>setProgrammingLanguage( 'python')} className="links" to='/python'>Python</Link>
                <Link onClick={() => setProgrammingLanguage('node')} className="links" to='/node'>Node</Link>
            </div>
        </div>
    )
}

