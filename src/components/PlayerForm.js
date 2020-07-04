import React, {useEffect, useState} from 'react'
import Search from '../pages/Search'


const PlayerForm = () => {

  const [teams, setTeams] = useState([])
  const [selection, setSelection] = useState([])
  const [selectedTeam, setSelectedTeam] = useState([])
  const [showProf, setShowProf] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/teams')
    .then(res => res.json())
    .then(resObj => setTeams(resObj))


  })


  const handleSet = (evt, sel) => {

    setSelection(sel)



  }

  const filterTeam = () => {
    console.log(selection)
    const teamFound = teams.filter((team) => {
      return team.school === selection.school
    })
    console.log(selectedTeam)
    setSelectedTeam(teamFound[0].logos[0])
  }



  return (
    <div style={{width: "70%",textAlign: "center"}}>




    <Search filterTeam={filterTeam} handleSet={handleSet}/>
    <div className="results-container">

      <div>
        {selection.first_name} {selection.last_name}
        {selection.id}

      </div>
      <div >
        
        {selectedTeam === undefined ? null : <img className="school-logo" src={selectedTeam}/>}

      </div>

    </div>

    </div>
  )

}

export default PlayerForm
