import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PR from './PR';
import CMN from './CMN';
import Exploration from './Exploration';
import Valuations from './Valuations';
import Foundations from './Foundations';
import Development from './Development';
import FD from './FD';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/pr" component={PR}/>
        <Route exact path="/cmn" component={CMN}/>
        <Route exact path="/exploration" component={Exploration}/>
        <Route exact path="/valuations" component={Valuations}/>
        <Route exact path="/foundations" component={Foundations}/>
        <Route exact path="/development" component={Development}/>
        <Route exact path="/fd" component={FD}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
