import React from 'react';
import './board.css';

export default class Winner extends React.Component {

    render() {
        let piece = this.props.turn % 2 == 1 ? "RedPiece" : "YellowPiece";
        return (
            <div>
                <div className={piece + " Centered"}></div> wins!
            </div>
        )
    }
}