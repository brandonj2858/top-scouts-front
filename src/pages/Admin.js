import React, {useEffect, useState} from 'react'


const Admin = (props) => {



  return (
    <div>
      <div style={{textAlign: "center"}}>
        <h1 className="admin-heading">Welcome </h1>
      </div>

      <div className="admin-left">
      <div className="offense-container">
        <header className="offense-header">Duties</header>
        <ul className="offense-list">
        <li className="admin-list">Update Player </li>
        <li className="admin-list">Edit Account</li>
        <li className="admin-list">Add News</li>




        </ul>
      </div>

      </div>


    </div>
  )
}


export default Admin
