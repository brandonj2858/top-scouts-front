import React, {useState, useEffect} from 'react';

import './App.css';
import Rankings from './pages/Rankings'
import Search from './pages/Search'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Home from './pages/Home'
import UserContext from './context/UserContext'

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';



function App(props) {
  const [userData, setUserData] = useState({token: undefined, user: undefined})
  const [tokenRes, setTokenRes] = useState({})

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token")
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = ""
      }
      fetch(`http://localhost:3000/users/tokenIsValid`, {
        method: "POST",
        headers: {
          "x-auth-token": token
        },
        body: null,
      })
      .then(res => res.json())
      .then(resObj=> setTokenRes({resObj}))
      if (tokenRes) {
      fetch(`http://localhost:3000/users/`, {
          headers: {
            "x-auth-token": token
          }
        })
      .then(res => res.json())
      .then(resObj => setUserData({token: token}))
      }

      console.log(userData,tokenRes, "here")
    }
    checkLoggedIn()
  }, [])

  const logOut = (evt) => {
    localStorage.setItem("auth-token", "");
    window.location.reload()
    console.log("Logged Out")

  }

  return (
    <Router>
    <UserContext.Provider value={{userData, setUserData}}>
    <div>
      <div className="bar-div">
      <header className="site-head">
      <div className="head-back">
      <Link to="/"><h1 className="nav-heading">Top Scouts</h1></Link>

      </div>
      </header>
      <ul className="nav-bar">
        <Link to="/"><li className="nav-item">Home</li></Link>
        <Link to="/rankings"><li className="nav-item">Rankings</li></Link>
        <Link to="/find"><li className="nav-item">Search</li></Link>
        {userData.user ? <li className="nav-item" onClick={logOut}>Logout</li> :<Link to="/login"> <li className="nav-item">Login</li> </Link> }
        {userData.user ? <li className="user-link">{userData.user} </li> : null}


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
    </UserContext.Provider>
    </Router>
  );
}

export default App;
