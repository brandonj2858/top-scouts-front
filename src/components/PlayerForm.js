import React, {useEffect, useState} from 'react'
import Search from '../pages/Search'


const PlayerForm = () => {

  const [teams, setTeams] = useState([])
  const [selection, setSelection] = useState([])
  const [selectedTeam, setSelectedTeam] = useState([])
  const [showProf, setShowProf] = useState(true)
  const [teamColors, setTeamColors] = useState("")
  const [formValues, setFormValues] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/teams')
    .then(res => res.json())
    .then(resObj => setTeams(resObj))



  })


  const handleSet = (evt, sel) => {

    setFormValues({
      rank: sel.rank,
      scouting_report: sel.scouting_report
    })

    setSelection(sel)





  }

  const intRange = () => {
    const max = 999
    const rangeArr = []
    for (let i = 0; i < max; i++) {
      if( i <= 999) {
        rangeArr.push(i)
      }
    }

    return rangeArr
  }

  const filterTeam = () => {

    const teamFound = teams.filter((team) => {
      return team.school === selection.school
    })
    console.log(selectedTeam)
    setTeamColors(teamFound[0].color)
    setSelectedTeam(teamFound[0].logos[0])

  }

  const handleUpdate = (evt) => {
    evt.preventDefault()
    console.log('going')

    fetch(`http://localhost:3000/players/${selection.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formValues)
    })
    .then(res => res.json())
    .then(resObj => console.log(resObj))


  }

  const handleChange = (evt) => {
    evt.preventDefault()
    console.log(evt.target.value);
    let formValuesCopy = {...formValues}
    formValuesCopy[evt.target.name] = evt.target.value
    setFormValues(formValuesCopy)

  }



  return (
    <div style={{width: "90%",textAlign: "center"}}>




    <Search filterTeam={filterTeam} handleSet={handleSet}/>
    <div className="results-container">
      
      <div className="prof-div" >

        {selectedTeam.length === 0 ? null :
          <div className="player-div">
            <img className="school-logo" src={selectedTeam}/>
            <div style={{display: "flex", flexFlow: "wrap"}}>
              <li className="prof-li"><span className="attributes">Name</span> <strong className="attributes-value" style={{color: teamColors}}>{selection.first_name} {selection.last_name} </strong></li>
              <li className="prof-li"><span className="attributes"> Position </span> <strong className="attributes-value" style={{color: teamColors}} >{selection.position}</strong></li>
              <li className="prof-li"><span className="attributes"> Height </span> <strong className="attributes-value" style={{color: teamColors}} >{selection.height}</strong></li>
              <li className="prof-li"><span className="attributes"> weight </span> <strong className="attributes-value" style={{color: teamColors}} >{selection.weight}</strong></li>
              <li className="prof-li"><span className="attributes"> School </span> <strong className="attributes-value" style={{color: teamColors}} >{selection.school}</strong></li>




            </div>

            <form onChange={handleChange} onSubmit={handleUpdate} className="update-form">
            Rank: <select type="number" value={formValues["rank"]}  name="rank"  >
              {intRange().map((num) => {return <option   >{num}</option>})}
            </select>
            <textarea className="scout-input" type="textarea" value={formValues["scouting_report"]}  name="scouting_report"/>

            <input type="submit" value="Submit"/>

            </form>




          </div>

        }


      </div>

    </div>

    </div>
  )

}

export default PlayerForm
