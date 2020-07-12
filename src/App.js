import React from 'react';
import  {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';

import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import History from './History';
import Rules from './Rules';
import Game from './Game/Game';

function App() {
  return (
      <Router>
          <Navbar />
          <Switch>
              <Route exact path="/">
                  <Game />
              </Route>
              <Route exact path="/about">
                  <About />
              </Route>
              <Route exact path="/contact">
                  <Contact />
              </Route>
              <Route exact path="/history">
                  <History />
              </Route>
              <Route exact path="/rules">
                  <Rules />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
