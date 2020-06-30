import React, {useEffect, useState} from 'react';

const Search = (props) => {

  const [suggestions, setSuggestions] = useState([])
  const [players, setPlayers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/players')
    .then(res => res.json())
    .then(resObj => setPlayers(resObj))

  })

  const handleClick = (evt) => {
    console.log(evt.target.innerText)
    const selectedPlayer = players.filter((player) => {
      return player.first_name + " " + player.last_name == evt.target.innerText
    })
    console.log(selectedPlayer)
  }

  const handleChange = (evt) => {
    const input = evt.target.value;
    const playerNames = players.map((player) => {
      return player.first_name + " " + player.last_name
    })
    if (input.length < 3) {
      setSuggestions([])
    }
    else {
      const regex = new RegExp(input, 'gi')
      const suggestions = playerNames.filter((name) => (regex.test(name)))
      setSuggestions(suggestions)
    }

  }



  return(
    <div>
      <input onChange={handleChange} type="text"/>
      {suggestions.map((name) => <li onClick={handleClick}>{name}</li>)}
    </div>

  )
}

export default Search
