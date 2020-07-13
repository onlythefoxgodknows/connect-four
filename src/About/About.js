import React from 'react';
import './About.css';

export default class About extends React.Component {
    render() {
        return(
            <div className="card profile animate__animated animate__jackInTheBox card-5">
                <img className="card-img-top" src="https://cunytechprep.nyc/c3/LinHui.JPG" alt="Card image cap"/>
                    <div className="card-body text-center">
                        <h1 className="title">Hui Lin</h1>
                        <p className="card-text">Hi! I am a student at Queens College. I made this React.js web application for my Internet and Web Technologies summer class.</p>
                    </div>
            </div>
        )
    }
}