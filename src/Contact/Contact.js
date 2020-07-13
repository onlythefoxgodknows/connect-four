import React from 'react';
import './Contact.css';

export default class Contact extends React.Component {
    render() {
        return(
            <div className="card profile animate__animated animate__jackInTheBox card-5">
                <img className="card-img-top" src="https://cunytechprep.nyc/c3/LinHui.JPG" alt="Card image cap"/>
                <div className="card-body text-center">
                    <h1 className="title">Hui Lin</h1>
                    <p className="card-text">Hi! I am a student at Queens College, and I made this simple web application for a class project.</p>
                </div>
            </div>
        )
    }
}