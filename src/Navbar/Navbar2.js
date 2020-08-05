import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import "./Navbar.css";
import fire from '../config/Fire.js';


class Navbar2 extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.history.push("/login");
        fire.auth().signOut().then((u) => {
            // eslint-disable-next-line no-restricted-globals
        })
    }

    render() {
        let signout = this.props.user ? <button className={"btn btn-danger"} onClick={this.logout}>Sign Out</button> : null;
        let user = this.props.user ? <button className={"btn btn-info"}>Signed In: {this.props.user.email}</button> : null;
        return (
            <Navbar style={{backgroundColor: "#4CAF50"}} expand="lg">
                <Link className={"navbar-brand yellow"} to={"/connect-four"}>c<span style={{display: "inline-block"}} className={"RedPieceSmall card-5 Centered"} />nnect f<span style={{display: "inline-block"}} className={"YellowPieceSmall card-5 Centered"} />ur
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="red nav-link" to={"/rules"}>Rules of the Game</Link>
                        <Link className="yellow nav-link" to={"/history"}>Brief History of the Game</Link>
                        <li className="nav-item active">
                            <a target="_blank" className="red nav-link" href="https://www.google.com/search?q=connect%20four">Link to Google Search <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <Link className="red nav-link" to={"/about"}>About the Developer</Link>
                        </li>
                        <li className="nav-item active">
                            <a className="red nav-link" href={"mailto:huilin1618@gmail.com"}>Contact Me</a>
                        </li>
                        <li style={{marginRight: "6px"}} className="nav-item active">
                            <Link className="yellow nav-link" to={"/elsewhere"}>Play Elsewhere</Link>
                        </li>
                        <li style={{marginRight: "6px"}}>
                            {user}
                        </li>
                        <li>
                            {signout}
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(Navbar2);