import React from 'react';
import './SideBar.css';
import {slide as Menu} from 'react-burger-menu';

export default function SideBar() {
    return (
        <Menu>
          <h3 className="link-topics">General Reference</h3>
          <ul>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/">MDN</a>
            </li>
            <li>
            <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://stackabuse.com/">Stack Abuse</a>
            </li>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://www.w3schools.com/">W3Schools</a>
            </li>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://stackoverflow.com/">Stack Overflow</a>
            </li>
          </ul>
            <h3 className="link-topics">Language Docs</h3>
          <ul>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a>
            </li>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://reactjs.org/docs/getting-started.html">React</a>
            </li>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://docs.python.org/3/">Python</a>
            </li>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://docs.mongodb.com/manual/">MongoDB</a>
            </li>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://expressjs.com/en/starter/installing.html">Express</a>
              </li>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://docs.djangoproject.com/en/3.1/">Django</a>
            </li>
          </ul>
          <h3 className="link-topics">CSS Frameworks</h3>
          <ul>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://getbootstrap.com/">Bootstrap</a>
            </li>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://materializecss.com/">Materialize</a>
            </li>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://semantic-ui.com/">Semantic UI</a>
            </li>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://tailwindcss.com/">Tailwind</a>
            </li>
          </ul>
          <h3 className="link-topics">Coding Challenges</h3>
          <ul>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://www.hackerrank.com/">HackerRank</a>
            </li>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://www.codewars.com/">Code Wars</a>
            </li>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://leetcode.com/">Leetcode</a>
            </li>
          </ul>
          <h3 className="link-topics">Coding Sandboxes</h3>
          <ul>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://repl.it/">Repl.it</a>
            </li>
            <li>
              <a className="sidebar-links" target="_blank" rel="noreferrer" href="https://codepen.io/">CodePen</a>
            </li>
          </ul>
        </Menu>
    )
}
