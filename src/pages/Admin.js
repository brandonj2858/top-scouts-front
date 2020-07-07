import React, {useEffect, useState} from 'react'
import PlayerForm from '../components/PlayerForm'

const Admin = (props) => {

  const [updateForm, setUpdateForm] = useState(false)

  const showForm = (evt) => {
    setUpdateForm(true)

  }

  return (
    <div>
    <div className="bar-div">
    <header className="site-head">
    <div className="head-back">
    <h1 className="nav-heading">Top Scouts</h1>
    </div>
    </header>
    <ul className="nav-bar">
      <li className="nav-item">Login</li>
      <li className="nav-item">Rankings</li>
      <li className="nav-item">Search</li>
    </ul>
    </div>
      <div style={{textAlign: "center"}}>
        <marquee className="admin-heading"><h1 style={{marginTop: '10px'}}>Admin Page</h1></marquee>
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


export default Admin
