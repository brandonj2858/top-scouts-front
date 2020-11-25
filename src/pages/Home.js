import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const Home = () => {

  const [teams, setTeams] = useState([])
  const [news, setNews] = useState([])

  useEffect(() =>  {
    let unfixedDate = new Date()
    let fixedDate = `${unfixedDate.getMonth() + 1}/${unfixedDate.getDate()}/${unfixedDate.getFullYear()}`
    console.log(fixedDate);

    fetch(`http://newsapi.org/v2/everything?q=ncaa-football&from=2020-09-0&sortBy=publishedAt&apiKey=661358eea45c4220bca8dd46168ebcea`)
      .then(res => res.json())
      .then(resObj => setNews(resObj.articles))


    }, []
    )

    const handleArt = (evt) => {
      console.log(news)
    }

  return(
    <div>

          <div className="main-container">

          <div className="left-column">

          <div className="offense-container">
            <header className="offense-header">Upcoming</header>
            <ul className="offense-list">

            <li className="pos-item">CFP Playoffs 1/1</li>
            <li className="pos-item">CFP Ntl Championship 1/11</li>
            <li className="pos-item">NFL Wild-Card 1/9</li>
            <li className="pos-item">Super Bowl 2/7</li>
            <li className="pos-item">NFL Draft 4/29</li>


            </ul>
          </div>


          </div>

          <div className="middle-column">
          {news ? news.map((article) => {

            return(
            <div target="_blank" onClick={handleArt} className="article-div">
            <a href={article.url}>
            <img className="articleImg" src={article.urlToImage}/>
            </a>
            <h2 className="article-head" >{article.title}</h2>
            <a className="article-desc">{article.description} </a>
            </div>
             )
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
