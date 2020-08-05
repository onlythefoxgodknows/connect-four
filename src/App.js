import React from 'react';
import  {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';

import './App.css';
import fire from './config/Fire';

import Navbar from './Navbar/Navbar';
import Navbar2 from './Navbar/Navbar2';
import About from './About/About';
import Contact from './Contact/Contact';
import History from './History/History';
import Rules from './Rules/Rules';
import Game from './Game/Game';
import Elsewhere from "./Elsewhere/Elsewhere";
import Login from './Login/Login';
import Register from './Register/Register';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
                this.setState({
                    user: user
                });
            } else {
                console.log(user);
                this.setState({
                    user: null
                });
            }
        })
    }

    render() {
        let game = <Game user={this.state.user}/>
        return (
            <Router>
                <Navbar2 user={this.state.user}/>
                <Switch>
                    <PrivateRoute user={this.state.user} exact path="/" isAuthenticated={this.state.user} component={Game} />
                    <PrivateRoute user={this.state.user} exact path="/connect-four" isAuthenticated={this.state.user} component={Game} />
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
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

}

export default App;
