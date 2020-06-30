import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Rankings from './pages/Rankings'
import Search from './pages/Search'

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Switch>
  <Route exact path="/" component={App}/>
  <Route exact path="/rankings" component={Rankings}/>
  <Route exact path="/search" component={Search}/>

  </Switch >

  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
