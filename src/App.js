import React, {useState, useEffect} from 'react';

import './App.css';
import Rankings from './pages/Rankings'
import Search from './pages/Search'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Home from './pages/Home'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';



function App() {


  return (
    <Router>
    <div>

      <div className="bar-div">
      <header className="site-head">
      <div className="head-back">
      <Link to="/"><h1 className="nav-heading">Top Scouts</h1></Link>

      </div>
      </header>
      <ul className="nav-bar">
        <Link to="/login"><li className="nav-item">Login</li></Link>
        <Link to="/rankings"><li className="nav-item">Rankings</li></Link>
        <Link to="/find"><li className="nav-item">Search</li></Link>
      </ul>
      </div>



      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route  path="/rankings" component={Rankings}/>
        <Route  path={`/search`} component={Search}/>
        <Route  path="/find" component={Admin}/>
        <Route  path="/login" component={Login}/>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
