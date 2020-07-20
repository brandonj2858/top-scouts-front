import React, {useEffect, useState} from 'react';
import {BrowserRouter as  Redirect ,Link} from 'react-router-dom';
import App from '../App'

const Login = () => {
  const [loginValues, setLoginValues] = useState({})


  const handleLogin = (evt) => {
    fetch('http://localhost:3000/users/login', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
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
