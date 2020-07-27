import React, {useEffect, useState} from 'react'
import PlayerForm from '../components/PlayerForm'

const Find = (props) => {

  const [updateForm, setUpdateForm] = useState(false)

  const showForm = (evt) => {
    setUpdateForm(true)

  }

  return (
    <div>

      <div style={{textAlign: "center"}}>
        <marquee className="admin-heading"><h1 style={{marginTop: '10px', color: "black"}}>Search Players</h1></marquee>
      </div>

      <div className="admin-left">
      <div className="offense-container">
        <header className="offense-header">Duties</header>
        <ul className="offense-list">
        <li className="admin-list" onClick={showForm}>Update Player </li>
        <li className="admin-list">Edit Account</li>
        <li className="admin-list">Add News</li>
        </ul>
      </div>

      </div>

      <div className="admin-right">
      {updateForm ? <PlayerForm /> : null}
      </div>

    </div>
  )
}


export default Find
