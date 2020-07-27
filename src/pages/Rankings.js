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



    return (
        <div>

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
            <tr>
              <td>{player.rank}</td>
              <td>{player.first_name + " " + player.last_name}</td>
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
