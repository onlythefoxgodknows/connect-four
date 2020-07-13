import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default class Navbar2 extends React.Component {
    render() {
        return (
            <Navbar bg="primary" expand="lg">
                <Link className={"navbar-brand yellow"} to={"/connect-four"}>Connect Four</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="red nav-link" to={"/rules"}>Rules of the Game</Link>
                        <Link className="yellow nav-link" to={"/history"}>Brief History of the Game</Link>
                        <li className="nav-item active">
                            <a target="_blank" className="red nav-link" href="https://www.google.com/search?q=connect%20four">Link to Google Search <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <Link className="yellow nav-link" to={"/about"}>About the Developer</Link>
                        </li>
                        <li className="nav-item active">
                            <a className="red nav-link" href={"mailto:huilin1618@gmail.com"}>Contact Me</a>
                        </li>
                        <li className="nav-item active">
                            <Link className="yellow nav-link" to={"/elsewhere"}>Play Elsewhere</Link>
                        </li>
                        <NavDropdown title="Dropdown For Grade" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}