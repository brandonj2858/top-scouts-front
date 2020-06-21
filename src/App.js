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
      <h1 className="nav-heading">Top Scouts</h1>
      <ul className="nav-bar">
        <li className="nav-item">Login</li>
        <li className="nav-item">Rankings</li>
        <li className="nav-item">Search</li>
      </ul>
      </header>
      <div> Yo</div>
    </div>
  );
}

export default App;
