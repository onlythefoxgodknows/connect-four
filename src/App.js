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
import Game from './Game';

function App() {
  return (
      <Router>
          <Navbar />
          <Switch>
              <Route path="/">
                  <Game />
              </Route>
              <Route path="/about">
                  <About />
              </Route>
              <Route path="/contact">
                  <Contact />
              </Route>
              <Route path="/history">
                  <History />
              </Route>
              <Route path="/rules">
                  <Rules />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
