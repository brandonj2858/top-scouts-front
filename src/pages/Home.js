import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const Home = () => {

  const [teams, setTeams] = useState([])
  const [news, setNews] = useState([])

  useEffect(() =>  {
    fetch('http://newsapi.org/v2/everything?q=ncaa-football&from=2020-07-08&sortBy=publishedAt&apiKey=661358eea45c4220bca8dd46168ebcea')
      .then(res => res.json())
      .then(resObj => setNews(resObj.articles))


    }, []
    )

  return(
    <div>

          <div className="main-container">

          <div className="left-column">

          <div className="offense-container">
            <header className="offense-header">Offense</header>
            <ul className="offense-list">

            <li className="pos-item">Quarterback </li>

            <li className="pos-item">Runningback </li>
            <li className="pos-item">FullBack </li>
            <li className="pos-item">Offensive Tackle</li>
            <li className="pos-item">Offensive Gaurd </li>
            <li className="pos-item">Tight End</li>
            <li className="pos-item">Wide Reciever </li>

            </ul>
          </div>

          <div className="offense-container">
            <header className="offense-header">Defense</header>
            <ul className="offense-list">


            <li className="pos-item">Defensive Tackle</li>
            <li className="pos-item">Defensive End </li>
            <li className="pos-item">Inside Linebacker </li>
            <li className="pos-item">Outside Linebacker</li>
            <li className="pos-item">Corner Back</li>
            <li className="pos-item">Free Safety</li>
            <li className="pos-item">Strong Safety</li>




            </ul>
          </div>

          </div>

          <div className="middle-column">
          {news ? news.map((article) => {

            return(
            <div className="article-div">
            <img className="articleImg" src={article.urlToImage}/>
            <h2 className="article-head" >{article.title}</h2>
            <a className="article-desc">{article.description} </a>

             </div>)
          }) : null}


          </div>

          <div className="right-column">
          <div className="offense-container">
            <header className="ptw-header">Players To Watch</header>
            <ul className="offense-list">

            <li className="pos-item">Travis Etienne, RB </li>

            <li className="pos-item">Nico Collins, WR </li>
            <li className="pos-item">Alex Leatherwood, OT </li>
            <li className="pos-item">Carlos Basham, DE</li>
            <li className="pos-item">Jacoby Stevens, TE </li>
            <li className="pos-item">DJ Daniel, DB</li>
            <li className="pos-item">Shawn Davis, Florida</li>


            </ul>
          </div>



          </div>

          </div>


          <div> </div>


    </div>

  )
}

export default Home
