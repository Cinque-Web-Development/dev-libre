import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import SideBar from '../SideBar/SideBar';

export default function NavBar({fetchLanguageVideos}) {
    return (
        <div className="nav-bar">
            <div className="accordion-section">
                <SideBar />
            </div>
            <div className="logo-section">
                <Link className="links" to="/"><img className="logo" alt="" src="/images/dev-libre.png"></img></Link>
            </div>
            <div className="links-section">
                <Link onClick={() => fetchLanguageVideos('javascript')} className="links" to='/javascript'>JavaScript</Link>
                <Link onClick={() => fetchLanguageVideos('react')} className="links" to='/react'>React</Link>
                <Link onClick={() => fetchLanguageVideos( 'python')} className="links" to='/python'>Python</Link>
                <Link onClick={() => fetchLanguageVideos('node')} className="links" to='/node'>Node</Link>
            </div>
        </div>
    )
}

