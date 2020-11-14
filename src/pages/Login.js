import React, {useEffect, useState, useContext} from 'react';
import {BrowserRouter as  Redirect ,Link} from 'react-router-dom';
import App from '../App'
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';
import UserContext from '../context/UserContext'

const Login = (props) => {
  const [loginValues, setLoginValues] = useState({})
  const {userData, setUserData} = useContext(UserContext)



  //const dispatch = useDispatch();

  const handleLogin = async(evt) => {
    evt.preventDefault()


    await fetch(`http://localhost:3000/users/login`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        username: loginValues.username,
        password: loginValues.password
      })
    })
    .then(res => res.json())
    .then(resObj => {
      setUserData({token: resObj.token, user: resObj.user.username})
      localStorage.setItem("auth-token", JSON.stringify({
        user: resObj.user.username,
        token: resObj.token
      }))
      props.history.push('/');
    })
    .catch((e) => {
      var userPut = document.querySelector(".username-input")
      userPut.style.backgroundColor = "red"
      localStorage.setItem("auth-token", JSON.stringify({
        user: "",
        token: ""
      }))

      console.log(e)
    })

    //dispatch(userActions.loginUserToDB(loginValues));
    //setUserData(localStorage["auth-token"].user)


    //location.reload();
    console.log(userData)


  }

  const handleChange = (evt) => {
    evt.preventDefault()

    let loginValuesCopy = {...loginValues}
    loginValuesCopy[evt.target.name] = evt.target.value
    setLoginValues(loginValuesCopy)

  }


  return (
    <div >


    <div className="login-area">

      <div className="form-area">
        <form onChange={handleChange} onSubmit={handleLogin}>
          <input placeholder="Username" className="username-input" type="text" name="username"/>
          <br/>
          <input  placeholder="Password" className="pass-input" type="password" name="password"/>
          <br/>
          <input style={{marginTop: "5px"}} type="submit" className="login-submit" value="Log In"/>
        </form>
        <div>
          <a className="resetLink">
          Forgot Password
          </a>
          <div className="border-div">
          </div>
          <button className="create-button">Create Account</button>
        </div>
      </div>

    </div>


    </div>

  )
}


export default Login
