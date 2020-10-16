import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';


const Rankings = () => {

  const [players, setPlayers] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [position, setPosition] = useState("RB")

  useEffect(() => {
    fetch('http://localhost:3000/players')
    .then(res => res.json())
    .then(resObj => setPlayers(resObj))



  })


  const handleChange = (evt) => {
    const input = evt.target.value
    const playerNames = players.map((player) => {
      return player.first_name + " " + player.last_name
    })
    if (input.length < 3) {
      setSuggestions([])
    }
    else {
      const regex = new RegExp(input, 'gi');
      const suggestions = playerNames.filter((name) => (regex.test(name)))
      console.log(suggestions)
      setSuggestions(suggestions)
    }
  }

  const handleClick = (evt) => {
    console.log(evt.target.innerText)
    const selectedPlayer = players.filter((player) => {
      return player.first_name + " " + player.last_name == evt.target.innerText
    })
    console.log(selectedPlayer)
  }

  const sortPlayers = (playe) => {
    return playe.sort((a, b) => {
      return a.rank - b.rank
    })

  }

  const filterPosition = (players) => {
    return players.filter((player) => {
      return player.position === position
    })


  }

  const handlePosChange = (evt) => {

    setPosition(evt.target.getAttribute('name'))
  }



    return (
        <div>

          <div className="main-container">

          <div className="left-column">

          <div className="offense-container">
            <header className="offense-header">Offense</header>
            <ul className="offense-list">
              <li onClick={handlePosChange} name="QB" className="pos-item">Quarterback </li>
              <li onClick={handlePosChange} name="RB" className="pos-item">Runningback </li>
              <li onClick={handlePosChange} name="FB" className="pos-item">FullBack </li>
              <li onClick={handlePosChange} name="OT" className="pos-item">Offensive Tackle</li>
              <li onClick={handlePosChange} name="G" className="pos-item">Offensive Gaurd </li>
              <li onClick={handlePosChange} name="TE" className="pos-item">Tight End</li>
              <li onClick={handlePosChange} name="WR" className="pos-item">Wide Reciever </li>
            </ul>
          </div>

          <div className="offense-container">
            <header className="offense-header">Defense</header>
            <ul className="offense-list">
            <li className="pos-item">Defensive Tackle</li>
            <li className="pos-item">Defensive End </li>
            <li className="pos-item">Inside Linebacker </li>
            <li className="pos-item">Outside Linebacker</li>
            <li className="pos-item">Corner Back</li>
            <li className="pos-item">Free Safety</li>
            <li className="pos-item">Strong Safety</li>
            </ul>
          </div>

          </div>

          <div className="middle-column-rank">
          <table className="rank-table">
            <tr>
              <th className="table-title">Rank</th>
              <th className="table-title">Full Name</th>
              <th className="table-title">School</th>
              <th className="table-title">Height</th>
              <th className="table-title">Weight</th>
              <th className="table-title">Hometown</th>
            </tr>


            {players ? filterPosition(sortPlayers(players)).slice(0,5).map((player) => {

            return (
            <tr className="table-values">
              <td>{player.rank}</td>
              <td className="player-page">{player.first_name + " " + player.last_name}</td>
              <td>{player.school}</td>
              <td>{player.height}</td>
              <td>{player.weight}</td>
              <td>{player.home_city}, {player.home_state}</td>
            </tr>)

            }): null}





            </table>



          </div>

          <div className="right-column">

          </div>

          </div>


          <div> </div>



        </div>
    )
}

export default Rankings
