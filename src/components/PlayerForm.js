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

      <div className="prof-div" >

        {selectedTeam.length === 0 ? null :
          <div>
            <img className="school-logo" src={selectedTeam}/>
            <div style={{display: "flex"}}>
              <li className="prof-li"><span className="attributes">Name</span> <strong>{selection.first_name} {selection.last_name} </strong></li>
              <li className="prof-li"><span className="attributes"> Position </span> <strong>{selection.position}</strong></li>



            </div>

            <form className="update-form">
            Rank: <select type="number" name="rank"  default={selection.rank}>
              {intRange().map((num) => {return <option value={selection.rank} selected>{num}</option>})}
            </select>
            <textarea className="scout-input" type="textarea" default={selection.scouting_report} name="scouting_report"/>
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
