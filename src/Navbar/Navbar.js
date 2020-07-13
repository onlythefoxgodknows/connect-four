import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import "./Navbar.css";

export default class Navbar extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className={"navbar-brand yellow"} to={"/connect-four"}>Connect Four</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="red nav-link" to={"/rules"}>Rules of the Game</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="yellow nav-link" to={"/history"}>Brief History of the Game</Link>
                        </li>
                        <li className="nav-item active">
                            <a target="_blank" className="red nav-link" href="https://www.google.com/search?sxsrf=ALeKk01imzEpZCxYMR_Ai4MvPkxSkL8QGg%3A1594511471296&source=hp&ei=b1AKX9fvDoXDytMP8vexmAU&q=connect+four&oq=connect+four&gs_lcp=CgZwc3ktYWIQAzIFCAAQsQMyBQgAELEDMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BQgAEJECOggIABCxAxCDAToECAAQQzoHCAAQsQMQClDHBljOFmDvF2gAcAB4AIABXIgBrQeSAQIxMpgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwiX49WOssbqAhWFoXIEHfJ7DFMQ4dUDCAk&uact=5">Link to Google Search <span className="sr-only">(current)</span></a>
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
                    </ul>
                </div>
            </nav>
        )
    }
}