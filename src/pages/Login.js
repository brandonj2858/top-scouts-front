import React, {useEffect, useState} from 'react';
import {BrowserRouter as  Redirect ,Link} from 'react-router-dom';
import App from '../App'

const Login = () => {
  const [loginValues, setLoginValues] = useState({})


  const handleLogin = (evt) => {
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "Accept" : "application/json"
      },
      body: JSON.stringify(loginValues)
    })
    .then(res => res.json())
    .then(resObj => console.log(resObj))


  }

  const handleChange = (evt) => {
    evt.preventDefault()
    console.log(evt.target.value);
    let loginValuesCopy = {...loginValues}
    loginValuesCopy[evt.target.name] = evt.target.value
    setLoginValues(loginValuesCopy)

  }


  return (
    <div >
    <div className="bar-div">
    <header className="site-head">
    <Redirect to="/"><div className="head-back">
    <Link to="/"><h1 className="nav-heading">Top Scouts</h1></Link>
    </div></Redirect>
    </header>
    <ul className="nav-bar">
      <li className="nav-item">Login</li>
      <li className="nav-item">Rankings</li>
      <li className="nav-item">Search</li>
    </ul>
    </div>

    <div className="login-area">

    <form onChange={handleChange} onSubmit={handleLogin}>
      Username:<input type="text" name="username"/>
      Password:<input type="password" name="password"/>
      <input type="submit" value="Submit"/>
    </form>

    </div>


    </div>

  )
}


export default Login
