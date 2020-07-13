import React from 'react';
import './board.css';

export default class PieceSelection extends React.Component {

    render() {
        let piece = this.props.turn % 2 == 0 ? "RedPiece card-5" : "YellowPiece card-5";
        return (
            <span onClick={() => this.props.playPiece(this.props.value)} className={"InvisibleSquare"}>
                <div className={piece + " Centered"}></div>
            </span>
        )
    }
}