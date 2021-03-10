import React from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
  } from 'react-router-dom';

import Navbar from '../Navbar/Navbar.jsx';
import Home from '../Home/Home.jsx';

import './App.css';


function App() {
    
    
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path="/home" component={Home}/>


                </Switch>
            </div>
        </Router>
    );
}

export default App;