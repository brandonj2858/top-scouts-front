import React, {useEffect, useState} from 'react';

const Search = (props) => {

  const [suggestions, setSuggestions] = useState([])
  const [players, setPlayers] = useState([])
  const [selection, setSelection] = useState([])
  const [chosenPlayer, setChosenPlayer] = useState("")
  const [userInput, setUserInput] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(true)


  useEffect(() => {
    fetch('http://localhost:3000/players')
    .then(res => res.json())
    .then(resObj => setPlayers(resObj))
    .then(console.log("done"))

  })



  const handleClick = (evt) => {

    const selectedPlayer = players.filter((player) => {
      return player.first_name + " " + player.last_name == evt.target.innerText
    })
    props.handleSet(evt, selectedPlayer[0])

    setUserInput(evt.target.innerText)
    //setShowSuggestions(false)

    setSelection(selectedPlayer[0])
    setSuggestions([])

  }

  const handleChange = (evt) => {
    setUserInput(evt.target.value );

    const playerNames = players.map((player) => {
      return player.first_name + " " + player.last_name
    })
    if (userInput.length < 3) {
      setSuggestions([])
    }
    else {
      const regex = new RegExp(userInput, 'gi')
      const suggestions = playerNames.filter((name) => (regex.test(name)))

      setSuggestions(suggestions)

    }

  }

  const handleSearch = (evt) => {

  }



  return(
    <div className="search-container">

      <div className="search-field">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <input placeholder="Search By Name" className="search-bar" onChange={handleChange} value={userInput} type="text"/>
        <button type="submit" onClick={props.filterTeam}><i className="fa fa-search"></i> </button>
      </div>

      <div className="suggestions-area">
        {suggestions.map((name, index) => <li className="suggestion-list" key={index} onClick={handleClick}>{name}</li>) }

      </div>






    </div>

  )
}

export default Search
