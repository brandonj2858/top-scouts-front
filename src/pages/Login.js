import React, {useEffect, useState} from 'react';
import {BrowserRouter as  Redirect ,Link} from 'react-router-dom';
import App from '../App'
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';

const Login = () => {
  const [loginValues, setLoginValues] = useState({})

  const dispatch = useDispatch();

  const handleLogin = (evt) => {

    fetch(`http://localhost:3000/users/login`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(loginValues)
    })
    .then(res => {
      localStorage.setItem('usertoken', res)
      console.log(res.user)
      return res.data
    })
    dispatch(userActions.loginUserToDB(loginValues));
    /*props.history.push('/');*/




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

      <div className="form-area">
        <h2>LOGIN </h2>
        <form onChange={handleChange} onSubmit={handleLogin}>
          <input placeholder="Username" className="username-input" type="text" name="username"/>
          <br/>
          <input  placeholder="Password" className="pass-input" type="password" name="password"/>
          <br/>
          <input style={{marginTop: "5px"}} type="submit" className="login-submit" value="Submit"/>
        </form>
      </div>

    </div>


    </div>

  )
}


export default Login
