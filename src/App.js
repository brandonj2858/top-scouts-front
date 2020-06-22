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
      <header className="site-head">
      <div className="head-back">
      <h1 className="nav-heading">Top Scouts</h1>
      </div>
      <ul className="nav-bar">
        <li className="nav-item">Login</li>
        <li className="nav-item">Rankings</li>
        <li className="nav-item">Search</li>
      </ul>

      <div className="main-container">

      <div className="offense-container">
        <header className="offense-header">Offense</header>
        <ul className="offense-list"> </ul>


      </div>

      </div>

      </header>
      <div> </div>
    </div>
  );
}

export default App;
