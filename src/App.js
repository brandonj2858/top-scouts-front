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
    <div className="App">
      Top Scouts
    </div>
  );
}

export default App;
