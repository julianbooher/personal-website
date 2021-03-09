import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
  } from 'react-router-dom';

import Navbar from '../Navbar/Navbar.jsx'

import './App.css';


function App() {
    
    
    return (
        <Router>
            <div>
                <Navbar />

            </div>
        </Router>
    );
}

export default App;