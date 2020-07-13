import React from 'react';
import './Rules.css';

export default class About extends React.Component {
    render() {
        return(
            <div className="card profile animate__animated animate__jackInTheBox card-5">
                <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Connect_Four.gif" alt="Card image cap"/>
                <div className="card-body text-center">
                    <h1 className={"title"}>How to Play this Game</h1>
                    <p className="card-text rule">Two players alternate turns dropping one of their discs at a time into an unfilled column, until one player achieves a four in a row diagonally, horizontally, or vertically.</p>
                    <p className={"rule"}>If the board fills up before either player achieves four in a row, then the game is a draw. </p>
                </div>
            </div>
        )
    }
}