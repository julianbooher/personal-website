import React from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
  } from 'react-router-dom';

import Navbar from '../Navbar/Navbar.jsx';
import Home from '../Home/Home.jsx';
import Resume from '../Resume/Resume.jsx';
import Projects from '../Projects/Projects.jsx';

import './App.css';


function App() {
    
    
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path="/home" component={Home}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/projects" component={Projects}/>


                </Switch>
            </div>
        </Router>
    );
}

export default App;