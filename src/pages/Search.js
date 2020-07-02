import React, {useEffect, useState} from 'react';

const Search = (props) => {

  const [suggestions, setSuggestions] = useState([])
  const [players, setPlayers] = useState([])
  const [selection, setSelection] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/players')
    .then(res => res.json())
    .then(resObj => setPlayers(resObj))

  })



  const handleClick = (evt) => {

    const selectedPlayer = players.filter((player) => {
      return player.first_name + " " + player.last_name == evt.target.innerText
    })
    console.log(selectedPlayer[0].jersey)
    setSelection(selectedPlayer[0])
    console.log(selection)
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
    <div className="search-container">

      <div className="search-field">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <input placeholder="Search By Name" className="search-bar" onChange={handleChange} type="text"/>
        <button type="submit"><i class="fa fa-search"></i> </button>
      </div>

      <div className="suggestions-area">
        {suggestions.map((name) => <li className="suggestion-list" onClick={props.handleSet}>{name}</li>)}
      </div>



      


    </div>

  )
}

export default Search
