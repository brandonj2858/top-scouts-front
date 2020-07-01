import React, {useEffect, useState} from 'react'
import Search from '../pages/Search'


const PlayerForm = () => {

  const [players, setPlayers] = useState([])
  const [selection, setSelection] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/players')
    .then(res => res.json())
    .then(resObj => setPlayers(resObj))

  })

  const handleSet = (evt) => {
    const selectedPlayer = players.filter((player) => {
      return player.first_name + " " + player.last_name == evt.target.innerText
    })
    console.log(selectedPlayer[0].jersey)
    setSelection(selectedPlayer[0])
    console.log(selection)
  }

  return (
    <div style={{width: "70%",textAlign: "center"}}>
    <Search handleSet={handleSet}/>
    {selection.id}

    </div>
  )

}

export default PlayerForm
