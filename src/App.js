import React, {useState, useEffect} from 'react';

import './App.css';

import {BrowserRouter as  Link} from 'react-router-dom';



function App() {
  const [teams, setTeams] = useState([])
  const [news, setNews] = useState([])

  useEffect(() =>  {
    fetch('http://newsapi.org/v2/everything?q=ncaa-football&from=2020-07-08&sortBy=publishedAt&apiKey=661358eea45c4220bca8dd46168ebcea')
      .then(res => res.json())
      .then(resObj => setNews(resObj.articles))

    }, [news]
    )

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
      {news ? news.map((article) => {

        return(
        <div className="article-div">
        <img className="articleImg" src={article.urlToImage}/>
        <h2 className="article-head" >{article.title}</h2>
        <a>{article.description} </a>

         </div>)
      }) : null}

      news
      </div>

      <div className="right-column">
      stuff
      </div>

      </div>


      <div> </div>



    </div>

  );
}

export default App;
