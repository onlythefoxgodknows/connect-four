import React from 'react';
import  {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';

import Navbar from './Navbar/Navbar';
import Navbar2 from './Navbar/Navbar2';
import About from './About/About';
import Contact from './Contact/Contact';
import History from './History/History';
import Rules from './Rules/Rules';
import Game from './Game/Game';
import Elsewhere from "./Elsewhere/Elsewhere";

function App() {
  return (
      <Router>
          <Navbar2 />
          <Switch>
              <Route exact path="/connect-four">
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
              <Route exact path="/elsewhere">
                  <Elsewhere />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
