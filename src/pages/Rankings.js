import React from 'react';

import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';


const Rankings = () => {
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

          <div className="main-container">

          <div className="left-column">

          <div className="offense-container">
            <header className="offense-header">Offense</header>
            <ul className="offense-list">


            <Link to="/rankings"><li className="pos-item">Quarterback </li></Link>


            <li className="pos-item">Runningback </li>
            <li className="pos-item">FullBack </li>
            <li className="pos-item">Offensive Tackle</li>
            <li className="pos-item">Offensive Gaurd </li>
            <li className="pos-item">Tight End</li>
            <li className="pos-item">Wide Reciever </li>




            </ul>
          </div>

          </div>

          <div className="middle-column">
          <table>
            <tr>
              <th>Rank</th>
              <th>Full Name</th>
              <th>School</th>
              <th>Height</th>
              <th>Weight</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Helen Bennett</td>
              <td>UK</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Yoshi </td>
              <td>Canada</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
              <td> </td>
              <td> </td>
            </tr>
            </table>


          </div>

          <div className="right-column">

          </div>

          </div>


          <div> </div>



        </div>
    )
}

export default Rankings
