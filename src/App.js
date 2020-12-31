import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';

export default function App() {
    return (
        <Router>
            <NavBar />
        </Router>
    )
}
