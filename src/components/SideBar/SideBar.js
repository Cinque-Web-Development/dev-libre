import React from 'react';
import './SideBar.css';
import {slide as Menu} from 'react-burger-menu';

export default function SideBar() {
    return (
        <Menu>
            <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Array Methods MDN</a>
        </Menu>
    )
}
