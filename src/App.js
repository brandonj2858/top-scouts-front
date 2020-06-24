import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [teams, setTeams] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/teams')
    .then(res => res.json())
    .then(resObj => setTeams(resObj))
  })

  return (
    <div>

      <div className="bar-div">
      <header className="site-head">
      <div className="head-back">
      <h1 className="nav-heading">Top Scouts</h1>
      </div>
      </header>
      <ul className="nav-bar">
        <li className="nav-item">Login</li>
        <li className="nav-item">Rankings</li>
        <li className="nav-item">Search</li>
      </ul>
      </div>

      <div className="main-container">

      <div className="left-column">

      <div className="offense-container">
        <header className="offense-header">Offense</header>
        <ul className="offense-list">
        <li className="pos-item">Quarterback </li>
        <li className="pos-item">Runningback </li>
        <li className="pos-item">FullBack </li>
        <li className="pos-item">Offensive Tackle</li>
        <li className="pos-item">Offensive Gaurd </li>
        <li className="pos-item">Tight End</li>
        <li className="pos-item">Wide Reciever </li>




        </ul>
      </div>

      </div>

      <div className="middle-column">
      news
      </div>

      <div className="right-column">
      stuff
      </div>

      </div>


      <div> </div>
    </div>
  );
}

export default App;
