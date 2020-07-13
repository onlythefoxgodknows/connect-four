import React from 'react';
import './History.css';

export default class About extends React.Component {
    render() {
        return(
            <div>
                <div className="card profile animate__animated animate__jackInTheBox card-5">
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/7/79/Connect_4_Board_and_Box.jpg" alt="Card image cap"/>
                    <div className="card-body text-center">
                        <h1 className={"title"}>A Brief History of Connect Four</h1>
                        <p className="card-text rule">Captain Cook is rumored to have played a similar game obsessively.</p>
                        <p className={"rule"}>In 1973, the modern version of Connect 4 is created by Howard Wexler and his business partner, Ned Strongin. </p>
                        <p className={"rule"}>In 1974, the Connect 4 game is licensed by Milton Bradley (which was later bought by Hasbro). </p>
                        <p className={"rule"}>In 1988, Connect 4 was solved for the first time. </p>
                    </div>
                </div>
            </div>
        )
    }
}